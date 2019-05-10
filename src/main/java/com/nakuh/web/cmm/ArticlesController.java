package com.nakuh.web.cmm;

import java.io.File;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Random;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

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
	public static final String SAVED_FILES = "C:\\Users\\1027\\nakuh_Project\\nakuh03_workspace\\nakuh03\\src\\main\\webapp\\resources\\img\\aquagram\\articles\\";
	@Autowired Article art;
	@Autowired ArticleServiceImpl artservice;
	@Autowired Comment com;
	@Autowired CommentServiceImpl comservice;
	@Autowired PostTag pt;
	@Autowired PostTagServiceImpl postservice;
	@Autowired ArticleMapper artMap;
	@Autowired CommentMapper comMap;
	@Autowired Proxy pxy;
	@Autowired Dummy dum;
	
	@Autowired Map<String, Object> map;
	
	@PostMapping("/myfeed/{mid}")
	public Map<?,?> ArticleList(
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
	public Map<?,?> ArticleDetail(@PathVariable String artnum)throws  Exception{
		logger.info("=========ArticleDetail 진입======");
		map.clear();
		System.out.println("??"+artnum);
		Article als = artservice.retrieveArticleDetail(artnum);
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
	@PostMapping("/arti/feed/{mid}")
	public Map<?,?> ArticleFeed(String mid, @RequestBody Article arts)throws  Exception{
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
	
	@PostMapping("/upload/image")
	public Map<?, ?> imgupload(MultipartHttpServletRequest request)throws  Exception{
		logger.info("============== imageUpload() {}  =================", "ENTER");
		
		String res = "";
		Iterator<String> it=request.getFileNames();
		  if(it.hasNext()){
              MultipartFile file=request.getFile(it.next());
              logger.info("file upload result:{}",  "success");
              logger.info("upload file name:{}",  file.getName());
              logger.info("upload file size:{}",  file.getSize());
              logger.info("upload file exist:{}",  file.isEmpty());
              logger.info("upload file original name:{}",  file.getOriginalFilename());
              logger.info("upload file:{}",  file.getOriginalFilename());
              String filename = file.getOriginalFilename();
              Random random = new Random();
              String ml = "";
              for(int i=0; i<=9; i++) {
            	  ml += random.nextInt(10);
              }
              System.out.println(ml);
              art.setArtphoto(filename.substring(0, filename.indexOf("."))+ml+(art.getMid().substring(3)));
              art.setExtension(filename.substring(filename.lastIndexOf(".")+1));
              System.out.println("photo?::"+art);
              
              //int rs = 1;//artservice.registArticle(art); 
              IPredicate p =(Object o)-> artMap.existsArticle(art);
              // DB 에 파일 저장하는 서비스 메소드 연결. 여기서는 무조건 성공인 1로 처리
              if(p.test(art)==true){
                  logger.info("file upload insert: {}",  "success");
                  File dest = new File(SAVED_FILES +  art.getArtphoto() + art.getExtension());
                  file.transferTo(dest);
                  res = "등록 성공";
              }else{
                  logger.info("file upload insert: {}",  "fail");
                  res = "등록 실패";
              }
          }else{
              logger.info("file upload result: {}", "fail");
              res = "등록 실패";
          }
          map.clear();
          map.put("res", res);
          
		return map;
	};
	
	@PostMapping("/upload/arti")
	public Map<?, ?> artiupload(@RequestBody Dummy dum)throws Exception{
		logger.info("============== artiUpload() {}  =================", "ENTER");
		System.out.println("artiupload ::"+art);
		System.out.println("dummy::"+dum);
		art.setContent(dum.getSubCont());
		art.setTag(dum.getSubtag());
		System.out.println("update해야함 ::"+art);
		
		
		
		return map;
	}

	
	
}




