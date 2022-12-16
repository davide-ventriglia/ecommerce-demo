package it.ecommerce.user.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users", uniqueConstraints = { @UniqueConstraint(columnNames = { "email" })})
public class User {
	
	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "firstName", nullable = false)
	private String firstName;
	
	@Column(name = "lastName", nullable = false)
	private String lastName;
	
	@Column(name = "email", nullable = false, unique = true)
	private String email;
	
	@Column(name = "password", nullable = false)
	private String password;

	@Column(name = "address", nullable = true)
	private String address;

	@Column(name = "phone", nullable = false)
	private String phone;
	
	@Column(name = "role", nullable = true)
	private String role = "CUSTOMER";
	
	@Column(name = "token", nullable = true)
	private String token;

	@Column(name = "insert_date", nullable = false)
	private LocalDateTime insertDate = LocalDateTime.now();

	@Column(name = "update_date", nullable = false)
	private LocalDateTime updateDate = LocalDateTime.now();

}
