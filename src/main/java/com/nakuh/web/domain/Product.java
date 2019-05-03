package com.nakuh.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data@Component
public class Product {
	private String pronum,proimg,proname,price,company,address,category,regidate, fishname, phone; 
	private double lat, lng;
}
