package it.ecommerce.order.service.impl;

import java.util.Date;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.RandomStringUtils;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import it.ecommerce.order.entity.Order;
import it.ecommerce.order.model.Cart;
import it.ecommerce.order.model.OrderDTO;
import it.ecommerce.order.repository.OrderRepository;
import it.ecommerce.order.service.CartService;
import it.ecommerce.order.service.OrderService;

@Service
public class OrderServiceImpl implements OrderService {

	private OrderRepository orderRepository;

	private CartService cartService;
	
	private ModelMapper modelMapper = new ModelMapper();

	public OrderServiceImpl(OrderRepository orderRepository, CartService cartService) {
		this.orderRepository = orderRepository;
		this.cartService = cartService;
	}

	@Override
	public OrderDTO getOrder(String orderCode) throws EntityNotFoundException {
		Optional<Order> o = orderRepository.findByOrderCode(orderCode);
		if (!o.isPresent())
			throw new EntityNotFoundException(
					"The order with number " + orderCode + " is not present in the database.");
		OrderDTO order = modelMapper.map(o.get(), OrderDTO.class);
		return order;
	}

	@Override
	public OrderDTO placeOrder(HttpServletRequest request, OrderDTO orderDto) {
		Cart cart = cartService.getCart(request);
		if (cart.getItems().isEmpty())
			throw new IllegalStateException("The cart is empty. No order can be placed.");
		orderDto.setAmount(cart.getCartTotal());
		orderDto.setOrderDate(new Date());
		orderDto.setOrderCode(RandomStringUtils.randomAlphanumeric(10));
		Order order = modelMapper.map(orderDto, Order.class);
		orderRepository.save(order);
		cartService.releaseCart(request);
		return orderDto;
	}

}
