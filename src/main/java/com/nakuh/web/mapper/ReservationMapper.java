package com.nakuh.web.mapper;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.nakuh.web.domain.Reservation;

@Repository
public interface ReservationMapper {

	public void insertReservation(Reservation param);
	public List<Reservation> selectAllReservation();
	public List<Reservation> selectSomeReservations(Reservation param);
	public Reservation selectReservation(Reservation param);
	public int countReservation();
	public void updateReservation(Reservation param);
	public void deleteReservation(Reservation param);

}
