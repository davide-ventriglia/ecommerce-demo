package it.ecommerce.product.controller;

import static org.hamcrest.CoreMatchers.is;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doNothing;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.HashMap;
import java.util.List;

import org.hamcrest.Matchers;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import it.ecommerce.product.model.ProductDTO;
import it.ecommerce.product.service.impl.ProductServiceImpl;

@WebMvcTest(ProductController.class)
class ProductControllerTest {

	@Autowired
	MockMvc mockMvc;
	
	@MockBean
	ProductServiceImpl productService;
	
	@Test
	void testGetCatalog() throws Exception {
		ProductDTO p1 = new ProductDTO("first", 25.99f, null);
		ProductDTO p2 = new ProductDTO("second", 50.99f, null);
		List<ProductDTO> products = List.of(p1, p2);
		
		Mockito.when(productService.getCatalog()).thenReturn(products);

		mockMvc.perform(get("/product"))
			.andExpect(status().isOk())
			.andExpect(jsonPath("$", Matchers.hasSize(2)))
			.andExpect(jsonPath("$[0].title", Matchers.is("first")))
			.andExpect(jsonPath("$[1].title", Matchers.is("second")));
	}

	@Test
	void testGetProductByTitle() throws Exception {
		HashMap<String, Object> details = new HashMap<>();
		details.put("prop1", "value1");
		details.put("prop2", "value2");
		ProductDTO p1 = new ProductDTO("first", 25.99f, null);

		Mockito.when(productService.getProductByTitle("first")).thenReturn(p1);
		
		mockMvc.perform(get("/product/search/first"))
		.andExpect(status().isOk())
		.andExpect(jsonPath("title", is("first")))
		.andExpect(jsonPath("details.prop1", is("value1")))
		.andExpect(jsonPath("details.prop2", is("value2")));

	}

	@Test
	void testAddProduct() throws Exception{
		HashMap<String, Object> details = new HashMap<>();
		details.put("prop1", "value1");
		details.put("prop2", "value2");
		ProductDTO p1 = new ProductDTO("first", 25.99f, null);
		
		Mockito.when(productService.addToCatalog(any(ProductDTO.class))).thenReturn(p1);

		mockMvc.perform(post("/product/add")
					.contentType(MediaType.APPLICATION_JSON)
					.content("{\"test\":\"test\"}"))
		.andExpect(status().isOk())
		.andExpect(jsonPath("title", is("first")))
		.andExpect(jsonPath("details.prop1", is("value1")))
		.andExpect(jsonPath("details.prop2", is("value2")));

	}

	@Test
	void testRemoveProduct() throws Exception{
		doNothing().when(productService).removeFromCatalog("title");

		mockMvc.perform(delete("/product/remove/title"))
			.andExpect(status().isOk());
	}

}
