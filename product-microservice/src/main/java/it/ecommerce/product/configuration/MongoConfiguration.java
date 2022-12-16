package it.ecommerce.product.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@Configuration
@EnableMongoRepositories(basePackages = "it.ecommerce.product.repository")
public class MongoConfiguration {}
