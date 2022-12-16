package it.ecommerce.common.exception;

public class CustomEntityAlreadyExistsException extends RuntimeException {

	private static final long serialVersionUID = 5559166756252725021L;

	public CustomEntityAlreadyExistsException(String message) {
		super(message);
	}

}
