package com.nakuh.web.cmm;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nakuh.web.domain.Article;
import com.nakuh.web.mapper.ArticleMapper;
import com.nakuh.web.service.ArticleServiceImpl;

@RestController
public class ArticlesController {
	private static final Logger logger = LoggerFactory.getLogger(ArticlesController.class);
	
	@Autowired Article art;
	@Autowired ArticleServiceImpl artservice;
	@Autowired ArticleMapper artMap;
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

}
