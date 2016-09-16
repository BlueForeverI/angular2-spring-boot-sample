package com.accedia.tutorial.spring.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan(basePackages = { "com.accedia.tutorial.spring" })
@EnableJpaRepositories(basePackages = { "com.accedia.tutorial.spring.repositories" })
public class SpringApp {

	public static void main(String[] args) {
		SpringApplication.run(SpringApp.class, args);
	}
}
