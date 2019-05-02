package com.nakuh.web.cmm;


import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.nakuh.web.domain.Member;
import com.nakuh.web.service.MemberServiceImpl;

@RestController
public class MemberController {
	private static final Logger logger = LoggerFactory.getLogger(MemberController.class);
	@Autowired Map<String,Object> map;
	@Autowired Member member;
	@Autowired MemberServiceImpl memberservice; 
	
	@PostMapping("/login/kakao/{kaid}")
	public String login(@RequestBody Map<?,?> res) {
		logger.info("=========login 진입======");
		System.out.println("res??"+res);

		System.out.println(res.get("id").toString());
		System.out.println(res.get("email").toString());
		System.out.println(res.get("profileimg").toString());
		System.out.println(res.get("name").toString());		
		
		member.setMid(res.get("id").toString());
		member.setMail(res.get("email").toString());
		member.setProfilephoto(res.get("profileimg").toString());
		member.setName(res.get("name").toString());
		System.out.println("Member::"+member);
		/*
		 * map.clear(); map.put("member", member);
		 * System.out.println(map.get("member").toString());
		 */
	

		 
		
		
		return null;
	}
	
}
