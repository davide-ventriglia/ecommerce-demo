package it.ecommerce.order.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "orders")
public class Order implements Serializable {

	private static final long serialVersionUID = -3368334055520178994L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "order_date", nullable = false)
	private Date orderDate;

	@Column(name = "order_code", nullable = false, unique = true)
	private String orderCode;

	@Column(name = "amount", nullable = false)
	private double amount;

	@Column(name = "customer_name", nullable = false)
	private String customerName;

	@Column(name = "customer_address", nullable = false)
	private String customerAddress;

	@Column(name = "customer_email", nullable = false)
	private String customerEmail;

	@Column(name = "customer_phone", nullable = false)
	private String customerPhone;

}
