package com.accedia.tutorial.spring.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author georgi.yolovski
 *
 */
@RestController
@RequestMapping("/api/test")
public class TestController {
	@RequestMapping(value = "/message", method = RequestMethod.GET)
	public String getMessage(){
		return "Hello from Spring Boot!";
	}
}
