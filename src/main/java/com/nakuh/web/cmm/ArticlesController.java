package com.nakuh.web.cmm;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.nakuh.web.domain.Article;
import com.nakuh.web.domain.Comment;
import com.nakuh.web.domain.Dummy;
import com.nakuh.web.domain.PostTag;
import com.nakuh.web.mapper.ArticleMapper;
import com.nakuh.web.mapper.CommentMapper;
import com.nakuh.web.mapper.PostTagMapper;
import com.nakuh.web.service.ArticleServiceImpl;
import com.nakuh.web.service.CommentServiceImpl;
import com.nakuh.web.service.PostTagServiceImpl;

@Transactional
@RestController
public class ArticlesController {
	private static final Logger logger = LoggerFactory.getLogger(ArticlesController.class);
	public static final String SAVED_FILES = "C:\\Users\\1027\\nakuh_Project\\nakuh03_workspace\\nakuh03\\src\\main\\webapp\\resources\\img\\aquagram\\articles\\";
	/*
	 * C:\Users\1027\nakuh3\nakuh03\src\main\webapp\resources\img\aquagram\articles\//창하꺼
	 * C:\Users\1027\nakuh_Project\nakuh03_workspace\nakuh03\src\main\webapp\resources\img\aquagram\articles\//형꺼
	 */	
	@Autowired Article art;
	@Autowired ArticleServiceImpl artservice;
	@Autowired Comment com;
	@Autowired CommentServiceImpl comservice;
	@Autowired PostTag pt;
	@Autowired PostTagServiceImpl postservice;
	@Autowired ArticleMapper artMap;
	@Autowired CommentMapper comMap;
	@Autowired PostTagMapper posMap;
	@Autowired Proxy pxy;
	@Autowired Dummy dum;
	
	@Autowired Map<String, Object> map;
	
	@PostMapping("/myfeed/{mid}")
	public Map<?,?> articleList(
			@PathVariable String mid,
			@RequestBody Article param)throws  Exception {
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
	@PostMapping("/arti/detail/{artnum}")
	public Map<?,?> articleDetail(@PathVariable String artnum)throws  Exception{
		logger.info("=========ArticleDetail 진입======");
		map.clear();
		System.out.println("??"+artnum);
		Article als = artservice.retrieveArticleDetail(artnum);
		map.put("als", als);
		List<?> cls = (List<?>) comservice.retrieveComment(als.getArtnum());
		map.put("cls", cls);
		pt.setArtseq(als.getArtnum());
		System.out.println("pt"+pt);
		List<?> tls = postservice.retrievePostTags(pt);
		System.out.println("tls::"+tls);
		map.put("tls", tls);
		
		
		return map;
	};
	@PostMapping("/arti/feed/{mid}")
	public Map<?,?> articleFeed(String mid, @RequestBody Article arts)throws  Exception{
		logger.info("=========ArticleFeed 진입======");
		map.clear();
		System.out.println("art??"+arts);
		art.setMid(arts.getMid());
		System.out.println(art);
		art.setStartRow(arts.getStartRow());
		art.setPageSize(arts.getPageSize());
		/*
		 * IFunction f1 = (Object o)-> artMap.countnavArticle(art);
		 * System.out.println("artcount"+f1.apply(art)); map.put("nav", f1.apply(art));
		 */
		IFunction f2 = (Object o) -> artMap.selectAllArticlesList(art);
		System.out.println("art??:::::"+f2.apply(art));
		List<?> ffeed = (List<?>) f2.apply(art);
		map.put("ffeed", ffeed);

		
		return map;
	};

	
	@PutMapping("/upload/arti")
	public Map<?, ?> artiupload(@RequestBody Dummy dum)throws Exception{
		logger.info("============== artiUpload() {}  =================", "ENTER");
		map.clear();
		System.out.println("artiupload ::"+art);
		System.out.println("dummy::"+dum);
		art.setContent(dum.getSubCont());
		art.setTag(dum.getSubtag());
		Date date = new Date();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		art.setArtdate(sdf.format(date));
		System.out.println("update해야함 ::"+art);
		artMap.updateArticle(art);
		IFunction f= (Object ob) -> artMap.selectArtnum(art.getArtphoto());
		//postservice.insertPostTag(pt);
		map.put("seq", f.apply(art.getArtphoto()));
		
		return map;
	};
	
	@PostMapping("/upload/tag")
	public Map<?,?> tagupload(@RequestBody PostTag pos)throws Exception{
		logger.info("============== tagupload() {}  =================", "ENTER");
		System.out.println("posttag::"+pos);
		map.clear();
		IConsumer C = (Object o) -> posMap.insertPostTag(pos);
		C.accept(pos);
		map.put("msg", "태그 입력성공");
		
		
		return map;
	};

	
}




