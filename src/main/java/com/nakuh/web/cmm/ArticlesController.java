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
import com.nakuh.web.domain.PostTag;
import com.nakuh.web.mapper.ArticleMapper;
import com.nakuh.web.mapper.CommentMapper;
import com.nakuh.web.mapper.PostTagMapper;
import com.nakuh.web.service.ArticleServiceImpl;
import com.nakuh.web.service.CommentServiceImpl;
import com.nakuh.web.service.PostTagServiceImpl;

@RestController
public class ArticlesController {
	private static final Logger logger = LoggerFactory.getLogger(ArticlesController.class);
	
	@Autowired Article art;
	@Autowired ArticleServiceImpl artservice;
	@Autowired Comment com;
	@Autowired CommentServiceImpl comservice;
	@Autowired PostTag pt;
	@Autowired PostTagServiceImpl postservice;
	
	@Autowired Map<String, Object> map;
	@GetMapping("/myfeed/{mid}")
	public Map<?,?> ArticleList(String mid
								, Article param) {
		logger.info("=========ArticleList 진입======");
		map.clear();
		
		List<?> ls = (List<?>) artservice.retrieveArticles(param.getMid());
		map.put("myList", ls);

//		map.put("myfeedList", ls);
//		System.out.println("map??::"+map.get("myfeedList"));
		
		return map;
	};
	@GetMapping("/arti/detail/{artnum}")
	public Map<?,?> ArticleDetail(String artnum, Article art, Comment com){
		logger.info("=========ArticleDetail 진입======");
		map.clear();
		Article als = artservice.retrieveArticleDetail(art.getArtnum());
		map.put("als", als);
		List<?> cls = (List<?>) comservice.retrieveComment(als.getArtnum());
		map.put("cls", cls);
		pt.setArtseq(als.getArtnum());
		System.out.println("pt"+pt);
		List<?> tls = postservice.selectPostTags(pt);
		System.out.println("tls::"+tls);
		map.put("tls", tls);
		
		
		return map;
	};

}
