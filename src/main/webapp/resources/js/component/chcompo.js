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
	        +'<div class="content">'
	            +'<div class="container-fluid">'
	                +'<div class="row">'
	                    +'<div class="col-md-4">'
	                        +'<div class="card">'
	                            +'<div class="header">'
	                                +'<h4 class="title">Email Statistics</h4>'
	                                +'<p class="category">Last Campaign Performance</p>'
	                            +'</div>'
	                            +'<div class="content">'
	                                +'<div id="chartPreferences" class="ct-chart ct-perfect-fourth"></div>'
	                                +'<div class="footer">'
	                                    +'<div class="legend">'
	                                        +'<i class="fa fa-circle text-info"></i> Open'
	                                        +'<i class="fa fa-circle text-danger"></i> Bounce'
	                                        +'<i class="fa fa-circle text-warning"></i> Unsubscribe'
	                                    +'</div>'
	                                    +'<hr>'
	                                    +'<div class="stats">'
	                                        +'<i class="fa fa-clock-o"></i> Campaign sent 2 days ago'
	                                    +'</div>'
	                                +'</div>'
	                            +'</div>'
	                        +'</div>'
	                    +'</div>'
	                    +'<div class="col-md-4">'
                        +'<div class="card">'
                            +'<div class="header">'
                                +'<h4 class="title">Email Statistics</h4>'
                                +'<p class="category">Last Campaign Performance</p>'
                            +'</div>'
                            +'<div class="content">'
                                +'<div id="chartPreferences" class="ct-chart ct-perfect-fourth"></div>'
                                +'<div class="footer">'
                                    +'<div class="legend">'
                                        +'<i class="fa fa-circle text-info"></i> Open'
                                        +'<i class="fa fa-circle text-danger"></i> Bounce'
                                        +'<i class="fa fa-circle text-warning"></i> Unsubscribe'
                                    +'</div>'
                                    +'<hr>'
                                    +'<div class="stats">'
                                        +'<i class="fa fa-clock-o"></i> Campaign sent 2 days ago'
                                    +'</div>'
                                +'</div>'
                            +'</div>'
                        +'</div>'
                    +'</div>'
                    +'<div class="col-md-4">'
                    +'<div class="card">'
                        +'<div class="header">'
                            +'<h4 class="title">Email Statistics</h4>'
                            +'<p class="category">Last Campaign Performance</p>'
                        +'</div>'
                        +'<div class="content">'
                            +'<div id="chartPreferences" class="ct-chart ct-perfect-fourth"></div>'
                            +'<div class="footer">'
                                +'<div class="legend">'
                                    +'<i class="fa fa-circle text-info"></i> Open'
                                    +'<i class="fa fa-circle text-danger"></i> Bounce'
                                    +'<i class="fa fa-circle text-warning"></i> Unsubscribe'
                                +'</div>'
                                +'<hr>'
                                +'<div class="stats">'
                                    +'<i class="fa fa-clock-o"></i> Campaign sent 2 days ago'
                                +'</div>'
                            +'</div>'
                        +'</div>'
                    +'</div>'
                +'</div>'                    
	                +'</div>'
	                +'<div class="row">'
	                    +'<div class="col-md-12">'
	                        +'<div class="card ">'
	                            +'<div class="header">'
	                                +'<h4 class="title">2014 Sales</h4>'
	                                +'<p class="category">All products including Taxes</p>'
	                            +'</div>'
	                            +'<div id="lineChartArea" style="padding:0px 20px 0px 0px;"></div>'
	                                +'<div class="footer">'
	                                +'<div id="controlsArea" style="padding:0px 20px 0px 0px;"></div>'
	                                +'</div>'
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