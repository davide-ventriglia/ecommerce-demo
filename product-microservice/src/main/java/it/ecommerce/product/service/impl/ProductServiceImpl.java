package it.ecommerce.product.service.impl;

import java.util.List;
import java.util.Optional;

import javax.management.InstanceAlreadyExistsException;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.stereotype.Service;

import it.ecommerce.common.exception.CustomEntityNotFoundException;
import it.ecommerce.product.entity.Product;
import it.ecommerce.product.model.ProductDTO;
import it.ecommerce.product.repository.ProductRepository;
import it.ecommerce.product.service.ProductService;

@Service
public class ProductServiceImpl implements ProductService {

	private ProductRepository productRepository;

	private ModelMapper modelMapper = new ModelMapper();

	public ProductServiceImpl(ProductRepository productRepositorymongo) {
		this.productRepository = productRepositorymongo;
	}

	@Override
	public List<ProductDTO> getCatalog() {
		List<Product> products = productRepository.findAll();
		List<ProductDTO> productsDto = modelMapper.map(products, new TypeToken<List<ProductDTO>>() {
		}.getType());
		return productsDto;
	}

	@Override
	public ProductDTO getProductByTitle(String title) throws CustomEntityNotFoundException {
		Optional<Product> p = productRepository.findByTitle(title);
		if (!p.isPresent())
			throw new CustomEntityNotFoundException("No product with title [" + title + "] is present in the catalog.");
		ProductDTO product = modelMapper.map(p.get(), ProductDTO.class);
		return product;
	}

	@Override
	public ProductDTO addToCatalog(ProductDTO productDto) throws InstanceAlreadyExistsException {
		Optional<Product> p = productRepository.findByTitle(productDto.getTitle());
		if (p.isPresent())
			throw new InstanceAlreadyExistsException(
					"The product with title [" + productDto.getTitle() + "] is already present in the catalog.");
		Product product = modelMapper.map(productDto, Product.class);
		productRepository.insert(product);
		return productDto;
	}

	@Override
	public void removeFromCatalog(String title) throws CustomEntityNotFoundException {
		Optional<Product> p = productRepository.findByTitle(title);
		if (!p.isPresent())
			throw new CustomEntityNotFoundException("No product with title [" + title + "] is present in the catalog.");
		productRepository.delete(p.get());
	}

}
