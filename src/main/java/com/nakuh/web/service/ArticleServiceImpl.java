package com.nakuh.web.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nakuh.web.domain.Article;
import com.nakuh.web.mapper.ArticleMapper;

@Service
public class ArticleServiceImpl implements ArticleService{

	@Autowired ArticleMapper artmap;
	
	@Override
	public void registArticle(Article art) {
		artmap.insertArticle(art);
		
	}

	@Override
	public List<Article> bringAllArticlesList() {
		// TODO Auto-generated method stub
		return artmap.selectAllArticlesList();
	}

	@Override
	public List<Article> retrieveArticles() {
		// TODO Auto-generated method stub
		return artmap.selectArticles();
	}

	@Override
	public List<Article> retrieveArticles(String mid) {
		// TODO Auto-generated method stub
		return artmap.selectArticles(mid);
	}

	@Override
	public int countArticles() {
		int i = artmap.countArticles();
		
		return i;
	}

	@Override
	public boolean existsArticle(String searchWord) {
		boolean res = false;
		res = artmap.existsArticle(searchWord);
		
		return res;
	}

	@Override
	public void modifyArticle(Article art) {
		artmap.updateArticle(art);
		
	}

	@Override
	public void removeArticle(Article art) {
		artmap.deleteArticle(art);
		
	}

}
