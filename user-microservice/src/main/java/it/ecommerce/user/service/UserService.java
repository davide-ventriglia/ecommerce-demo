package it.ecommerce.user.service;

import javax.persistence.EntityNotFoundException;

import it.ecommerce.common.exception.CustomEntityAlreadyExistsException;
import it.ecommerce.common.exception.WrongDataException;
import it.ecommerce.user.entity.User;
import it.ecommerce.user.model.UserLoginDTO;
import it.ecommerce.user.model.UserLogoutDTO;
import it.ecommerce.user.model.UserRegistrationDTO;

public interface UserService {
	
	public User register(UserRegistrationDTO user) throws CustomEntityAlreadyExistsException;
	
	public String login(UserLoginDTO loginDto) throws EntityNotFoundException, WrongDataException;
	
	public void logout(UserLogoutDTO logoutDto) throws EntityNotFoundException, WrongDataException;

}
