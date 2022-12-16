package it.ecommerce.order.service;

import javax.persistence.EntityNotFoundException;
import javax.servlet.http.HttpServletRequest;

import it.ecommerce.order.model.OrderDTO;

public interface OrderService {

	OrderDTO getOrder(String orderCode) throws EntityNotFoundException;
	
	OrderDTO placeOrder(HttpServletRequest request, OrderDTO orderDto);
}
