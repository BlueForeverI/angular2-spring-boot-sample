package com.accedia.tutorial.spring.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.accedia.tutorial.spring.entities.User;

/**
 * @author georgi.yolovski
 *
 */
public interface UserRepository extends CrudRepository<User, Long> {
	
}
