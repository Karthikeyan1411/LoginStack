package com.example.loginbackend.controllers;

import com.example.loginbackend.entities.User;
import com.example.loginbackend.services.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173") // React dev server
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public Object login(@RequestBody User loginRequest) {
        User user = authService.login(loginRequest.getUsername(), loginRequest.getPassword());

        if (user != null) {
            return new LoginResponse(user.getUsername(), user.getSalary());
        } else {
            return new ErrorResponse("Invalid username or password");
        }
    }

    public static class LoginResponse {

        private String username;
        private int salary;

        public LoginResponse() {
        }

        public LoginResponse(String username, int salary) {
            this.username = username;
            this.salary = salary;
        }

        public String getUsername() {
            return username;
        }

        public void setUsername(String username) {
            this.username = username;
        }

        public int getSalary() {
            return salary;
        }

        public void setSalary(int salary) {
            this.salary = salary;
        }
    }

    public static class ErrorResponse {

        private String message;

        public ErrorResponse() {
        }

        public ErrorResponse(String message) {
            this.message = message;
        }

        public String getMessage() {
            return message;
        }

        public void setMessage(String message) {
            this.message = message;
        }
    }
}

