package com.nakuh.web.cmm;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.nakuh.web.domain.Follower;
import com.nakuh.web.mapper.FollowerMapper;

@RestController
public class FollowerController {
	private static final Logger logger = LoggerFactory.getLogger(FollowerController.class);
	@Autowired Map<String, Object> map;
	@Autowired Follower fol;
	@Autowired FollowerMapper folmap;
	
	
	@GetMapping("/serach/follower/{mid}")
	public Map<?, ?> followerList(@PathVariable String mid)throws Exception{
		logger.info("============== followerList() {}  =================", "ENTER");
		map.clear();
		IFunction f = (String) -> folmap.selectFollowers(mid);
		List<?> ls = (List<?>) f.apply(mid);
		map.put("werlist", ls);
		
		return map;
	}
	
}
