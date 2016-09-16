package com.accedia.tutorial.spring.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.accedia.tutorial.spring.entities.User;
import com.accedia.tutorial.spring.repositories.UserRepository;

/**
 * @author georgi.yolovski
 *
 */
@RestController
 @RequestMapping("/api/users")
public class UserController {
	
	@Autowired
	private UserRepository userRepo;
	
	@RequestMapping(value = "", method = RequestMethod.GET)
	public List<User> getAllUsers(){
		
		List<User> users = new ArrayList<User>();
		this.userRepo.findAll().forEach(users::add);
		
		return users;
	}
}
