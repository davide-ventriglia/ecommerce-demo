package it.ecommerce.common.proxy;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import it.ecommerce.common.bean.ProductDTO;

@FeignClient(name = "ecommerce-product"/*, url = "localhost:8000"*/)
public interface ProductMicroserviceProxy {
	
	@GetMapping("/product/search/{title}")
	public ProductDTO retrieveExchangeValue(
			@PathVariable String title);

}
