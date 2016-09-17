package com.accedia.tutorial.spring.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.accedia.tutorial.spring.entities.Department;
import com.accedia.tutorial.spring.entities.Employee;
import com.accedia.tutorial.spring.repositories.DepartmentRepository;
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

	@Autowired
	private DepartmentRepository departmentsRepo;

	@RequestMapping("")
	public Iterable<Employee> getAllEmployees() {
		return this.employeeRepo.findAll();
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

	@RequestMapping(value = "/seed", method = RequestMethod.GET)
	public Iterable<Employee> insertSeedData() {
		List<Department> departments = new ArrayList<Department>();
		departments.add(new Department("Software"));
		departments.add(new Department("Support"));
		departments.add(new Department("HR"));
		departments.add(new Department("Management"));

		departments = StreamSupport.stream(this.departmentsRepo.save(departments).spliterator(), false)
				.collect(Collectors.toList());

		ArrayList<Employee> employees = new ArrayList<Employee>();
		Random random = new Random();
		for (int i = 0; i < 20; i++) {
			Employee employee = new Employee();
			employee.setName("Employee #" + i);
			employee.setSalary(1000 + random.nextInt(1000));
			employee.setDepartment(departments.get(i % departments.size()));

			employees.add(employee);
		}

		return this.employeeRepo.save(employees);
	}
}
