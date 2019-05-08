package com.nakuh.web.mapper;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.nakuh.web.domain.Reservation;

@Repository
public interface ReservationMapper {
<<<<<<< HEAD

=======
>>>>>>> b1b5374cf6c96ec080a519dc4861bb1e97a33cb0
	public void insertReservation(Reservation param);
	public List<Reservation> selectAllReservation();
	public List<Reservation> selectSomeReservations(Reservation param);
	public List<Reservation> selectpageReservations(Object o);
	public Reservation selectReservation(Reservation param);
	public int countReservation();
	public void updateReservation(Reservation param);
	public void deleteReservation(Reservation param);
<<<<<<< HEAD

=======
>>>>>>> b1b5374cf6c96ec080a519dc4861bb1e97a33cb0
}
