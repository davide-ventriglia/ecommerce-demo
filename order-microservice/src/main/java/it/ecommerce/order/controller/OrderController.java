package it.ecommerce.order.controller;

import javax.persistence.EntityNotFoundException;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import it.ecommerce.order.model.OrderDTO;
import it.ecommerce.order.service.OrderService;

@RestController
@RequestMapping("/order")
public class OrderController {

	@Autowired
	OrderService orderService;
	
	@GetMapping("/{orderCode}")
	public OrderDTO getOrder(HttpServletRequest request, @PathVariable String orderCode) throws EntityNotFoundException {
		return orderService.getOrder(orderCode);
	}
	
	@PostMapping
	public OrderDTO placeOrder(HttpServletRequest request, @RequestBody OrderDTO order) {
		return orderService.placeOrder(request, order);
	}
	
}
