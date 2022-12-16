package it.ecommerce.user.exception;

import java.time.LocalDateTime;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import it.ecommerce.common.exception.CustomEntityAlreadyExistsException;
import it.ecommerce.common.exception.CustomEntityNotFoundException;
import it.ecommerce.common.exception.ExceptionResponse;
import it.ecommerce.common.exception.WrongDataException;

@ControllerAdvice
public class CustomExceptionHandler extends ResponseEntityExceptionHandler {

	@ResponseStatus(HttpStatus.NOT_FOUND)
	@ExceptionHandler(CustomEntityNotFoundException.class)
	public @ResponseBody ExceptionResponse handleNotFound(CustomEntityNotFoundException ex,
			HttpServletRequest request) {

		ExceptionResponse exception = new ExceptionResponse(LocalDateTime.now(), ex.getMessage(),
				request.getRequestURI());
		return exception;
	}

	@ResponseStatus(HttpStatus.CONFLICT)
	@ExceptionHandler(CustomEntityAlreadyExistsException.class)
	public @ResponseBody ExceptionResponse handleAlreadyExists(CustomEntityAlreadyExistsException ex,
			HttpServletRequest request) {

		ExceptionResponse exception = new ExceptionResponse(LocalDateTime.now(), ex.getMessage(),
				request.getRequestURI());
		return exception;
	}

	@ResponseStatus(HttpStatus.UNAUTHORIZED)
	@ExceptionHandler(WrongDataException.class)
	public @ResponseBody ExceptionResponse handleAlreadyExists(WrongDataException ex, HttpServletRequest request) {

		ExceptionResponse exception = new ExceptionResponse(LocalDateTime.now(), ex.getMessage(),
				request.getRequestURI());
		return exception;
	}

	@ExceptionHandler(Exception.class)
	@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
	public @ResponseBody ExceptionResponse handleIllegalState(Exception ex, HttpServletRequest request) {

		ExceptionResponse exception = new ExceptionResponse(LocalDateTime.now(), ex.getMessage(),
				request.getRequestURI());
		return exception;
	}
}
