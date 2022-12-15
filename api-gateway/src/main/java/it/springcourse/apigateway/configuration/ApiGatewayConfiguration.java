package it.springcourse.apigateway.configuration;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ApiGatewayConfiguration {

	@Bean
	public RouteLocator gatewayRouter(RouteLocatorBuilder builder) {
		return builder.routes()
				.route(p -> p.path("/product/**")
						.uri("lb://ecommerce-product"))
				.route(p -> p.path("/draft/**")
						.uri("lb://ecommerce-product"))
				.route(p -> p.path("/order/**")
						.uri("lb://ecommerce-order"))
				.route(p -> p.path("/cart/**")
						.uri("lb://ecommerce-order"))
				.route(p -> p.path("/user/**")
						.uri("lb://ecommerce-user"))
				.build();
	}
}
