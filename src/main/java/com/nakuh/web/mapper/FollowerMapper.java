package com.nakuh.web.mapper;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.nakuh.web.domain.Follower;

@Repository
public interface FollowerMapper {
	public void insertFollower(Follower fol);
	
	public List<Follower> selectAllFollowersList();
	public List<Follower> selectFollowers();
	public Follower selectFollower(String searchWord);
	public int countFollowers();
	public boolean existsFollower(String searchWord);
	
	public void updateFollower(Follower fol);
	public void deleteFollower(Follower fol);
}
