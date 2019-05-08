package com.nakuh.web.cmm;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.nakuh.web.service.ReservationService;
import com.nakuh.web.service.ReservationServiceImpl;
import com.nakuh.web.service.TxService;

@RestController
public class AdminController {
	@Autowired Map<String, Object> map;
	@Autowired TxService tx;
	@Autowired ReservationServiceImpl resservice;
	@Autowired Proxy pxy;
	
	@GetMapping("/admin/visitor")
	public Map<?, ?> visitor(){
	    map.clear();
	    map = tx.membertx();
		return map;
	}
	@GetMapping("/admin/reserv/{page}")
	public Map<?, ?> reservation(
					@PathVariable String page){
		map.clear();
		map.put("page_num", page);
		map.put("page_size", "10");
		map.put("blocksize", "5");
		map.put("totalCount", (int)resservice.countReservation());
		pxy.carryOut(map);
		map.clear();
		map = tx.reservation(pxy);
		System.out.println("다끝남");
		
		
		return map;
	}	
}