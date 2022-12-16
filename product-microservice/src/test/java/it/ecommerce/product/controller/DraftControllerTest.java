package it.ecommerce.product.controller;

import static org.hamcrest.CoreMatchers.is;
import static org.mockito.ArgumentMatchers.any;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.HashMap;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import it.ecommerce.product.model.DraftDTO;
import it.ecommerce.product.model.ProductDTO;
import it.ecommerce.product.service.impl.DraftProductServiceImpl;

@WebMvcTest(DraftController.class)
class DraftControllerTest {
	
	@Autowired
	MockMvc mockMvc;
	
	@MockBean
	DraftProductServiceImpl draftProductService;
	
	private ModelMapper modelMapper;
	
	@Test
	void testGetDraft() throws Exception {
		HashMap<String, Object> details = new HashMap<>();
		details.put("prop1", "value1");
		details.put("prop2", "value2");
		DraftDTO d1 = new DraftDTO("first", 25.99f, details);

		Mockito.when(draftProductService.getProductDraft("first")).thenReturn(d1);
		
		mockMvc.perform(get("/draft/search/first"))
		.andExpect(status().isOk())
		.andExpect(jsonPath("title", is("first")))
		.andExpect(jsonPath("details.prop1", is("value1")))
		.andExpect(jsonPath("details.prop2", is("value2")));
	}

	@Test
	void testCreateOrUpdatedraft() throws Exception {
		HashMap<String, Object> details = new HashMap<>();
		details.put("prop1", "value1");
		details.put("prop2", "value2");
		DraftDTO d1 = new DraftDTO("first", 25.99f, details);

		Mockito.when(draftProductService.createOrUpdateDraft(any(String.class),any(DraftDTO.class))).thenReturn(d1);
		
		mockMvc.perform(post("/draft/edit/first")
				.contentType(MediaType.APPLICATION_JSON)
				.content("{\"test\":\"test\"}"))
		.andExpect(status().isOk())
		.andExpect(jsonPath("title", is("first")))
		.andExpect(jsonPath("details.prop1", is("value1")))
		.andExpect(jsonPath("details.prop2", is("value2")));
	}

	@Test
	void testPublishDraft() throws Exception {
		HashMap<String, Object> details = new HashMap<>();
		details.put("prop1", "value1");
		details.put("prop2", "value2");
		DraftDTO d1 = new DraftDTO("first", 25.99f, details);
		ProductDTO p1Dto = modelMapper.map(d1, ProductDTO.class);

		Mockito.when(draftProductService.publishDraft("first")).thenReturn(p1Dto);
		
		mockMvc.perform(post("/draft/publish/first")
				.contentType(MediaType.APPLICATION_JSON)
				.content("{\"test\":\"test\"}"))		
		.andExpect(status().isOk())
		.andExpect(jsonPath("title", is("first")))
		.andExpect(jsonPath("details.prop1", is("value1")))
		.andExpect(jsonPath("details.prop2", is("value2")));
	}

}
