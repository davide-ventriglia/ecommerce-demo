package it.ecommerce.product.service.impl;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doAnswer;
import static org.mockito.Mockito.when;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import javax.management.InstanceAlreadyExistsException;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.modelmapper.ModelMapper;

import it.ecommerce.product.entity.Product;
import it.ecommerce.product.model.ProductDTO;
import it.ecommerce.product.repository.ProductRepository;
import it.ecommerce.product.service.ProductService;

class ProductServiceImplTest {

	ProductService productService;

	@Mock
	private ProductRepository productRepository;

	@BeforeEach
	void init() {
		productRepository = Mockito.mock(ProductRepository.class);
		productService = new ProductServiceImpl(productRepository);
	}

	private ModelMapper modelMapper = new ModelMapper();

	@Test
	void testGetCatalog() {
		Product p1 = new Product("id1","first", 25.99f, null);
		Product p2 = new Product("id2","second", 50.99f, null);
		List<Product> products = List.of(p1, p2);

		when(productRepository.findAll()).thenReturn(products);
		List<ProductDTO> result = productService.getCatalog();

		assertThat(result.size()).isEqualTo(2);
	}

	@Test
	void testGetProductByTitle() {
		Product p1 = new Product("id1","first", 25.99f, null);

		when(productRepository.findByTitle("first")).thenReturn(Optional.of(p1));
		ProductDTO result = productService.getProductByTitle("first");

		assertThat(result.getTitle()).isEqualTo("first");
	}

	@Test
	void testAddToCatalog() throws InstanceAlreadyExistsException {
		Product p1 = new Product("id1","first", 25.99f, null);
		ProductDTO pdto = modelMapper.map(p1, ProductDTO.class);

		when(productRepository.save(p1)).thenReturn(p1);
		ProductDTO result = productService.addToCatalog(pdto);

		assertThat(result.getTitle()).isEqualTo("first");
	}

	@Test
	void testRemoveFromCatalog() {
		Product p1 = new Product("id1","first", 25.99f, null);
		Product p2 = new Product("id2","second", 50.99f, null);
		List<Product> products = Stream.of(p1,p2).collect(Collectors.toList());

		assertThat(products.size()).isEqualTo(2);

		when(productRepository.findByTitle("first")).thenReturn(Optional.of(p1));
		doAnswer(invocation -> {
			products.remove(p1);
			return null;
		}).when(productRepository).delete(any(Product.class));

		productService.removeFromCatalog("first");

		assertThat(products.size()).isEqualTo(1);
	}

}
