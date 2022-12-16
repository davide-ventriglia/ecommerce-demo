package it.ecommerce.product.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import it.ecommerce.common.exception.CustomEntityNotFoundException;
import it.ecommerce.product.model.DraftDTO;
import it.ecommerce.product.model.ProductDTO;
import it.ecommerce.product.service.DraftProductService;

@RestController
@RequestMapping("/draft")
public class DraftController {

	@Autowired
	DraftProductService draftProductService;

	@GetMapping("/search/{title}")
	public DraftDTO getDraft(HttpServletRequest request, @PathVariable String title) throws CustomEntityNotFoundException {
		return draftProductService.getProductDraft(title);
	}

	@PostMapping("/edit/{title}")
	public DraftDTO createOrUpdatedraft(HttpServletRequest request, @PathVariable String title, @RequestBody DraftDTO p)
			throws CustomEntityNotFoundException {
		return draftProductService.createOrUpdateDraft(title, p);
	}
	
	@PostMapping("/publish/{title}")
	public ProductDTO publishDraft(HttpServletRequest request, @PathVariable String title)
			throws CustomEntityNotFoundException {
		return draftProductService.publishDraft(title);
	}
	
}
