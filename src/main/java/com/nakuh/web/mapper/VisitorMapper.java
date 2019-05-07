package com.nakuh.web.mapper;

import org.springframework.stereotype.Repository;

import com.nakuh.web.domain.Visitor;

@Repository
public interface VisitorMapper {

	public void insertVisitor(Visitor vs);
	public int todayVisitor(String tvs);
}