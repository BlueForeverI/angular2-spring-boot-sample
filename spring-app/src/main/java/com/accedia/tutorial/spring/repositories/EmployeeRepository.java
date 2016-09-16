package com.accedia.tutorial.spring.repositories;

import org.springframework.data.repository.CrudRepository;

import com.accedia.tutorial.spring.entities.Employee;

/**
 * @author georgi.yolovski
 *
 */
public interface EmployeeRepository extends CrudRepository<Employee, Long> {

}
