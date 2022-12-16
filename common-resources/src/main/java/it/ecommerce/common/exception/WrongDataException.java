package it.ecommerce.common.exception;

public class WrongDataException extends RuntimeException {

	private static final long serialVersionUID = 5559166756252725021L;

	public WrongDataException(String message) {
		super(message);
	}

}
