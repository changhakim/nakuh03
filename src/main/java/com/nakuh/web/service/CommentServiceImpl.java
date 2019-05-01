package com.nakuh.web.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nakuh.web.domain.Comment;
import com.nakuh.web.mapper.CommentMapper;

@Service
public class CommentServiceImpl implements CommentService{
	
	@Autowired CommentMapper comMap;
	
	@Override
	public void registComment(Comment com) {
		comMap.insertComment(com);
		
	}

	@Override
	public List<Comment> bringAllCommentsList() {
		
		return comMap.selectAllCommentsList();
	}

	@Override
	public List<Comment> retrieveComments() {
		
		return comMap.selectComments();
	}

	@Override
	public Comment retrieveComment(String searchWord) {
		
		return comMap.selectComment(searchWord);
	}

	@Override
	public int countComments() {
		int i = comMap.countComments();
		return i;
	}

	@Override
	public boolean existsComment(String searchWord) {
		boolean res = false;
		res = comMap.existsComment(searchWord);
		return res;
	}

	@Override
	public void modifyComment(Comment com) {
		comMap.updateComment(com);
		
	}

	@Override
	public void removeComment(Comment com) {
		comMap.deleteComment(com);
		
	}

}
