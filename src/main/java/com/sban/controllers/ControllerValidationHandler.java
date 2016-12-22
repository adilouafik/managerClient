package com.sban.controllers;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.sban.exception.CustomGenericException;
import com.sban.model.ErrorDTO;

@ControllerAdvice
@RestController
public class ControllerValidationHandler {
    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public List<ErrorDTO> processValidationError(MethodArgumentNotValidException ex) {
      
    	
    	List<ErrorDTO> listOfErros=	ex
                .getBindingResult()
                .getFieldErrors()
                .stream()
                .map(f -> new ErrorDTO(f.getField(), f.getDefaultMessage(),
                        f.getArguments().length > 1 ? Arrays.stream(f.getArguments()).skip(1).map(Object::toString).collect(Collectors.toList())
                                : null))
                .collect(Collectors.toList());
    	return listOfErros;
    }
    
    
	@ExceptionHandler(CustomGenericException .class)
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	public List<ErrorDTO> processError(CustomGenericException ex) {

		List<ErrorDTO> listOfErros = new ArrayList<ErrorDTO>();
		listOfErros.add(new ErrorDTO(ex.getErrCode(), ex.getErrMsg(), null));
		return listOfErros;
	}

}