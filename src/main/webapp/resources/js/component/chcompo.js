"use strict";
var chcompo = chcompo || {};

chcompo={
		member :()=>{
			return '<div class="wrapper">'
		    +'<div class="sidebar">'
	    	+'<div class="sidebar-wrapper">'
	            +'<div class="logo">'
	                +'<a href="#" class="simple-text">'
	                    +'낚어 관리자'
	                +'</a>'
	            +'</div>'
	            +'<ul class="nav">'
	                +'<li class="active">'
	                    +'<a href="#">'
	                        +'<i class="member"></i>'
	                        +'<img src="/web/resources/img/admin/member.png"'
	                        +'<p>회원관리</p>'
	                    +'</a>'
	                +'</li>'
	                +'<li>'
	                    +'<a href="#">'
	                        +'<i class="reservation"></i>'
	                        +'<img src="/web/resources/img/admin/reservation.png"'
	                        +'<p>예약관리</p>'
	                    +'</a>'
	                +'</li>'
	                +'<li>'
	                    +'<a href="#">'
	                        +'<i class="quote"></i>'
	                        +'<img src="/web/resources/img/admin/fish.png"'
	                        +'<p>시세&조과</p>'
	                    +'</a>'
	                +'</li>'
	                +'<li>'
	                    +'<a href="#">'
	                        +'<i class="lank"></i>'
	                        +'<img src="/web/resources/img/admin/lank.png"'
	                        +'<p>랭킹</p>'
	                    +'</a>'
	                +'</li>'
/*	                +'<li>'
	                    +'<a href="#">'
	                        +'<i class="aa"></i>'
	                        +'<p>Icons</p>'
	                    +'</a>'
	                +'</li>'
	                +'<li>'
	                    +'<a href="#">'
	                        +'<i class="bb"></i>'
	                        +'<p>Maps</p>'
	                    +'</a>'
	                +'</li>'*/
	            +'</ul>'
	    	+'</div>'
	    +'</div>'
	    +'<div class="main-panel">'
	        +'<div class="content" style="padding-top: 0px;">'
	            +'<div class="container-fluid">'
	                +'<div class="row" style="margin-bottom: 50px;">'
	                    +'<div class="col-md-4">'
	                        +'<div class="card" style="height: 120px;">'
	                            +'<div class="header">'
	                                +'<h4 class="title">총 회원수</h4>'
	                            +'</div>'
	                            +'<div class="content contentcount counter" id="total"style="height: 70px;">'
	                            +'</div>'
	                        +'</div>'
	                    +'</div>'
	                    +'<div class="col-md-4">'
                        +'<div class="card" style="height: 120px;">'
                            +'<div class="header">'
                                +'<h4 class="title">오늘 방문자수</h4>'
                            +'</div>'
                            +'<div class="content contentcount counter" id="today" style="height: 70px;">'
                            +'</div>'
                        +'</div>'
                    +'</div>'
                    +'<div class="col-md-4">'
                    +'<div class="card" style="height: 120px;">'
                        +'<div class="header">'
                            +'<h4 class="title">어제 방문자수</h4>'
                        +'</div>'
                        +'<div class="content contentcount counter" id="yesterday"style="height: 70px;">'                           
                        +'</div>'
                    +'</div>'
                +'</div>'                    
	                +'</div>'
	                +'<div class="row" style="padding-bottom: 50px;">'
	                    +'<div class="col-md-12" >'
	                        +'<div class="card ">'
	                            +'<div class="chart-container" >'
	                            +'<canvas id="myChart"style="position: relative; height:28vh; width:80vw"></canvas>'
	                            +'</div>'
	                           /* +'<div id="chart_div" style="padding:0px 0px 0px 0px;"></div>'*/
	                           /* +'<div id="controlsArea" style="padding:0px 0px 0px 0px;"></div>'*/
	                            +'</div>'
	                        +'</div>'
	                    +'</div>'
		                +'<div class="row">'
	                    +'<div class="col-md-12" >'
	                        +'<div class="card ">'
	                            +'<div class="chart-container" >'
	                            +'<canvas id="age"style="position: relative; height:38vh; width:80vw"></canvas>'
	                            +'</div>'
	                           /* +'<div id="chart_div" style="padding:0px 0px 0px 0px;"></div>'*/
	                           /* +'<div id="controlsArea" style="padding:0px 0px 0px 0px;"></div>'*/
	                            +'</div>'
	                        +'</div>'
	                    +'</div>'
	                +'</div>'
	            +'</div>'
	        +'</div>'
	    +'</div>'
	+'</div>'
	}
}