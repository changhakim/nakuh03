package com.nakuh.web.service;

import org.springframework.stereotype.Component;

import com.nakuh.web.domain.Visitor;

@Component
public interface VisitorService {

	public void registVisitor(Visitor vs);
	
	public int todayVisitor();
}