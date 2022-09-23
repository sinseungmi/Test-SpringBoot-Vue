package com.example.test;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class HelloTestController {
	
	@RequestMapping("/hello")
	public String showHello() {
		return "hello!";
	}
}
