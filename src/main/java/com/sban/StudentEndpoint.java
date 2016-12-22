/**
 * Project: Atos Worldline ICT
 * Sub-project: [Sub project]
 * Application: [Application]
 * Producer: AWL
 * Version Date : 5 déc. 2016
 * Version number : 1.0
 * Author : Hicham Bousarehane
 * Contact : hicham.bousarehane@atos.net
 * Notes : <Release Notes (classified by deviation from previous versions)>
 */
package com.sban;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ws.server.endpoint.annotation.Endpoint;
import org.springframework.ws.server.endpoint.annotation.PayloadRoot;
import org.springframework.ws.server.endpoint.annotation.RequestPayload;
import org.springframework.ws.server.endpoint.annotation.ResponsePayload;

import com.sban.soap.GetStudentRequest;
import com.sban.soap.GetStudentResponse;

/**
 * @author Hicham BOUSAREHANE
 * @version 1.0
 *
 */
@Endpoint
public class StudentEndpoint {
	private static final String NAMESPACE_URI = "http://sban.com/soap";
	@Autowired
	private StudentUtility studentUtility;

	@PayloadRoot(namespace = NAMESPACE_URI, localPart = "getStudentRequest")
	@ResponsePayload
	public GetStudentResponse getCountry(@RequestPayload GetStudentRequest request) {
		GetStudentResponse response = new GetStudentResponse();
		response.setStudent(studentUtility.getStudent(request.getStudentId()));
		return response;
	}
}
