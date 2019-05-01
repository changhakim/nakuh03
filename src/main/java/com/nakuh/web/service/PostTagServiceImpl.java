package com.nakuh.web.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nakuh.web.domain.PostTag;
import com.nakuh.web.mapper.PostTagMapper;

@Service
public class PostTagServiceImpl implements PostTagMapper{

	@Autowired PostTagMapper posMap;
	
	@Override
	public void insertPostTag(PostTag pos) {
		posMap.insertPostTag(pos);
		
	}

	@Override
	public List<PostTag> selectAllPostTagsList() {
		
		return posMap.selectAllPostTagsList();
	}

	@Override
	public List<PostTag> selectPostTags() {
		
		return posMap.selectPostTags();
	}

	@Override
	public PostTag selectPostTag(String searchWord) {
		
		return posMap.selectPostTag(searchWord);
	}

	@Override
	public int countPostTags() {
		int i = posMap.countPostTags();
		return i;
	}

	@Override
	public boolean existsPostTag(String searchWord) {
		boolean res = false;
		res = posMap.existsPostTag(searchWord);
		return res;
	}

	@Override
	public void updatePostTag(PostTag pos) {
		posMap.updatePostTag(pos);
		
	}

	@Override
	public void deletePostTag(PostTag pos) {
		posMap.deletePostTag(pos);
		
	}

}
