package it.ecommerce.product;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import it.ecommerce.product.controller.ProductController;

@SpringBootTest
class EcommerceProductMicroserviceApplicationTests {

	@Autowired
	ProductController productController;

	@Test
	void contextLoads() throws Exception {
		assertThat(productController).isNotNull();
	}
}
