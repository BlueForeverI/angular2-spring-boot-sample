package com.accedia.tutorial.spring.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.accedia.tutorial.spring.models.User;

/**
 * @author georgi.yolovski
 *
 */
@RestController
@RequestMapping("/api/test")
public class TestController {
	
	private ArrayList<User> _users = new ArrayList<User>();
	
	public TestController(){
		_users.add(new User(){{
			setUserId(1);
			setUsername("Test user");
		}});
	}
	
	@RequestMapping(value = "/message", method = RequestMethod.GET)
	public String getMessage(){
		return "Hello from Spring Boot!";
	}
	
	@RequestMapping(value = "/users", method = RequestMethod.GET)
	public List<User> getUsers(){
		return _users;
	}
	
	@RequestMapping(value = "/users", method = RequestMethod.POST)
	public void addUser(@RequestBody User user){
		this._users.add(user);
	}
}
