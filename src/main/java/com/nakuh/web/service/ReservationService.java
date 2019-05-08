package com.nakuh.web.service;

import java.util.List;

import org.springframework.stereotype.Component;

import com.nakuh.web.domain.Reservation;

@Component
public interface ReservationService {
<<<<<<< HEAD

=======
>>>>>>> b1b5374cf6c96ec080a519dc4861bb1e97a33cb0
	public void createReservation(Reservation param);
	public List<Reservation> findAllReservation();
	public List<Reservation> findSomeReservations(Reservation param);
	public Reservation findReservation(Reservation param);
	public int countReservation();
	public void modifyReservation(Reservation param);
	public void removeReservation(Reservation param);
<<<<<<< HEAD

=======
>>>>>>> b1b5374cf6c96ec080a519dc4861bb1e97a33cb0
}
