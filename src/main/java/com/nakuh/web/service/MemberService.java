package com.nakuh.web.service;

import java.util.List;

import org.springframework.stereotype.Component;

import com.nakuh.web.domain.Member;

@Component
public interface MemberService {
	public void registMember(Member mem);
	
	public List<Member> bringAllMembersList();
	public List<Member> retrieveMembers();
	public List<Member> retrieveMembers(String mid);
	public int countMembers();
	public boolean existsMember(String searchWord);
	
	public void modifyMember(Member mem);
	public void removeMember(Member mem);
}
