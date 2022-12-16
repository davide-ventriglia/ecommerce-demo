package it.ecommerce.user.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import it.ecommerce.user.entity.User;
import it.ecommerce.user.model.UserLoginDTO;
import it.ecommerce.user.model.UserLogoutDTO;
import it.ecommerce.user.model.UserRegistrationDTO;
import it.ecommerce.user.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	UserService userService;

	@PostMapping("/register")
	public User register(@RequestBody UserRegistrationDTO user){
		return userService.register(user);
	}

	@PostMapping("/login")
	public String login(@RequestBody UserLoginDTO loginDto){
		return userService.login(loginDto);
	}

	@PostMapping("/logout")
	public void logout(@RequestBody UserLogoutDTO logoutDto){
		userService.logout(logoutDto);
	}

}
