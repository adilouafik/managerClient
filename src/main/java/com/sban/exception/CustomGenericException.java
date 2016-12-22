/**
 * Project: Atos Worldline ICT
 * Sub-project: [Sub project]
 * Application: [Application]
 * Producer: AWL
 * Version Date : 2 déc. 2016
 * Version number : 1.0
 * Author : Hicham Bousarehane
 * Contact : hicham.bousarehane@atos.net
 * Notes : <Release Notes (classified by deviation from previous versions)>
 */
package com.sban.exception;

/**
 * @author Hicham BOUSAREHANE
 * @version 1.0
 *
 */
public class CustomGenericException extends RuntimeException {
	
	private static final long serialVersionUID = 1L;

	private String errCode;
	private String errMsg;

	public String getErrCode() {
		return errCode;
	}

	public void setErrCode(String errCode) {
		this.errCode = errCode;
	}

	public String getErrMsg() {
		return errMsg;
	}

	public void setErrMsg(String errMsg) {
		this.errMsg = errMsg;
	}

	public CustomGenericException(String errCode, String errMsg) {
		this.errCode = errCode;
		this.errMsg = errMsg;
	}
	
}
