package com.nakuh.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data@Component
public class Reservation {
<<<<<<< HEAD
<<<<<<< HEAD
	private String resnum, startdate, resname, mid, phone, resdate, rescount, deposit, message, pronum, proname, ampm,company,category;
=======
<<<<<<< HEAD
	private String resnum,resname,departdate,mid, phone, depodate, rescount, deposit, message;
=======
	private String resnum, startdate, resname, mid, phone, resdate, rescount, deposit, message, pronum, proname, ampm;
>>>>>>> b1b5374cf6c96ec080a519dc4861bb1e97a33cb0
>>>>>>> 428b9bea320018ac3b6135be42fedc6b5ec4b132
=======
	private String resnum, startdate, resname, mid, phone, resdate, rescount, deposit, message, pronum, proname, ampm,company,category
	,searchdate,resselect,proselect,searchword;
>>>>>>> 1aefe57bc1c18c2ee5d11aee9d21af5c0aa05919
}
