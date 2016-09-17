package com.accedia.tutorial.spring.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.accedia.tutorial.spring.entities.Department;

/**
 * @author georgi.yolovski
 *
 */
public interface DepartmentRepository extends CrudRepository<Department, Long> {
	List<Department> findAllDistinctDepartmentsByEmployeesSalaryGreaterThanOrderByName(double salary);
}
