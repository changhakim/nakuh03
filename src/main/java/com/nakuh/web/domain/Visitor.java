package com.nakuh.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data@Component
public class Visitor {
	private String visitid,visittime;
}