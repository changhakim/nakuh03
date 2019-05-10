package com.nakuh.web.cmm;

import java.util.ArrayList;
import java.util.Calendar;
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
	private static final int[] MAX_DAYS = { 0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 };
	private static final int[] LEAP_MAX_DAYS = { 0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 };

	@Autowired	Product product;
	@Autowired	ProductServiceImpl productService;
	@Autowired	HashMap<String, Object> map;
	@Autowired	List<Product> list;

	// 상품 전체목록
	@GetMapping("/products/")
	public Map<?, ?> prolist() {
		logger.info("=======  ProductController prolist:상품 전체목록  진입 ======");
		list = productService.findAllProduct();
		map.clear();
		map.put("list", list);
		return map;
	}

	// 상품 카테고리별 조회
	@PostMapping("/catesearch/{cate}")
	public Map<?, ?> cateAlllist(@PathVariable String cate, @RequestBody Product param) {
		logger.info("=======  ProductController prosomelist:상품카테고리별 전체조회  진입 ======");
		map.clear();
		product.setCategory(cate);
		product.setPageSize(param.getPageSize());
		product.setStartRow(param.getStartRow());
		list = productService.findCateProducts(product);
		map.put("list", list);
		return map;
	}

	// 상품 일부 조회
	@GetMapping("/prosearch/{search}")
	public Map<?, ?> prosomelist(@PathVariable String search) {
		logger.info("=======  ProductController prosomelist:상품일부조회  진입 ======");
		product.setProname(search);
		list = productService.findSomeProducts(product);
		map.clear();
		map.put("list", list);
		return map;
	}

	// 상품 상세 조회
	@PostMapping("/products/{proid}")
	public Map<?, ?> proinfo(@PathVariable String proid) {
		logger.info("=======  ProductController proinfo:상품상세조회  진입 ======");
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 19a0bb56eb027bafc4f1e37dfe6f949d28f7cc9f
=======
		
>>>>>>> 3087dcfe3cffaa4d2bc465ff845da52000a598b5
		/* 예약상세용 : 캘린더 화면 */

		/* 기준 : 오늘의 날짜 구하기 */
		int year = 0, month = 0, day = 0, lastday = 0;
		String today = "";
		Calendar cal = Calendar.getInstance();
		year = cal.get(Calendar.YEAR);
		month = cal.get(Calendar.MONTH) + 1;
		day = cal.get(Calendar.DATE);
		today = year + "-" + month + "-" + day;
		
<<<<<<< HEAD
<<<<<<< HEAD
=======
		 System.out.println("연도 : " + year + " 월 : " + month + " 일 : " + lastday ); 
>>>>>>> bf0a489c393347ca42b20b6af2cb5fc8bf352834
=======
		 /*윤년에 따른 월의 마지막날짜 계산 */
		 if(year % 4 ==0 && year% 100 != 0 || year % 400 ==0) { 
			 lastday = LEAP_MAX_DAYS[month];
		 }else { 
			 lastday = MAX_DAYS[month]; }

>>>>>>> 3087dcfe3cffaa4d2bc465ff845da52000a598b5
		product.setRegidate(today);
		product.setPronum(proid);
		product = productService.findProduct(product);
		map.clear();
		map.put("product", product);
		map.put("today", today);
		map.put("lastday", lastday);
		System.out.println("맵에 담겼는가?? : " + map.get("today"));
		System.out.printf("keySet : %s\n", map.keySet());
		System.out.println("map에 담긴 모든값" + map);
		return map;
	}

	// 예약 메인의 datepicker
	@GetMapping("/load")
	public HashMap<?, ?> load(ModelMap model) {
		logger.info("=======  ProductController 로드  진입 =====");
		HashMap<String, Object> map = new HashMap<>();
		map.put("t",
				"<input type='text' class='form-control border-right hasDatepicker' id='date_search' placeholder='로드 테스트 중 ...'>");
		return map;
	}
}
