package it.ecommerce.product.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import it.ecommerce.product.entity.Product;

public interface ProductRepository extends MongoRepository<Product, String>{

	public Optional<Product> findByTitle(String title);

}
