package it.ecommerce.product.entity;

import java.io.Serializable;
import java.util.HashMap;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document("drafts")
public class Draft implements Serializable {

	private static final long serialVersionUID = -74303446414897483L;

	@Id
	private String id;

	private String title;

	private float price;

	private HashMap<String, Object> details;

}
