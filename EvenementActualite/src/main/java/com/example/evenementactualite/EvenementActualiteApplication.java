package com.example.evenementactualite;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class EvenementActualiteApplication {

	public static void main(String[] args) {
		SpringApplication.run(EvenementActualiteApplication.class, args);
	}

}
