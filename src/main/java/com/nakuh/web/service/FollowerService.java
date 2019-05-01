package com.nakuh.web.service;

import java.util.List;

import org.springframework.stereotype.Component;

import com.nakuh.web.domain.Follower;

@Component
public interface FollowerService {
	public void registFollower(Follower fol);
	
	public List<Follower> bringAllFollowersList();
	public List<Follower> retrieveFollowers();
	public Follower retrieveFollower(String searchWord);
	public int countFollowers();
	public boolean existsFollower(String searchWord);
	
	public void modifyFollower(Follower fol);
	public void removeFollower(Follower fol);
}
