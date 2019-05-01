package com.nakuh.web.service;

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
		List<Product> list = proMap.selectAllProduct();
		System.out.println("컴파니 조회결과" +list );
		for(int i=0;i<list.size();i++) {
		System.out.println("전체조회결과" + list.get(i).toString());	
		}
		
		return proMap.selectAllProduct();
	}

	@Override
	public List<Product> findSomeProducts(HashMap<String, String> paramMap) {
		return proMap.selectSomeProducts(paramMap);
	}

	@Override
	public Product findProduct(Product param) {
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
