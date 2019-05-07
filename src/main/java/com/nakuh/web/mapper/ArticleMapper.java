package com.nakuh.web.mapper;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.nakuh.web.domain.Article;

@Repository
public interface ArticleMapper {
	public void insertArticle(Article art);
	
	public List<Article> selectAllArticlesList(Article art);
	public List<Article> selectArticles();
	public List<Article> selectArticles(String mid);
	public Article selectArticlesDetail(String artnum);
	public int countArticles();
	public boolean existsArticle(String searchWord);
	
	public void updateArticle(Article art);
	public void deleteArticle(Article art);
}
