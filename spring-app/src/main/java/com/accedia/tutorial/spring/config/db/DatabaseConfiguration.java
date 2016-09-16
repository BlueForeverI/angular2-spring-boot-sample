package com.accedia.tutorial.spring.config.db;

import java.util.Properties;

import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.JpaVendorAdapter;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;

/**
 * @author georgi.yolovski
 *
 */
@Configuration
public class DatabaseConfiguration {

	@Value("${db.driver}")
	private String dbDriver;

	@Value("${db.url}")
	private String dbUrl;

	@Value("${db.username}")
	private String dbUsername;

	@Value("${db.password}")
	private String dbPassword;

	@Value("${hibernate.dialect}")
	private String hibernateDialect;

	@Value("${hibernate.show_sql}")
	private String hibernateShowSql;

	@Value("${hibernate.format_sql}")
	private String hibernateFormatSql;

	@Value("${hibernate.hbm2ddl.auto}")
	private String hibernateHbm2DdlAuto;

	@Bean
	public LocalContainerEntityManagerFactoryBean entityManagerFactory() {
		LocalContainerEntityManagerFactoryBean em = new LocalContainerEntityManagerFactoryBean();
		em.setDataSource(dataSource());
		em.setPackagesToScan(new String[] { "com.accedia.tutorial.spring.entities" });

		JpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();
		em.setJpaVendorAdapter(vendorAdapter);
		em.setJpaProperties(additionalProperties());

		return em;
	}

	@Bean
	public PlatformTransactionManager transactionManager(EntityManagerFactory emf) {
		JpaTransactionManager transactionManager = new JpaTransactionManager();
		transactionManager.setEntityManagerFactory(emf);

		return transactionManager;
	}

	@Bean
	public DataSource dataSource() {
		DriverManagerDataSource dataSource = new DriverManagerDataSource();
		dataSource.setDriverClassName(dbDriver);
		dataSource.setUrl(dbUrl);
		dataSource.setUsername(dbUsername);
		dataSource.setPassword(dbPassword);
		return dataSource;
	}

	Properties additionalProperties() {
		Properties properties = new Properties();
		properties.setProperty("hibernate.dialect", hibernateDialect);
		properties.setProperty("hibernate.show_sql", hibernateShowSql);
		properties.setProperty("hibernate.format_sql", hibernateFormatSql);
		properties.setProperty("hibernate.hbm2ddl.auto", hibernateHbm2DdlAuto);
		return properties;
	}
}
