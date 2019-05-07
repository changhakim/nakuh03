package com.nakuh.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data@Component
public class Reservation {
<<<<<<< HEAD
	private String resnum,resname,departdate,mid, phone, depodate, rescount, deposit, message;
=======
	private String resnum, startdate, resname, mid, phone, resdate, rescount, deposit, message, pronum, proname, ampm;
>>>>>>> b1b5374cf6c96ec080a519dc4861bb1e97a33cb0
}
