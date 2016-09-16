package com.accedia.tutorial.spring.controllers;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.accedia.tutorial.spring.entities.Employee;
import com.accedia.tutorial.spring.repositories.EmployeeRepository;

/**
 * @author georgi.yolovski
 *
 */
@RestController
@RequestMapping("/api/employees")
public class EmployeesController {
	@Autowired
	private EmployeeRepository employeeRepo;

	@RequestMapping("")
	public List<Employee> getAllEmployees() {
		return StreamSupport.stream(this.employeeRepo.findAll().spliterator(), false).collect(Collectors.toList());
	}

	@RequestMapping(value = "", method = RequestMethod.POST)
	public Employee addEmployee(@RequestBody Employee employee) {
		return this.employeeRepo.save(employee);
	}

	@RequestMapping(value = "/{id}")
	public Employee getById(@PathVariable Long id) {
		return this.employeeRepo.findOne(id);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public void delete(@PathVariable Long id) {
		this.employeeRepo.delete(id);
	}
}
