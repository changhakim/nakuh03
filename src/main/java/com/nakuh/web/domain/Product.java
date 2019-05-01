package com.nakuh.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data@Component
public class Product {
	private String pronum,proname,price,company,address,category,proimg,regidate;
}
