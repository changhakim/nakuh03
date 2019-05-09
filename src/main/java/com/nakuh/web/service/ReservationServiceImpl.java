package com.nakuh.web.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nakuh.web.domain.Reservation;
import com.nakuh.web.mapper.ReservationMapper;

@Service
public class ReservationServiceImpl implements ReservationService {

	@Autowired ReservationMapper resMap;
	@Autowired Reservation res;
	@Override
	public void createReservation(Reservation param) {
		resMap.insertReservation(param);
		System.out.println("serviceImpl 오늘날짜내나!!!!!!! " + param.getResdate());
		System.out.println("가격 찍힌줄 알았는데.. 안찍혀?? " + String.valueOf(param.getDeposit()));
		
		resMap.insertReservation(param);
	}

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
	public Map<String, Object> adminSearchReservation(Reservation param) {
		param.getSearchword();
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
			
		}
		return null;
	}

}
