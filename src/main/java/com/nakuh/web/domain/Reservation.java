package com.nakuh.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data@Component
public class Reservation {
	private String resnum,resname,departdate,mid, phone, depodate, rescount, deposit, message;
}
