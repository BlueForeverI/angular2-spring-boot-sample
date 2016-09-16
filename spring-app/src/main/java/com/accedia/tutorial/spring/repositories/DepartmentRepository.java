package com.accedia.tutorial.spring.repositories;

import java.util.List;
import java.util.stream.Stream;

import org.springframework.data.repository.CrudRepository;

import com.accedia.tutorial.spring.entities.Department;

/**
 * @author georgi.yolovski
 *
 */
public interface DepartmentRepository extends CrudRepository<Department, Long> {
	List<Department> findAll();
	
	Stream<Department> findAllDistinctDepartmentsByEmployeesSalaryGreaterThan(double minSalary);
}
