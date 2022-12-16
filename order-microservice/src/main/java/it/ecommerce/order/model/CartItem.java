package it.ecommerce.order.model;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CartItem implements Serializable {

	private static final long serialVersionUID = 8786672572777704742L;

	@JsonProperty(value = "product")
	private ProductDTO product;

	@JsonProperty(value = "quantity")
	private int quantity = 0;

	@JsonProperty(value = "cart_item_subtotal")
	private double cartItemSubtotal = 0;

	public CartItem(ProductDTO product, int quantity) {
		this.product = product;
		this.quantity = quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity += quantity;
	}

	public void unsetQuantity(int quantity) {
		this.quantity -= quantity;
	}

	public double getCartItemSubtotal() {
		return this.cartItemSubtotal = this.product.getPrice() * this.quantity;
	}

}
