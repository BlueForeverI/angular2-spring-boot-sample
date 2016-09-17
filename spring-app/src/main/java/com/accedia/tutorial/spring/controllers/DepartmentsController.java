package com.accedia.tutorial.spring.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.accedia.tutorial.spring.entities.Department;
import com.accedia.tutorial.spring.repositories.DepartmentRepository;

/**
 * @author georgi.yolovski
 *
 */
@RestController
@RequestMapping("/api/departments")
public class DepartmentsController {
	@Autowired
	private DepartmentRepository departmentRepo;

	@RequestMapping(value = "", method = RequestMethod.GET)
	public Iterable<Department> getAllDepartments() {
		return this.departmentRepo.findAll();
	}

	@RequestMapping(value = "", method = RequestMethod.POST)
	public void addDepartment(@RequestBody Department department) {
		this.departmentRepo.save(department);
	}

	@RequestMapping(value = "/min-salary/{minSalary}")
	public List<Department> getDepartmentsByEmployeeMinSalary(@PathVariable double minSalary) {

		
		// how????
		return this.departmentRepo.findAllDistinctDepartmentsByEmployeesSalaryGreaterThanOrderByName(minSalary);
	}
}
