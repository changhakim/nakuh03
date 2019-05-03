package com.nakuh.web.cmm;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.binding.MapperMethod.ParamMap;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.nakuh.web.domain.Product;
import com.nakuh.web.service.ProductServiceImpl;

@RestController
public class ProductsController {
	private static final Logger logger = LoggerFactory.getLogger(ProductsController.class);
	
	@Autowired Product product;
	@Autowired ProductServiceImpl productService;
	@Autowired HashMap<String, Object> map;
	@Autowired List<Product> list;
	
	//상품 전체목록 
	@GetMapping("/products")
	public List<Product> prolist(){
		 logger.info("=======  ProductController prolist:상품전체목록  진입 ======");
		 list = productService.findAllProduct();
		 return list;
	}
	
	//상품 일부 조회
	@GetMapping("/prosearch/{search}")
	public Map<?, ?> prosomelist(@PathVariable String search){
		logger.info("=======  ProductController prosomelist:상품일부조회  진입 ======");
		product.setProname(search);
		list = productService.findSomeProducts(product);
		map.clear();
		map.put("list", list);
		return map;
	} 
	
	//상품 상세 조회
	@PostMapping("/products/{proid}")
	public Map<?, ?> proinfo(@PathVariable String proid) {
		logger.info("=======  ProductController proinfo:상품상세조회  진입 ======");
		
		product.setPronum(proid);
		product = productService.findProduct(product);
		map.clear();
		map.put("product", product);
		return map;
	}
	
	//예약 메인의 datepicker
	@GetMapping("/load")
	public HashMap<?, ?> load(ModelMap model){
		 logger.info("=======  ProductController 로드  진입 =====");
		HashMap<String,Object> map = new HashMap<>();
		map.put("t", "<input type='text' class='form-control border-right hasDatepicker' id='date_search' placeholder='로드 테스트 중 ...'>");
		 return map;
	}
}

