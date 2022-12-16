package it.ecommerce.user.service.impl;

import java.time.LocalDateTime;
import java.util.Base64;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import it.ecommerce.common.exception.CustomEntityAlreadyExistsException;
import it.ecommerce.common.exception.CustomEntityNotFoundException;
import it.ecommerce.common.exception.WrongDataException;
import it.ecommerce.user.entity.User;
import it.ecommerce.user.model.UserLoginDTO;
import it.ecommerce.user.model.UserLogoutDTO;
import it.ecommerce.user.model.UserRegistrationDTO;
import it.ecommerce.user.repository.UserRepository;
import it.ecommerce.user.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	private UserRepository userRepository;
	
	public UserServiceImpl(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	@Override
	public User register(UserRegistrationDTO userDto) throws CustomEntityAlreadyExistsException {
		Optional<User> u = userRepository.findByEmail(userDto.getEmail());
		if (u.isPresent())
			throw new CustomEntityAlreadyExistsException(
					"The user with email [" + userDto.getEmail() + "] is already present in the database.");
		ModelMapper modelMapper = new ModelMapper();
		User user = modelMapper.map(userDto, User.class);
		return userRepository.save(user);
	}

	@Override
	public String login(UserLoginDTO loginDto) throws EntityNotFoundException, WrongDataException {
		Optional<User> u = userRepository.findByEmail(loginDto.getEmail());
		if (!u.isPresent())
			throw new CustomEntityNotFoundException(
					"The user with email [" + loginDto.getEmail() + "] does not exists in the database.");
		if (!u.get().getPassword().equals(loginDto.getPassword())) {
			throw new WrongDataException("The password is wrong!");
		}
		String pseudoToken = u.get().getEmail() + "_#_" + u.get().getRole() + "_#_" + LocalDateTime.now().toString();
		String token = Base64.getEncoder().encodeToString(pseudoToken.getBytes());
		u.get().setToken(token);
		userRepository.save(u.get());
		return token;
	}

	@Override
	public void logout(UserLogoutDTO logoutDto) throws EntityNotFoundException, WrongDataException {
		byte[] decodedTokenBytes = Base64.getDecoder().decode(logoutDto.getToken());
		String decodedToken = new String(decodedTokenBytes);
		String email = decodedToken.split("_#_")[0];
		Optional<User> u = userRepository.findByEmail(email);
		if (!u.isPresent())
			throw new CustomEntityNotFoundException(
					"The user with email [" + email + "] does not exists in the database.");
		if (u.get().getToken()==null || !u.get().getToken().equals(logoutDto.getToken())) {
			throw new WrongDataException("The token does not match with the one saved on the database!");
		}
		u.get().setToken(null);
		userRepository.save(u.get());
	}

}

