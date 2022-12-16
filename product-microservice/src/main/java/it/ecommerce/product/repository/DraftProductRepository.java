package it.ecommerce.product.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import it.ecommerce.product.entity.Draft;

@Repository
public interface DraftProductRepository extends MongoRepository<Draft, String> {

	Optional<Draft> findByTitle(String title);

}
