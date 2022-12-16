package it.ecommerce.user.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserRegistrationDTO {

	@JsonProperty(value = "firstName")
	private String firstName;
	
	@JsonProperty(value = "lastName")
	private String lastName;
	
	@JsonProperty(value = "email")
	private String email;
	
	@JsonProperty(value = "password")
	private String password;

	@JsonProperty(value = "address")
	private String address;

	@JsonProperty(value = "phone")
	private String phone;
}
