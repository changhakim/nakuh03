package com.nakuh.web.service;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nakuh.web.domain.Visitor;
import com.nakuh.web.mapper.VisitorMapper;

@Service
public class VisitorServiceImpl implements VisitorService{

	@Autowired VisitorMapper vsm;
	
	@Override
	public void registVisitor(Visitor vs) {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		Date date = new Date();
		String time = sdf.format(date);
		System.out.println(time);
		
		vs.setVisittime(time); 
		vsm.insertVisitor(vs);
		
	}
	@Override
	public int todayVisitor() {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		Date date1 = new Date();
		String time1 = sdf.format(date1);
		int today = vsm.todayVisitor(time1);
		return today;
	}

}