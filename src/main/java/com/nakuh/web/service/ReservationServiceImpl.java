package com.nakuh.web.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nakuh.web.cmm.Proxy;
import com.nakuh.web.domain.Reservation;
import com.nakuh.web.mapper.ReservationMapper;

@Service
public class ReservationServiceImpl implements ReservationService{
	@Autowired ReservationMapper resMap;
	@Autowired Reservation res;
	@Autowired Proxy pxy;
	@Autowired List<Reservation> reslist;
	@Autowired Map<String, Object> map;
	@Override
	public void createReservation(Reservation param) {
<<<<<<< HEAD
		  resMap.insertReservation(param);
		 	}
=======
<<<<<<< HEAD
		/*
		 * resMap.insertReservation(param);
		 * System.out.println("serviceImpl 오늘날짜내나!!!!!!! " + param.getDepodate());
		 * System.out.println("날짜 안 나오니?" + param.getDepartdate());
		 * System.out.println("가격 찍힌줄 알았는데.. 안찍혀?? " +
		 * String.valueOf(param.getDeposit())); =======
		 * System.out.println("serviceImpl 오늘날짜내나!!!!!!! " + param.getResdate());
		 * System.out.println("가격 찍힌줄 알았는데.. 안찍혀?? " +
		 * String.valueOf(param.getDeposit()));
		 * 
		 * >>>>>>> b1b5374cf6c96ec080a519dc4861bb1e97a33cb0
		 * resMap.insertReservation(param);
		 */	}
=======
		resMap.insertReservation(param);
	}
>>>>>>> 3087dcfe3cffaa4d2bc465ff845da52000a598b5
>>>>>>> 68fc04fd18d5c66f956df3893ddf7ec2d7f20b13

	@Override
	public List<Reservation> findAllReservation() {
		return resMap.selectAllReservation();
	}

	@Override
	public List<Reservation> findSomeReservations(Reservation param) {
		return resMap.selectSomeReservations(param);
	}

	@Override
	public Reservation findReservation(Reservation param) {
		return resMap.selectReservation(param);
	}

	@Override
	public int countReservation() {
		return resMap.countReservation();
	}

	@Override
	public void modifyReservation(Reservation param) {
		resMap.updateReservation(param);
	}

	@Override
	public void removeReservation(Reservation param) {
		resMap.deleteReservation(param);
	}

	@Override
<<<<<<< HEAD
	public Map<String, Object> adminSearchReservation(Reservation param) {
	/*	param.getSearchword();
		param.getSearchdate();
		param.getResselect();
		param.getProselect();
		if(param.getResselect()=="출발날짜"&&param.getSearchword()==""&&param.getProselect()=="상품종류") {
			
		}
		if(param.getResselect()=="예약날짜"&&param.getSearchword()==""&&param.getProselect()=="상품종류") {
			
		}
		if(param.getResselect()=="출발날짜"&&param.getSearchword()==""&&param.getProselect()!="상품종류") {
			
		}
		if(param.getResselect()=="예약날짜"&&param.getSearchword()==""&&param.getProselect()!="상품종류") {
			
		}
		if(param.getResselect()=="출발/예약"&&param.getSearchword()==""&&param.getProselect()!="상품종류") {
			
		}
		if(param.getResselect()=="출발날짜"&&param.getSearchword()!=""&&param.getProselect()=="상품종류") {
			
		}
		if(param.getResselect()=="예약날짜"&&param.getSearchword()!=""&&param.getProselect()=="상품종류") {
			
		}
		if(param.getResselect()=="출발/예약"&&param.getSearchword()!=""&&param.getProselect()!="상품종류") {
			
		}
		if(param.getResselect()=="출발날짜"&&param.getSearchword()!=""&&param.getProselect()!="상품종류") {
			
		}
		if(param.getResselect()=="예약날짜"&&param.getSearchword()!=""&&param.getProselect()!="상품종류") {
			
		}*/
		return null;		
=======
	public Map<String, Object> adminSearchReservation(Proxy pxy1) {
		map.clear();
		map.put("page_num", pxy1.getNumber());
		map.put("page_size", "10");
		map.put("blocksize", "5");
		map.put("totalCount", (int)resMap.countSearchReservation(pxy1));
		pxy1.carryOut(map);
		if(pxy1.getResselect()=="전체날짜") {
			pxy1.setResselect("");
		}
		if(pxy1.getProselect()=="전체상품") {
			pxy1.setProselect("");
		}
		reslist = resMap.adminSearchReservation(pxy1);
		map.put("reslist", reslist);
		map.put("pxy", pxy1);
		return map;
>>>>>>> 68fc04fd18d5c66f956df3893ddf7ec2d7f20b13
	}

}