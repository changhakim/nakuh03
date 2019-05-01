package com.nakuh.web.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nakuh.web.domain.Member;
import com.nakuh.web.mapper.MemberMapper;

@Service
public class MemberServiceImpl implements MemberService{

	@Autowired MemberMapper memMap;	
	
	@Override
	public void registMember(Member mem) {
		memMap.insertMember(mem);
		
	}

	@Override
	public List<Member> bringAllMembersList() {
		
		return memMap.selectAllMembersList();
	}

	@Override
	public List<Member> retrieveMembers() {
		
		return memMap.selectMembers();
	}

	@Override
	public List<Member> retrieveMembers(String mid) {
		
		return memMap.selectMembers(mid);
	}

	@Override
	public int countMembers() {
		int i = memMap.countMembers();
		return i;
	}

	@Override
	public boolean existsMember(String searchWord) {
		boolean res = memMap.existsMember(searchWord);
		return res;
	}

	@Override
	public void modifyMember(Member mem) {
		memMap.updateMember(mem);
		
	}

	@Override
	public void removeMember(Member mem) {
		memMap.deleteMember(mem);
		
	}

}
