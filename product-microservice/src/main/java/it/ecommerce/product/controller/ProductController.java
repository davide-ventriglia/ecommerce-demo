package it.ecommerce.product.controller;

import java.util.List;

import javax.management.InstanceAlreadyExistsException;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import it.ecommerce.common.exception.CustomEntityNotFoundException;
import it.ecommerce.product.model.ProductDTO;
import it.ecommerce.product.service.ProductService;

@RestController
@RequestMapping("/product")
public class ProductController {

	@Autowired
	ProductService productService;

	@GetMapping
	public List<ProductDTO> getCatalog(HttpServletRequest request) {
		return productService.getCatalog();
	}

	@GetMapping("/search/{title}")
	public ProductDTO getProductByTitle(HttpServletRequest request, @PathVariable String title)
			throws CustomEntityNotFoundException {
		return productService.getProductByTitle(title);
	}

	@PostMapping("/add")
	public ProductDTO addProduct(HttpServletRequest request, @RequestBody ProductDTO p)
			throws InstanceAlreadyExistsException {
		return productService.addToCatalog(p);
	}

	@DeleteMapping("/remove/{title}")
	public void removeProduct(HttpServletRequest request, @PathVariable String title) throws CustomEntityNotFoundException {
		productService.removeFromCatalog(title);
	}

}
