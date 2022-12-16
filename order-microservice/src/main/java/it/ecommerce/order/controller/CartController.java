package it.ecommerce.order.controller;

import javax.persistence.EntityNotFoundException;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import it.ecommerce.order.model.Cart;
import it.ecommerce.order.model.CartItem;
import it.ecommerce.order.service.CartService;

@RestController
@RequestMapping("/cart")
public class CartController {

	@Autowired
	CartService cartService;

	@GetMapping
	public Cart getCart(HttpServletRequest request) {
		return cartService.getCart(request);
	}

	@PostMapping("/add")
	public Cart addToCart(HttpServletRequest request, @RequestBody CartItem item) throws EntityNotFoundException {
		return cartService.addProductToCart(request, item);
	}

	@DeleteMapping("/remove")
	public Cart removeFromCart(HttpServletRequest request, @RequestBody CartItem item) throws EntityNotFoundException {
		return cartService.removeProductFromCart(request, item);
	}

}
