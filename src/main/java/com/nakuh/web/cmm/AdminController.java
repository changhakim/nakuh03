package com.nakuh.web.cmm;

import java.util.List;
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
	@Autowired List<Visitor> ls;
	
	@GetMapping("/admin/visitor")
	public Map<?, ?> visitor(){
	    map.clear();
		map.put("total", String.valueOf(memberService.countMembers()));
		map.put("today", String.valueOf(vservice.todayVisitor()));
		map.put("yesterday", String.valueOf(vservice.yesterdayVisitor()));
		ls = vservice.tenVisitor();
		map.put("term", ls);
		map.put("agegroup", vservice.ageCount());
		return map;
	} 
}