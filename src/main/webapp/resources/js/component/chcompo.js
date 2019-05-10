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
	                    +'<a id="memnav"href="#">'
	                        +'<i class="member"></i>'
	                        +'<img src="/web/resources/img/admin/member.png"'
	                        +'<p>회원관리</p>'
	                    +'</a>'
	                +'</li>'
	                +'<li>'
	                    +'<a id="resnav"href="#">'
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
	    +'<div class="main-panel" style="padding-right: 80px;padding-left: 80px ;height: 650px;">'
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
	                            +'<canvas id="myChart"style="position: relative; height:40vh; width:80vw"></canvas>'
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
	                            +'<canvas id="age"style="position: relative; height:45vh; width:80vw"></canvas>'
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
	},
	admin:()=>{
		return '<div class="col-md-12">'
		+'<div class="card col-md-6" style="margin-bottom: 20px;">'
		+'<div class="chart-container" >'
        +'<canvas id="resChart" width="800" height="450"></canvas>'
        +'</div>'
		+'</div>'
		+'<div class="card col-md-6" style="margin-bottom: 20px;">'
		+'<div class="chart-container" >'
		+'<canvas id="resCharttwo" width="800" height="450"></canvas>'
        +'</div>'
		+'</div>'
		+'	<div class="card col-md-12">'
		+'	<div class = "row">'
		+'		<div class="col-md-2">'
		+'			<div>'
		+'               <input class="respicker" type="text" id="datepicker" placeholder="날짜선택" style="width: 112px;text-align: center;">'
		+' 				<span id="clai" class="glyphicon glyphicon-calendar glyphicon-align-right" aria-hidden="true"></span>'
		+'          	</div>'
		+'		</div>'
		+'		<div class="col-md-2">'
		+'		 	<select class="form-control" id="resselect">'
		+'   				<option>전체날짜</option>'
		+'     				<option>출발날짜</option>'
		+'     				<option>예약날짜</option>'
		+'   		</select>'
		+'		</div>'
		+'		<div class="col-md-2">'
		+'		 	<select class="form-control" id="proselect">'
		+'  	 			<option>전체상품</option>'
		+'     				<option>바다낚시</option>'
		+'     				<option>민물낚시</option>'
		+'     				<option>숙박</option>'
		+'   		</select>'
		+'		</div>'
		+'		<div class="col-md-4">'
		+'			<div>'
		+'    			<input class="search" type="text" id="searchbar"style="width: 100%;height: 36px;background-color: #f5f5f5!important;">'
		+'			</div>	'
		+'		</div>'
		+'		<div class="col-md-2">'
		+'			<button class="btn btn-default" type="submit" id="searchgo"style="width: 100%;">검색</button>'
		+'		</div>'
		+'	</div>'
		
		
		
		+'<table class="table table-responsive"id="restable">'
		+'</table>'
		+'<nav id="adresnav" aria-label="Page navigation example">'
		+'</nav>'
		+'	</div>'
		+'</div>'
	}	
}