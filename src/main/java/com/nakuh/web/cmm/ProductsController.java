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

	@Autowired
	Product product;
	@Autowired
	ProductServiceImpl productService;
	@Autowired
	HashMap<String, Object> map;
	@Autowired
	List<Product> list;

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
		System.out.println(param.getAreatitle()+"===="+param.getPricetitle());
		product.setAreatitle(param.getAreatitle());
		product.setPricetitle(param.getPricetitle());
		product.setCategory(cate);
		product.setPageSize(param.getPageSize());
		product.setStartRow(param.getStartRow());
		list = productService.findCateProducts(product);
		System.out.println(list.toString());
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
	public Map<?, ?> proinfo(
			@PathVariable String proid) {
		logger.info("=======  ProductController proinfo:상품상세조회  진입 ======");
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 19a0bb56eb027bafc4f1e37dfe6f949d28f7cc9f
=======
		
>>>>>>> 3087dcfe3cffaa4d2bc465ff845da52000a598b5
>>>>>>> 68fc04fd18d5c66f956df3893ddf7ec2d7f20b13
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
=======
		Calendar cal = Calendar.getInstance();
		int today = cal.get(Calendar.DATE);
		cal.set(Calendar.DATE, 1);
		int sDayNum = cal.get(Calendar.DAY_OF_WEEK);// 1일의 요일 얻어오기, SUNDAY (1) .MONDAY(2) , TUESDAY
		int endDate = cal.getActualMaximum(Calendar.DATE); // 달의 마지막일 얻기
		int nowYear = cal.get(Calendar.YEAR);// 현재년
		int nowMonth = cal.get(Calendar.MONTH)+1;// 현재월
		int sDay = sDayNum;
		List<String> callist = new ArrayList<>();
		List<String> calday = new ArrayList<>();
		// 1일이 시작되는 이전의 요일 공백으로 채우기
		for (int i = 1; i < sDayNum; i++) {
			callist.add("★");
		}
		for (int i = 1; i <= endDate; i++) {
			callist.add(String.valueOf(i));
			if (i < 10) {
				calday.add(nowYear + "-" + "0" + nowMonth + "-" + "0" + i);
			} else {
				calday.add(nowYear + "-" + "0" + nowMonth + "-" + i);
			}

		}
		String realtoday = nowYear + "-" + "0" + nowMonth + "-" +today;
		String calheader = nowYear+"년"+nowMonth+"월";

		/*
		 * 예약상세용 : 캘린더 화면
		 * 
		 * 기준 : 오늘의 날짜 구하기 int year = 0, month = 0, day = 0, lastday = 0; String today =
		 * ""; Calendar cal = Calendar.getInstance(); year = cal.get(Calendar.YEAR);
		 * month = cal.get(Calendar.MONTH) + 1; day = cal.get(Calendar.DATE); today =
		 * year + "-" + month + "-" + day;
		 * 
		 * 윤년에 따른 월의 마지막날짜 계산 if(year % 4 ==0 && year% 100 != 0 || year % 400 ==0) {
		 * lastday = LEAP_MAX_DAYS[month]; }else { lastday = MAX_DAYS[month]; }
<<<<<<< HEAD
		 */

		product.setRegidate("2019-05-13");
>>>>>>> 1f92479c9c43b29a5834d0b38fa7f08757cc2e62
=======
		 */	
>>>>>>> 7bc97e96347da1e97fdf263110a573f89aac47d1
		product.setPronum(proid);
		product = productService.findProduct(product);
		map.clear();
		map.put("calheader", calheader);
		map.put("callist", callist);
		map.put("calday", calday);
		map.put("product", product);
		map.put("today", today);
		map.put("realtoday",  realtoday);
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