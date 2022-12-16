package it.ecommerce.order.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
public class Cart implements Serializable {

	private static final long serialVersionUID = 7693204031189041874L;

	@JsonProperty(value = "items")
	List<CartItem> items = new ArrayList<>();

	@JsonProperty
	private double cartTotal = 0;

	public List<CartItem> getItems() {
		return items;
	}

	public void addToCart(CartItem item) {
		this.items.add(item);
	}

	public void removeFromCart(CartItem item) {
		this.items.remove(item);
	}

	public double getCartTotal() {
		this.cartTotal = 0;
		for (CartItem i : this.items) {
			this.cartTotal += i.getCartItemSubtotal();
		}
		return this.cartTotal;
	}

}
