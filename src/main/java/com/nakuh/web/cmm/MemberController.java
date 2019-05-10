package com.nakuh.web.cmm;


import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.nakuh.web.domain.Member;
import com.nakuh.web.domain.Visitor;
import com.nakuh.web.mapper.MemberMapper;
import com.nakuh.web.service.MemberServiceImpl;
import com.nakuh.web.service.VisitorServiceImpl;

@RestController
@Transactional
public class MemberController {
	private static final Logger logger = LoggerFactory.getLogger(MemberController.class);
	@Autowired Map<String,Object> map;
	@Autowired Member member;
	@Autowired MemberServiceImpl memberservice; 
	@Autowired MemberMapper memberMap;
	@Autowired VisitorServiceImpl visiservice;
	@Autowired Visitor vis;
	
	@PostMapping("/login/kakao/{kaid}")
	public Map<?,?> login(@RequestBody Map<?,?> res) {
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

		
		IPredicate p = (Object o) -> memberMap.existsMember(member.getMid());
		if(p.test(member.getMid())) {
			map.clear();
			System.out.println("가입 시켜야함 .");
			System.out.println("Member::"+member);
			IConsumer c = (Object o) -> memberMap.insertMember(member);
			c.accept(member);
			map.put("msg", "JOIN SUCCESS");
			
		} else {
			map.clear();
			System.out.println("이미 아이디가 있음. ");
			IFunction f = (Object o) -> memberMap.selectMembers(member.getMid());
			f.apply(member);
			vis.setVisitid(member.getMid());
			visiservice.registVisitor(vis);
			map.put("msg", "LOGIN SUCCESS");
			map.put("m", f.apply(member));
			System.out.println("mmmmm:::"+map.get("m"));
			System.out.println("f.apply???"+f.apply(member));
		}
		
		/*
		 * map.clear(); map.put("member", member);
		 * System.out.println(map.get("member").toString());
		 */
	
		return map;
	}
	
}
