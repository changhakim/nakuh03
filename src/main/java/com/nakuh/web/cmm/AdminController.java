package com.nakuh.web.cmm;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nakuh.web.service.TxService;

@RestController
public class AdminController {
	@Autowired Map<String, Object> map;
	@Autowired TxService tx;
	
	@GetMapping("/admin/visitor")
	public Map<?, ?> visitor(){
	    map.clear();
	    map = tx.membertx();
		return map;
	}
	@GetMapping("/admin/reservation")
	public Map<?, ?> reservation(){
		
		map.clear();
		return map;
	}
}