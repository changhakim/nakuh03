package com.nakuh.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Component
public class Article {
	private String  artnum, content, artdate, artphoto, mid, extension
					, comcount, profilephoto, mname, artCount, followerCount, folloingCount;
	private int rownum,startRow, pageSize;
}
