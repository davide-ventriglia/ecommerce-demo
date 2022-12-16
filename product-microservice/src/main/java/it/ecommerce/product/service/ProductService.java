package it.ecommerce.product.service;

import java.util.List;

import javax.management.InstanceAlreadyExistsException;

import it.ecommerce.common.exception.CustomEntityNotFoundException;
import it.ecommerce.product.model.ProductDTO;

public interface ProductService {
	
	List<ProductDTO> getCatalog();
	
	ProductDTO getProductByTitle(String title) throws CustomEntityNotFoundException;
	
	ProductDTO addToCatalog(ProductDTO p) throws InstanceAlreadyExistsException;
	
	void removeFromCatalog(String title) throws CustomEntityNotFoundException;
	
}
