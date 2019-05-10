package com.nakuh.web.cmm;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.nakuh.web.domain.Reservation;
import com.nakuh.web.service.ReservationServiceImpl;

@RestController
public class ReservationController {
	private static final Logger logger = LoggerFactory.getLogger(ReservationController.class);

	@Autowired
	Reservation reservation;
	@Autowired
	ReservationServiceImpl resService;
	@Autowired
	HashMap<String, Object> map;
	@Autowired
	List<Reservation> list;

	/* 상품 예약하기 */
	@PostMapping("/reservation")
	public HashMap<?, ?> reserve(@RequestBody Reservation param) {
<<<<<<< HEAD
		logger.info("=======  ReservationController reserve:상품예약 진입 ======");
		Date date = new Date(); 
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-mm-dd"); 
		param.setResdate(sdf.format(date));
		System.out.println("예약컨트롤러 날짜가 잘 들어왓는가" + param.getResdate());
		System.out.println("예약컨트롤러에 들어온 출발일자" + param.getStartdate());
		int deposit1 = Integer.parseInt(param.getRescount()) * 50000;
		param.setDeposit(String.valueOf(deposit1));
		System.out.println("예약컨트롤러에 들어온 결제금액" + param.getDeposit());
=======
		logger.info("=======  ReservationController reserve: 상품예약 진입 ======");
>>>>>>> 3087dcfe3cffaa4d2bc465ff845da52000a598b5
		resService.createReservation(param);
		map.clear();
		map.put("msg", "reserve success");
		System.out.println("param에 담긴 값" + param.toString());
		return map;
	}
	
}
