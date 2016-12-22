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

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.ws.config.annotation.EnableWs;
import org.springframework.ws.wsdl.wsdl11.DefaultWsdl11Definition;
import org.springframework.xml.xsd.SimpleXsdSchema;
import org.springframework.xml.xsd.XsdSchema;

/**
 * @author Hicham BOUSAREHANE
 * @version 1.0
 *
 */
@Configuration
@EnableWs
public class AppConfig {
	@Bean(name = "students")
	public DefaultWsdl11Definition defaultWsdl11Definition(XsdSchema studentsSchema) {
		DefaultWsdl11Definition wsdl11Definition = new DefaultWsdl11Definition();
		wsdl11Definition.setPortTypeName("StudentsPort");
		wsdl11Definition.setLocationUri("/soapws");
		wsdl11Definition.setTargetNamespace("http://sban.com/soap");
		wsdl11Definition.setSchema(studentsSchema);
		return wsdl11Definition;
	}

	@Bean
	public XsdSchema studentsSchema() {
		return new SimpleXsdSchema(new ClassPathResource("xsd/students.xsd"));
	}
}
