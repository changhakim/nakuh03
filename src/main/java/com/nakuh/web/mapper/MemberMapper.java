package com.nakuh.web.mapper;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.nakuh.web.domain.Member;

@Repository
public interface MemberMapper {
	public void insertMember(Member mem);
	
	public List<Member> selectAllMembersList();
	public List<Member> selectMembers();
	public List<Member> selectMembers(String mid);
	public Member selectMember(Member mem);
	public int countMembers();
	public boolean existsMember(String searchWord);
	
	public void updateMember(Member mem);
	public void deleteMember(Member mem);
}
