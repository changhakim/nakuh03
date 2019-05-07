package com.nakuh.web.cmm;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.nakuh.web.domain.Article;
import com.nakuh.web.domain.Comment;
import com.nakuh.web.domain.PostTag;
import com.nakuh.web.mapper.ArticleMapper;
import com.nakuh.web.mapper.CommentMapper;
import com.nakuh.web.service.ArticleServiceImpl;
import com.nakuh.web.service.CommentServiceImpl;
import com.nakuh.web.service.PostTagServiceImpl;

@Transactional
@RestController
public class ArticlesController {
	private static final Logger logger = LoggerFactory.getLogger(ArticlesController.class);
	
	@Autowired Article art;
	@Autowired ArticleServiceImpl artservice;
	@Autowired Comment com;
	@Autowired CommentServiceImpl comservice;
	@Autowired PostTag pt;
	@Autowired PostTagServiceImpl postservice;
	@Autowired ArticleMapper artMap;
	@Autowired CommentMapper comMap;
	@Autowired Proxy pxy;
	
	@Autowired Map<String, Object> map;
	
	@PostMapping("/myfeed/{mid}")
	public Map<?,?> ArticleList(
			@PathVariable String mid,
			@RequestBody Article param) {
		logger.info("=========ArticleList 진입======");
		System.out.println("page???????????"+param);
		map.clear();
		/*
		 * map.put("page_num", page); map.put("mid", param.getMid());
		 * map.put("page_size", "12"); IFunction f = (Object o) ->
		 * artMap.countArticles(param.getMid()); map.put("total_count",
		 * f.apply(param.getMid())); pxy.carryOut(map);
		 * System.out.println("??pxy??"+pxy); map.put("pxy", pxy);
		 */
		/*
		 * art.setMid(param.getMid()); art.setStartRow(param.getStartRow());
		 */
		art.setMid(param.getMid());
		art.setStartRow(param.getStartRow());
		art.setPageSize(param.getPageSize());
		List<?> ls = (List<?>) artservice.retrieveArticles(art);
		map.put("myList", ls);
		System.out.println("ls?"+ls);
//		mapput("myfeedList", ls);
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
	@GetMapping("/arti/feed/{mid}")
	public Map<?,?> ArticleFeed(String mid, Article arts){
		logger.info("=========ArticleFeed 진입======");
		map.clear();
		System.out.println("art??"+arts);
		art.setMid(arts.getMid());
		System.out.println(art);
		IFunction f1 = (Object o)-> artMap.countnavArticle(art); 
		System.out.println("artcount"+f1.apply(art));
		map.put("nav", f1.apply(art));
		IFunction f2 = (Object o) -> artMap.selectAllArticlesList(art);
		System.out.println("art??:::::"+f2.apply(art));
		List<?> ffeed = (List<?>) f2.apply(art);
		map.put("ffeed", ffeed);

		
		return map;
	};
	

}
