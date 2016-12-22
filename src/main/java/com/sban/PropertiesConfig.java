/**
 * Project: Atos Worldline ICT
 * Sub-project: [Sub project]
 * Application: [Application]
 * Producer: AWL
 * Version Date : 21 nov. 2016
 * Version number : 1.0
 * Author : Hicham Bousarehane
 * Contact : hicham.bousarehane@atos.net
 * Notes : <Release Notes (classified by deviation from previous versions)>
 */
package com.sban;
import org.apache.logging.log4j.core.config.Configurator;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

/**
 * @author Hicham BOUSAREHANE
 * @version 1.0
 *
 */
@Configuration
public class PropertiesConfig {

	@Value("${conf.angular.properties.dir}")
	private String pathLog;

	@Bean
	@Profile("local")
	public boolean properties() {

		Configurator.initialize(null, pathLog);
		return true;
	}
	
	@Bean
	@Profile("qualif")
	public boolean propertiesQualif() {

		Configurator.initialize(null, pathLog);
		return true;
	}
}
