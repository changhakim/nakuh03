package com.nakuh.web.service;

import java.util.List;

import org.springframework.stereotype.Component;

import com.nakuh.web.domain.Article;

@Component
public interface ArticleService {
	public void registArticle(Article art);
	
	public List<Article> bringAllArticlesList(Article art);
	public List<Article> retrieveArticles();
	public List<Article> retrieveArticles(String mid);
	public Article retrieveArticleDetail(String artnum);
	public int countArticles();
	public boolean existsArticle(String searchWord);
	
	public void modifyArticle(Article art);
	public void removeArticle(Article art);
	
}
