package com.accedia.tutorial.spring.models;

import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * @author georgi.yolovski
 *
 */
@Entity
@Table(name = "users")
public class User {
	private long userId;

	private String username;

	public long getUserId() {
		return userId;
	}

	public void setUserId(long userId) {
		this.userId = userId;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}
}
