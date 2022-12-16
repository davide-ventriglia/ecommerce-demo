package it.ecommerce.product.service;

import it.ecommerce.product.model.DraftDTO;
import it.ecommerce.product.model.ProductDTO;
import it.ecommerce.common.exception.CustomEntityNotFoundException;

public interface DraftProductService {

	DraftDTO getProductDraft(String title) throws CustomEntityNotFoundException;

	DraftDTO createOrUpdateDraft(String title, DraftDTO product) throws CustomEntityNotFoundException;

	ProductDTO publishDraft(String title) throws CustomEntityNotFoundException;
}
