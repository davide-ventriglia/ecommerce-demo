package it.ecommerce.order.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import it.ecommerce.order.entity.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {

	Optional<Order> findByOrderCode(String orderCode);

}
