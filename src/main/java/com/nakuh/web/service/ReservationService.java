package com.nakuh.web.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.nakuh.web.cmm.Proxy;
import com.nakuh.web.domain.Reservation;

@Component
public interface ReservationService {
<<<<<<< HEAD

	public void createReservation(Reservation param);
=======
	public void createReservation(List<Reservation> param);
>>>>>>> 7e7d067476c7d5cab2a4d8949631112b30108956
	public List<Reservation> findAllReservation();
	public List<Reservation> findSomeReservations(Reservation param);
	public Reservation findReservation(Reservation param);
	public int countReservation();
	public void modifyReservation(Reservation param);
	public void removeReservation(Reservation param);
<<<<<<< HEAD
	public Map<String, Object> adminSearchReservation(Reservation param);
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> b1b5374cf6c96ec080a519dc4861bb1e97a33cb0
=======
	public Map<String, Object> adminSearchReservation(Reservation param);
>>>>>>> 1aefe57bc1c18c2ee5d11aee9d21af5c0aa05919
=======

>>>>>>> 83a9cda29f208c664a349fdc656e87106ac00fa0
=======
	public Map<String, Object> adminSearchReservation(Proxy pxy1);
>>>>>>> b246bade3d506c2db4e0d67ad84d1fbce3b7ce1a
>>>>>>> 68fc04fd18d5c66f956df3893ddf7ec2d7f20b13
}
