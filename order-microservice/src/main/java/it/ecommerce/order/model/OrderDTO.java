package it.ecommerce.order.model;

import java.io.Serializable;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderDTO implements Serializable{

	private static final long serialVersionUID = 4083250412800277805L;

	@JsonProperty(value = "order_date")
	private Date orderDate;

	@JsonProperty(value = "order_code")
	private String orderCode;

	@JsonProperty(value = "amount")
	private double amount;

	@JsonProperty(value = "customer_name")
	private String customerName;

	@JsonProperty(value = "customer_address")
	private String customerAddress;

	@JsonProperty(value = "customer_email")
	private String customerEmail;

	@JsonProperty(value = "customer_phone")
	private String customerPhone;

}
