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
	public List<Product> findCateProducts(Product param){
		List<Product> list = proMap.selectCateProducts(param);
		System.out.println("proreimple" + list.toString());
		return list;
	}
	
	@Override
	public List<Product> findSomeProducts(Product param) {
		return proMap.selectSomeProducts(param);
	}

	@Override
	public Product findProduct(Product param) {
		Product product = proMap.selectProduct(param);
		System.out.println("이번에는 findOneProduct" + param.getPhone());
		System.out.println("skdhk " + param.toString());
		System.out.println("product에는??" + product.getPhone());
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
