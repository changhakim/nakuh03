package com.nakuh.web.cmm;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nakuh.web.domain.Article;
import com.nakuh.web.domain.Comment;
import com.nakuh.web.mapper.ArticleMapper;
import com.nakuh.web.mapper.CommentMapper;
import com.nakuh.web.service.ArticleServiceImpl;
import com.nakuh.web.service.CommentServiceImpl;

@RestController
public class ArticlesController {
	private static final Logger logger = LoggerFactory.getLogger(ArticlesController.class);
	
	@Autowired Article art;
	@Autowired ArticleServiceImpl artservice;
	@Autowired ArticleMapper artMap;
	@Autowired Comment com;
	@Autowired CommentServiceImpl comservice;
	@Autowired CommentMapper comMap;
	@Autowired Map<String, Object> map;
	@GetMapping("/myfeed/{mid}")
	public Map<?,?> ArticleList(String mid
								, Article param) {
		logger.info("=========ArticleList 진입======");

		System.out.println("????::"+param);
		map.clear();
		
		List<?> ls = (List<?>) artservice.retrieveArticles(param.getMid());
		System.out.println("ls??:: "+ls);
		map.put("myList", ls);
//		map.put("myfeedList", ls);
//		System.out.println("map??::"+map.get("myfeedList"));
		
		return map;
	};
	@GetMapping("/arti/detail/{artnum}")
	public Map<?,?> ArticleDetail(String artnum, Article art, Comment com){
		logger.info("=========ArticleDetail 진입======");
		map.clear();
		System.out.println("artnum??::"+artnum);
		System.out.println("art"+art);
		Article als = artservice.retrieveArticleDetail(art.getArtnum());
		System.out.println("als"+als);
		map.put("als", als);
		List<?> cls = (List<?>) comservice.retrieveComment(als.getArtnum());
		System.out.println("cls"+cls);
		map.put("cls", cls);
		
		
		return map;
	};

}
