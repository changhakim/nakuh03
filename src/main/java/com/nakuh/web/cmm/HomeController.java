package com.nakuh.web.cmm;

import java.util.Locale;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.SessionAttributes;

@Controller
@SessionAttributes({"ctx","css","js","img","time"})
public class HomeController {
    @Autowired HttpSession session;
    @Autowired HttpServletRequest request;
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	@GetMapping(value="/")
	public String home(Locale locale,Model model) {
		logger.info("=========index진입======");
        String ctx = request.getContextPath();
        session.setAttribute("ctx", ctx);
        session.setAttribute("css", ctx + "/resources/css");
        session.setAttribute("js", ctx + "/resources/js");
        session.setAttribute("img", ctx + "/resources/img");
		
		return"index";
	}
	

	
}
