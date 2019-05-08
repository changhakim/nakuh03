package com.nakuh.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data@Component
public class Product {
	private String rownum, pronum,proname, price, company, address, category, proimg, regidate, fishname, phone; 
	private double lat, lng;
	private int startRow, pageSize;
}
