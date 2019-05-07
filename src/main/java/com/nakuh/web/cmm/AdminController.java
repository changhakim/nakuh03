package com.nakuh.web.cmm;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nakuh.web.domain.Visitor;
import com.nakuh.web.service.MemberServiceImpl;
import com.nakuh.web.service.VisitorServiceImpl;

@RestController
public class AdminController {
	@Autowired MemberServiceImpl memberService;
	@Autowired VisitorServiceImpl vservice;
	@Autowired Visitor v;
	@Autowired Map<String, Object> map;
	
	@GetMapping("/admin/visitor")
	public Map<?, ?> visitor(){
		String total = String.valueOf(memberService.countMembers());
		String today = String.valueOf(vservice.todayVisitor());
		 map.clear();
		map.put("total", total);
		map.put("today", today);
		return map;
	} 
}