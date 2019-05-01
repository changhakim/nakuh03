"use strict";
var eycompo = eycompo || {};
eycompo ={
		commonnav :()=>{
			return '<nav class="navbar navbar-inverse navbar-default" role="navigation" id="comnav" data-spy="affix" data-offset-top="525" style="width: 100%; height:50px; background-color: #fafafa; border: none; border-bottom: 1px solid; border-color: #ddd; border-radius: 0px; margin-bottom:0px;">	  '
			+'<div class="container-fluid">'
			+'<ul class="nav navbar-nav">'
			+'      <li id="home"><a href="#">HOME</a></li>'
			+'      <li id="ocean"><a href="#">OCEAN</a></li>'
			+'      <li id="river"><a href="#">RIVER</a></li>'
			+'      <li id="hotel"><a href="#">HOTEL</a></li>'
			+'      <li id="aquagram"><a href="#">AQUAGRAM</a></li>'
			+'      <li id="mypage"><a href="#">MYPAGE</a></li>'
			+'      <li id="logout"><a href="#">LOGOUT</a></li>'
			+'</ul>'
			+'</div>'
			+'</nav>'
		},

		search_bar : ()=>{
			return '<section class="newsletter">'
			+'      <div class="container">'
			+'        <div class="row">'
			+'          <div class="col-md-10 col-sm-10 col-md-offset-1 col-sm-offset-1">'
			+'          <h2>도시명을 입력하세요 </h2>'
			+'          <div class="input-group">'
			+'            <input type="text" class="form-control" placeholder="도시명만 쓰세요...">'
			+'            <span class="input-group-btn">'
			+'              <button type="button" class="btn btn-default">SEARCH</button>'
			+'            </span>'
			+'          </div>'
			+'          </div>'
			+'        </div>'
			+'      </div>'
			+'    </section>'
		},
		
		main_search:()=>{
			return '<!-- 검색창 -->'
		    +'<div>'
		    +'<section id="search_content" class="main-banner" style="background:#242c36 url(/web/resources/img/reservation/ocean.jpg) no-repeat">'
		      +'<div class="container">'
		        +'<div class="caption">'
		          +'<h2>PLAN YOUR NEXT FISHING</h2>'
		          +'<form>'
		            +'<fieldset>'
		              +'<div class="col-md-4 col-sm-4 no-pad">'
		              +'<input type="text" class="form-control border-right" placeholder="도시명" />'
		              +'</div>'
		              +'<div id="load-target" class="col-md-3 col-sm-3 no-pad">'
		             /* +'<input type="text" class="form-control border-right hasDatepicker" id="date_search">'*/
		              +'</div>'
		              +'<div class="col-md-3 col-sm-3 no-pad">'
		                +'<select class="selectpicker">'
		                  +'<option>인원 선택</option>'
		                  +'<option>1</option>'
		                  +'<option>2</option>'
		                  +'<option>3</option>'
		                  +'<option>4 + </option>'
		                +'</select>'
		              +'</div>'
		              +'<div class="col-md-2 col-sm-2 no-pad">'
		                +'<input type="submit" class="btn seub-btn" value="SEARCH" />'
		              +'</div>'
		            +'</fieldset>'
		          +'</form>'
		        +'</div>'
		      +'</div>'
		    +'</section>'
		    +'</div>'
		    +'<!-- 검색창  끝-->'
		    +''
		    +'<!-- 메인 화면  -->'
		    +'</br>'
		    +'</br>'
		    +'<div class="features">'
		    +'<div id="main-container" class="container">'
		    +'</div>'
		    +'</div></br></br>'
		},
		
		item_container : ()=>{
			return '<div class="col-md-12">'
			+'					<div class="row">'
			+'						<div class="basic-information">'
			+'<div class="col-md-12 view_area container"id="info_content">'
		    +'<!-- 예약정보 -->'
		    +'<div id="view_reserve" class="view_info view_info_reserve view_contents">'
		        +'<section class="full_section" id="calendar_tab">'
		            +'<div class="calendar_area view_box">'
		                +'<div class="calendar_wrap">'
		                    +'<div class="calendar_title clearfix">'
		                        +'<p class="title_arrow">'
		                            +'2019년 05월 <a class="calendar_next"><img src="https://img.moolban.com/unsafe/asset/www/responsive/img/basic/calendar_next.png" alt=""></a>'
		                        +'</p>'
		                        +'<!-- <span class="one_ticket">천원한장</span> -->'
		                    +'</div>'
		                    +'<!--// calendar_title -->'
		                    +'<div class="calendar_201905">'
		                        +'<table class="calendar">'
		                            +'<tbody>'
		                                +'<tr>'
		                                +'</tr>'
		                                +'<tr>'
		                                    +'<td>일</td>'
		                                    +'<td>월</td>'
		                                    +'<td>화</td>'
		                                    +'<td>수</td>'
		                                    +'<td>목</td>'
		                                    +'<td>금</td>'
		                                    +'<td>토</td>'
		                                +'</tr>'
		                                +'<tr>'
		                                    +'<td style="color: #666;"><a class="off"><strong>28</strong></a></td>'
		                                    +'<td style="color: #666;"><a class="off"><strong>29</strong></a></td>'
		                                    +'<td style="color: #666;"><a class="off"><strong>30</strong></a></td>'
		                                    +'<td><a class="cal_cell_date" data-date="2019-05-01"><strong>1</strong><img src="https://img.moolban.com/unsafe/asset/www/responsive/img/weather/weather-30.png" alt=""><span>3물</span></a></td>'
		                                    +'<td><a class="cal_cell_date on" data-date="2019-05-02"><strong>2</strong><img src="https://img.moolban.com/unsafe/asset/www/responsive/img/weather/weather-10.png" alt=""><span>4물</span></a></td>'
		                                    +'<td><a class="cal_cell_date" data-date="2019-05-03"><strong>3</strong><img src="https://img.moolban.com/unsafe/asset/www/responsive/img/weather/weather-10.png" alt=""><span>5물</span></a></td>'
		                                    +'<td><a class="cal_cell_date" data-date="2019-05-04"><strong>4</strong><img src="https://img.moolban.com/unsafe/asset/www/responsive/img/weather/weather-10.png" alt=""><span>6물</span></a></td>'
		                                +'</tr>'
		                                +'<tr>'
		                                    +'<td><a class="cal_cell_date sunday" data-date="2019-05-05"><strong>5</strong><img src="https://img.moolban.com/unsafe/asset/www/responsive/img/weather/weather-30.png" alt=""><span>7물</span></a></td>'
		                                    +'<td><a class="cal_cell_date" data-date="2019-05-06"><strong>6</strong><img src="https://img.moolban.com/unsafe/asset/www/responsive/img/weather/weather-30.png" alt=""><span>8물</span></a></td>'
		                                    +'<td><a class="cal_cell_date" data-date="2019-05-07"><strong>7</strong><img src="https://img.moolban.com/unsafe/asset/www/responsive/img/weather/weather-10.png" alt=""><span>9물</span></a></td>'
		                                    +'<td><a class="cal_cell_date" data-date="2019-05-08"><strong>8</strong><img src="https://img.moolban.com/unsafe/asset/www/responsive/img/weather/weather-10.png" alt=""><span>10물</span></a></td>'
		                                    +'<td><a class="cal_cell_date" data-date="2019-05-09"><strong>9</strong><img src="https://img.moolban.com/unsafe/asset/www/responsive/img/weather/weather-30.png" alt=""><span>11물</span></a></td>'
		                                    +'<td><a class="cal_cell_date" data-date="2019-05-10"><strong>10</strong><img src="https://img.moolban.com/unsafe/asset/www/responsive/img/weather/weather-10.png" alt=""><span>12물</span></a></td>'
		                                    +'<td><a class="cal_cell_date" data-date="2019-05-11"><strong>11</strong><img src="https://img.moolban.com/unsafe/asset/www/responsive/img/weather/weather-10.png" alt=""><span>13물</span></a></td>'
		                                +'</tr>'
		                                +'<tr>'
		                                    +'<td><a class="cal_cell_date sunday" data-date="2019-05-12"><strong>12</strong><span>조금</span></a></td>'
		                                    +'<td><a class="cal_cell_date" data-date="2019-05-13"><strong>13</strong><span>무시</span></a></td>'
		                                    +'<td><a class="cal_cell_date" data-date="2019-05-14"><strong>14</strong><span>1물</span></a></td>'
		                                    +'<td><a class="cal_cell_date" data-date="2019-05-15"><strong>15</strong><span>2물</span></a></td>'
		                                    +'<td><a class="cal_cell_date" data-date="2019-05-16"><strong>16</strong><span>3물</span></a></td>'
		                                    +'<td><a class="cal_cell_date" data-date="2019-05-17"><strong>17</strong><span>4물</span></a></td>'
		                                    +'<td><a class="cal_cell_date" data-date="2019-05-18"><strong>18</strong><span>5물</span></a></td>'
		                                +'</tr>'
		                                +'<tr>'
		                                    +'<td><a class="cal_cell_date sunday" data-date="2019-05-19"><strong>19</strong><span>6물</span></a></td>'
		                                    +'<td><a class="cal_cell_date" data-date="2019-05-20"><strong>20</strong><span>7물</span></a></td>'
		                                    +'<td><a class="cal_cell_date" data-date="2019-05-21"><strong>21</strong><span>8물</span></a></td>'
		                                    +'<td><a class="cal_cell_date" data-date="2019-05-22"><strong>22</strong><span>9물</span></a></td>'
		                                    +'<td><a class="cal_cell_date" data-date="2019-05-23"><strong>23</strong><span>10물</span></a></td>'
		                                    +'<td><a class="cal_cell_date" data-date="2019-05-24"><strong>24</strong><span>11물</span></a></td>'
		                                    +'<td><a class="cal_cell_date" data-date="2019-05-25"><strong>25</strong><span>12물</span></a></td>'
		                                +'</tr>'
		                                +'<tr>'
		                                    +'<td><a class="cal_cell_date sunday" data-date="2019-05-26"><strong>26</strong><span>13물</span></a></td>'
		                                    +'<td><a class="cal_cell_date" data-date="2019-05-27"><strong>27</strong><span>조금</span></a></td>'
		                                    +'<td><a class="cal_cell_date" data-date="2019-05-28"><strong>28</strong><span>무시</span></a></td>'
		                                    +'<td><a class="cal_cell_date" data-date="2019-05-29"><strong>29</strong><span>1물</span></a></td>'
		                                    +'<td><a class="cal_cell_date" data-date="2019-05-30"><strong>30</strong><span>2물</span></a></td>'
		                                    +'<td><a class="cal_cell_date" data-date="2019-05-31"><strong>31</strong><span>3물</span></a></td>'
		                                    +'<td style="color: #666;"><a class="off"><strong>1</strong></a></td>'
		                                +'</tr>'
		                            +'</tbody>'
		                        +'</table>'
		                    +'</div>'
		                +'</div>'
		            +'</div>'
		        +'</section>'
		        +'<section id="reserve_section" style=padding-top:0px;>'
		            +'<a class="reserve_area  view_box" data-cg-key="10342" data-gi-type="1" data-gi-key="1483447">'
		                +'<div class="reserve_con">'
		                    +'<span class="count_pic">남은수55명</span>'
		                    +'<p class="reserve_title">광어/우럭</p>'
		                    +'<div class="reserve_price">'
		                        +'<p class="reserve_pay">70,000<span>  원</span></p>'
		                        +'<!-- <p class="coupon_pay"><strong>50% 반덤 쿠폰 지급</strong>75,000<span>원</span><i>예약하기</i></p>'
		                        +'<p class="one_pay"><strong>천원 한장</strong>1,000<span>원</span><i>예약하기</i></p> -->'
		                    +'</div>'
		                    +'<div class="reserve_dot">'
		                        +'<p>최소인원 15명 / 최대인원 55명</p>'
		                        +'<p>오전 5시 ~ 오후 4시 (11시간)</p>'
		                        +'<p>어종 : 광어, 우럭, 노래미</p>'
		                    +'</div>'
		                +'</div>'
		            +'</a>'
		        +'</section>'
		        +'<section class="full_section" style=padding-top:0px;>'

		            +'<div class="view_box info_view_sty8">'
		                +'<p class="view_box_title">편의시설</p>'
		                +'<ol class="in_box clearfix">'
		                    +'<li><img src="https://img.moolban.com/unsafe/images/web_ver/siseol/view/air_conditioner.png" alt="">에어컨</li>'
		                    +'<li><img src="https://img.moolban.com/unsafe/images/web_ver/siseol/view/tv.png" alt="">tv</li>'
		                    +'<li><img src="https://img.moolban.com/unsafe/images/web_ver/siseol/view/toilet.png" alt="">화장실</li>'
		                    +'<li><img src="https://img.moolban.com/unsafe/images/web_ver/siseol/view/life_jacket.png" alt="">구명조끼</li>'
		                    +'<li><img src="https://img.moolban.com/unsafe/images/web_ver/siseol/view/life_belt.png" alt="">구명밧줄</li>'
		                    +'<li><img src="https://img.moolban.com/unsafe/images/web_ver/siseol/view/karaoke.png" alt="">노래방</li>'
		                    +'<li><img src="https://img.moolban.com/unsafe/images/web_ver/siseol/view/heating.png" alt="">난방</li>'
		                    +'<li><img src="https://img.moolban.com/unsafe/images/web_ver/siseol/view/fridge.png" alt="">냉장고</li>'
		                    +'<li><img src="https://img.moolban.com/unsafe/images/web_ver/siseol/view/fire_exting.png" alt="">소화기</li>'
		                    +'<li><img src="https://img.moolban.com/unsafe/images/web_ver/siseol/view/fan.png" alt="">선풍기</li>'
		                    +'<li><img src="https://img.moolban.com/unsafe/images/web_ver/siseol/view/cctv.png" alt="">CCTV</li>'
		                    +'<li><img src="https://img.moolban.com/unsafe/images/web_ver/siseol/view/canopy.png" alt="">그늘막</li>'
		                +'</ol>'
		    			+'<!-- fixed bottom read_only-->'
		    			+'<div class="view_fixed 11">'
		    			+'    <section>'
		    			+'    	<a id="select_item" class="sel_reserve_goods" data-type="1" data-saledate="2019-05-02">상품선택</a>'
		    			+'    </section>'
		    			+'</div>'

		                +'</div>'
		        +'</section>'
		        +'<!-- fixed bottom read_only-->'
		        +'<!--// fixed bottom -->'
		    +'</div>'
		    +'<!--// view_contents -->'
		    +'<!--// 예약정보 -->'
		+'</div>'
			+'						</div>'
			+'					</div>'
			+'				</div>'
			+'							</br>'
		},
		product_info:()=>{
			return '<section class="proslide">'
		    +'<div class="view_profile clearfix">'
	        +'<!-- 업체 이미지 슬라이드 -->'
	        +'<div class="profile_slide swiper-container swiper-container-horizontal">'
	            +'<div class="profile_list company_image_list swiper-wrapper" data-key="1318"'
	            +'style="transform: translate3d(-600px, 0px, 0px); transition-duration: 0ms;">'
	            +'<img src="https://img.moolban.com/unsafe/1280x720/filters:no_upscale():'
	            +'watermark(https://img.moolban.com/unsafe/watermark_130.png,-10,-10,10)/company/images/1318/af2b95fc6eea50fda0de094acb1b4b26.jpg" '
	            +'alt="" class="swiper-slide swiper-slide-duplicate swiper-slide-prev"'
	                    +'data-swiper-slide-index="8" style="width: 600px;">'
	                +'<img src="https://img.moolban.com/unsafe/1280x720/filters:no_upscale():'
	                +'watermark(https://img.moolban.com/unsafe/watermark_130.png,-10,-10,10)/company/images/1318/c12fb45a983cf918fb53132849d3e287.jpg"' 
	                +'alt=""class="swiper-slide swiper-slide-active" data-swiper-slide-index="0"'
	                    +'style="width: 600px;">'
	                +'<img src="https://img.moolban.com/unsafe/1280x720/filters:no_upscale():watermark(https://img.moolban.com/unsafe/'
	                +'watermark_130.png,-10,-10,10)/company/images/1318/830e44576c40c50003a98ea8ac811699.jpg" alt="" class="swiper-slide swiper-slide-next"'
	                +'data-swiper-slide-index="1"'
	                    +'style="width: 600px;">'
	                +'<img src="https://img.moolban.com/unsafe/1280x720/filters:no_upscale():watermark(https://img.moolban.com/unsafe/'
	                +'watermark_130.png,-10,-10,10)/company/images/1318/c12fb45a983cf918fb53132849d3e287.jpg" alt="" class="swiper-slide swiper-slide-duplicate'
	                +' swiper-slide-duplicate-active"'
	                    +'data-swiper-slide-index="0" style="width: 600px;"></div>'
	            +'<div class="slide_arrow_btn">'
	                +'<a class="arrow_prev swiper-button-prev" tabindex="0" role="button" aria-label="Previous slide">'
	                +'<img src="https://img.moolban.com/unsafe/asset/www/responsive/img/basic/profile_slide_prev.png" alt=""></a>'
	                +'<a class="arrow_next swiper-button-next" tabindex="0" role="button" aria-label="Next slide">'
	                +'<img src="https://img.moolban.com/unsafe/asset/www/responsive/img/basic/profile_slide_next.png" alt=""></a>'
	            +'</div>'
	            +'<div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-bullets-dynamic" style="width: 80px;">'
	            +'<span class="swiper-pagination-bullet swiper-pagination-bullet-active swiper-pagination-bullet-active-main" tabindex="0" role="button" aria-label="Go'
	            +' to slide 1" style="left: 32px;"></span>'
	                    +'<span class="swiper-pagination-bullet swiper-pagination-bullet-active-next"'
	                    +'tabindex="0" role="button" aria-label="Go to slide 2" style="left: 32px;"></span><span class="swiper-pagination-bullet'
	                    +' swiper-pagination-bullet-active-next-next" tabindex="0" role="button" aria-label="Go to slide 3" style="left: 32px;"></span>'
	                +'<span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 4" style="left: 32px;"></span>'
	                +'<span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 5" style="left: 32px;"></span>'
	                +'<span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 6" style="left: 32px;"></span>'
	                    +'<span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 7" style="left: 32px;"></span>'
	                        +'<span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 8" style="left: 32px;"></span>'
	                        +'<span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 9" style="left: 32px;"></span></div>'
	            +'<!--// 업체 이미지 슬라이드 -->'
	            +'<div class="like_share_btn">'
	                +'<a class="like_btn" href="/mypage/login?redirect=%2Fcompany%2F1318"></a>'
	                +'<a class="share_btn shareMore"></a>'
	            +'</div>'
	            +'<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>'
	        +'<!-- 업체 정보 -->'
	        +'<div class="profile_info">'
	            +'<dl class="clearfix">'
	                +'<dt>'
	                    +'<span class="ico_pic ico_pic1">종일</span>'
	                                        +'<em>보험</em>'
	                                        +'<strong>경원7호</strong>'
	                +'</dt>'
	                +'<dd>인천 중구 축항대로 142</dd>'
	                +'<dd class="call_dd"><a class="login_tel" data-key="1318"></a></dd>'
	            +'</dl>'
	            +'<div class="like_call_link">'
	                +'<a class="like_link" href="/mypage/login?redirect=%2Fcompany%2F1318"></a>'
	                +'<a class="call_link mblock login_tel" data-key="1318"></a>'
	            +'</div>'
	        +'</div>'
	        +'<!--// 업체 정보 -->'
	    +'</div>'
	    +'<!--// view_profile -->'
	+'</section>'
		}
		
};