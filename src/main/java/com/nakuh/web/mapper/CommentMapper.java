package com.nakuh.web.mapper;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.nakuh.web.domain.Comment;

@Repository
public interface CommentMapper {
	public void insertComment(Comment com);
	
	public List<Comment> selectAllCommentsList();
	public List<Comment> selectComments();
	public List<Comment> selectComment(String titleseq);
	public int countComments(String ci);
	public boolean existsComment(String searchWord);
	
	public void updateComment(Comment com);
	public void deleteComment(Comment com);
}
