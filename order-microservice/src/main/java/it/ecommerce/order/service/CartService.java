package it.ecommerce.order.service;

import javax.persistence.EntityNotFoundException;
import javax.servlet.http.HttpServletRequest;

import it.ecommerce.order.model.Cart;
import it.ecommerce.order.model.CartItem;

public interface CartService {
	
	Cart getCart(HttpServletRequest request);
	
	Cart addProductToCart(HttpServletRequest request, CartItem item) throws EntityNotFoundException;
	
	Cart removeProductFromCart(HttpServletRequest request, CartItem item) throws EntityNotFoundException;
	
	void releaseCart(HttpServletRequest request);
}
