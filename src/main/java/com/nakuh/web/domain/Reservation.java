package com.nakuh.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data@Component
public class Reservation {
	private String resnum, startdate, resname, mid, phone, resdate, rescount, deposit, message, pronum, proname, ampm,company,category
	,searchdate,resselect,proselect,searchword;
}
