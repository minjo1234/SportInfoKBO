package com.example.kbo.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {

    @GetMapping("/playersInfo")
    public String test() {

        return "Hello World";

    }
}
