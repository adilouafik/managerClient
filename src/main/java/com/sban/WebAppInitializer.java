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
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRegistration.Dynamic;
import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.ws.transport.http.MessageDispatcherServlet;

/**
 * @author Hicham BOUSAREHANE
 * @version 1.0
 *
 */
public class WebAppInitializer implements WebApplicationInitializer {
	public void onStartup(ServletContext servletContext) throws ServletException {
		AnnotationConfigWebApplicationContext ctx = new AnnotationConfigWebApplicationContext();
		ctx.register(AppConfig.class);
		ctx.setServletContext(servletContext);
		MessageDispatcherServlet servlet = new MessageDispatcherServlet();
		servlet.setApplicationContext(ctx);
		servlet.setTransformWsdlLocations(true);
		Dynamic dynamic = servletContext.addServlet("dispatcher", servlet);
		dynamic.addMapping("/soapws/*");
		dynamic.setLoadOnStartup(1);
	}
}
