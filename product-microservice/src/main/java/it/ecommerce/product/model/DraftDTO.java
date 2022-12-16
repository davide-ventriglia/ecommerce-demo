package it.ecommerce.product.model;

import java.util.HashMap;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DraftDTO {

	@JsonProperty(value = "title")
	private String title;

	@JsonProperty(value = "price")
	private float price;

	@JsonIgnoreProperties(value = { "updateDate", "insertDate" })
	private HashMap<String, Object> details;


}
