package it.ecommerce.common.exception;

public class CustomEntityNotFoundException extends RuntimeException {
	
	private static final long serialVersionUID = 4599098012437298582L;

	public CustomEntityNotFoundException(String message) {
		super(message);
	}
}
