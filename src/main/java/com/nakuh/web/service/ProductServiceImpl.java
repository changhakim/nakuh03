package com.nakuh.web.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nakuh.web.domain.Product;
import com.nakuh.web.mapper.ProductMapper;

@Service
public class ProductServiceImpl implements ProductService{

	@Autowired ProductMapper proMap;
	@Override
	public void createProduct(Product param) {
		proMap.insertProduct(param);
	}

	@Override
	public List<Product> findAllProduct() {
		return proMap.selectAllProduct();
	}

	@Override
	public List<Product> findSomeProducts(Product param) {
		System.out.println("서비스들어옴");
		List<Product> ls = new ArrayList<Product>();
		ls = proMap.selectSomeProducts(param);
		for(int i = 0;i<ls.size();i++) {
			System.out.println(ls.get(i));
		}
		return ls;
	}

	@Override
	public Product findProduct(Product param) {
		Product product = proMap.selectProduct(param);
		return proMap.selectProduct(param);
	}

	@Override
	public int countProduct() {
		return proMap.countProduct();
	}

	@Override
	public void modifyProduct(Product param) {
		proMap.updateProduct(param);
	}

	@Override
	public void removeProduct(Product param) {
		proMap.deleteProduct(param);
	}

}
