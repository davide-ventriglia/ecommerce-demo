package it.ecommerce.order.service.impl;

import javax.persistence.EntityNotFoundException;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Service;

import it.ecommerce.order.model.Cart;
import it.ecommerce.order.model.CartItem;
import it.ecommerce.order.service.CartService;

@Service
public class CartServiceImpl implements CartService {

	@Override
	public Cart getCart(HttpServletRequest request) {
		Cart cart = (Cart) request.getSession().getAttribute("cart");
		if (cart == null) {
			cart = new Cart();
			request.getSession().setAttribute("cart", cart);
		}
		return cart;
	}

	@Override
	public Cart addProductToCart(HttpServletRequest request, CartItem item) throws EntityNotFoundException {
		// possibility to add check on product microservice if product exists
		Cart cart = getCart(request);
		for (CartItem i : cart.getItems()) {
			if(i.getProduct().getTitle().equals(item.getProduct().getTitle())) {
				i.setQuantity(item.getQuantity());
				return cart;
			}
		}
		cart.addToCart(item);
		return cart;
	}

	@Override
	public Cart removeProductFromCart(HttpServletRequest request, CartItem item) throws EntityNotFoundException {
		// possibility to add check on product microservice if product exists
		Cart cart = getCart(request);
		for (CartItem i : cart.getItems()) {
			if(i.getProduct().getTitle().equals(item.getProduct().getTitle())) {
				i.unsetQuantity(item.getQuantity());
				if(i.getQuantity()<=0) {
					cart.removeFromCart(i);
				}
				return cart;
			}
		}
		throw new EntityNotFoundException("No product with title " + item.getProduct().getTitle() + " is present in the cart.");
	}

	@Override
	public void releaseCart(HttpServletRequest request) {
		request.getSession().removeAttribute("cart");
	}

}
