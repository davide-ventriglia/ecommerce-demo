package it.ecommerce.product.service.impl;

import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import it.ecommerce.product.entity.Draft;
import it.ecommerce.product.entity.Product;
import it.ecommerce.product.model.DraftDTO;
import it.ecommerce.product.model.ProductDTO;
import it.ecommerce.product.repository.DraftProductRepository;
import it.ecommerce.product.repository.ProductRepository;
import it.ecommerce.product.service.DraftProductService;
import it.ecommerce.common.exception.CustomEntityNotFoundException;

@Service
public class DraftProductServiceImpl implements DraftProductService {

	private ProductRepository productRepository;

	private DraftProductRepository draftProductRepository;

	private ModelMapper modelMapper = new ModelMapper();

	public DraftProductServiceImpl(ProductRepository productRepository, DraftProductRepository draftProductRepository) {
		this.productRepository = productRepository;
		this.draftProductRepository = draftProductRepository;
	}

	@Override
	public DraftDTO getProductDraft(String title) throws CustomEntityNotFoundException {
		Optional<Draft> d = draftProductRepository.findByTitle(title);
		if (!d.isPresent())
			throw new CustomEntityNotFoundException("No draft for product with title [" + title + "] found in the database.");
		DraftDTO draftDto = modelMapper.map(d.get(), DraftDTO.class);
		return draftDto;
	}

	@Override
	public DraftDTO createOrUpdateDraft(String title, DraftDTO updatedDraftDto) throws CustomEntityNotFoundException {
		Optional<Product> p = productRepository.findByTitle(title);
		if (!p.isPresent())
			throw new CustomEntityNotFoundException("No product with title [" + title
					+ "] is present in the catalog. Cannot create or update draft for this product.");

		Optional<Draft> d = draftProductRepository.findByTitle(title);
		Draft draft = new Draft();

		if(!d.isPresent()) {
			draft.setId(p.get().getId());
			draft.setTitle(p.get().getTitle());
			draft.setDetails(updatedDraftDto.getDetails());
		} else {
			d.get().setTitle(p.get().getTitle());
			d.get().setDetails(updatedDraftDto.getDetails());
			draft = d.get();
		}

		return modelMapper.map(draftProductRepository.save(draft), DraftDTO.class);
	}

	@Override
	public ProductDTO publishDraft(String title) throws CustomEntityNotFoundException {
		Optional<Draft> d = draftProductRepository.findByTitle(title);
		if (!d.isPresent())
			throw new CustomEntityNotFoundException("No draft for product with title [" + title + "] found in the database.");
		Optional<Product> p = productRepository.findByTitle(title);
		if (!p.isPresent())
			throw new CustomEntityNotFoundException("No product with title [" + title
					+ "] is present in the catalog. Cannot publish draft for this product.");

		Product product = modelMapper.map(d.get(), Product.class);
		productRepository.save(product);
		draftProductRepository.delete(d.get());
		ProductDTO productDto = modelMapper.map(product, ProductDTO.class);
		return productDto;
	}

}
