<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
 <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
 <script src="//developers.kakao.com/sdk/js/kakao.min.js"></script>
 <link rel="shortcut icon" href="/web/resources/favicon/favicon.ico">
 <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAY5vEXIghqf7_mEdWcG9kqcEeDOpaLixY&callback=initMap"></script>
 <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js"></script>
 <link id="aaadfa" href="/web/resources/css/home/responsive_basic.css" rel="stylesheet">

</head>
<body>
 <!--  modal --->
<div id="id01" class="modal">
  <div class="modal-content animate" action="#">
    <div class="imgcontainer raw">
      <span class="close1" title="Close Modal">&times;</span>
    </div>
	
    <div class="container-fluid">
      <div id="change_login_form">
      <label for="uname"><b>Username</b></label>
      <input type="text" placeholder="Enter UserID" name="userid" id="userid" required>
      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="password" id="password" required>
      <button id="login" type="submit">Login</button>  
      
      <div>
      <a id="kakao_login_btn">
      <img src="//mud-kage.kakao.com/14/dn/btqbjxsO6vP/KPiGpdnsubSq3a0PHEGUK1/o.jpg" alt="" width="100%"></a>  
      </div>
      <label>
        <input type="checkbox" checked="checked" name="remember"> Remember me
      </label>
      </div>
    </div>
  </div>
</div>

<!-- modal-2 -->
<div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog" id="change_modal_2">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Modal Header</h4>
      </div>
      <div class="modal-body">
        <p>Some text in the modal.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>
<!-- modal-2 end-->
<div class="header_area ">
	<header>
		<section>
			<a href="/" class="header_logo off active">
				<img src="https://img.moolban.com/unsafe/asset/www/responsive/img/basic/header_logo.png" alt="">
			</a>
			<a class="location_setting pos_addr_text btn_geo_popup">서울특별시 금천구 가산동 459-11</a>

			<div class="header_menu">
				<div class="search_header_box search_box pblock">
					<input type="text" id="search_input_box" placeholder="검색어를 입력해주세요.">
					<a class="search_btn"><img src="https://img.moolban.com/unsafe/asset/www/responsive/img/basic/search_ico04.png" alt=""></a>
				</div>

				<a href="/category/list?sea_type=1" class="menu_txt pblock ocean">바다</a>
				<a href="/category/list?sea_type=2" class="menu_txt pblock river">민물</a>
				<a href="/search/home" class="menu_txt pblock hotel">숙박</a>
				<a href="/reserve/live_search" class="menu_txt pblock newsfeed">뉴스피드</a>
				<a href="/talk/list" class="menu_txt pblock">반반톡</a>
<!-- 				<a class="menu_btn">
					<img src="https://img.moolban.com/unsafe/asset/www/responsive/img/basic/header_menu.png" alt="">
				</a> -->
			</div>
		</section>
	</header>
</div>
<div class="wrap_area" id="wrapper">
<div class="main_area container bg_mt" style="padding-top: 58px;">


   		<section class="vdosection">
  			<div class="overlay-wcs"></div>
  		<video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
    		<source src="/web/resources/video/nakuh_main.mp4" type="video/mp4">
  		</video>
		</section>
	<div class="main_hot_area">
		<section>
			<a data-url="/realtime/sea"><p class="hot_title">실시간 조황 <span>HOT</span></p></a>
			<div class="hot_list">
				<div class="vTicker" style="overflow: hidden; position: relative; height: 40px;">
					<ul style="position: absolute; margin: 0px; padding: 0px; top: 0px;">
<li style="margin: 0px; padding: 0px; height: 40px;"><a data-url="/realtime/list?sea_type=1&amp;sif_key=7&amp;scm_key=2&amp;srch_from=20190410&amp;srch_to=20190510&amp;fish_name=광어">서해남부 : <strong>광어</strong></a></li><li style="margin: 0px; padding: 0px; height: 40px;"><a data-url="/realtime/list?sea_type=1&amp;sif_key=25&amp;scm_key=1&amp;srch_from=20190410&amp;srch_to=20190510&amp;fish_name=노래미">서해중부 : <strong>노래미</strong></a></li><li style="margin: 0px; padding: 0px; height: 40px;"><a data-url="/realtime/list?sea_type=2&amp;sif_key=43&amp;scm_key=2&amp;srch_from=20190410&amp;srch_to=20190510&amp;fish_name=향어">강원도 : <strong>향어</strong></a></li><li style="margin: 0px; padding: 0px; height: 40px;"><a data-url="/realtime/list?sea_type=2&amp;sif_key=44&amp;scm_key=4&amp;srch_from=20190410&amp;srch_to=20190510&amp;fish_name=잉어">충청남도 : <strong>잉어</strong></a></li><li style="margin: 0px; padding: 0px; height: 40px;"><a data-url="/realtime/list?sea_type=2&amp;sif_key=58&amp;scm_key=1&amp;srch_from=20190410&amp;srch_to=20190510&amp;fish_name=배스">경기도 : <strong>배스</strong></a></li><li style="margin: 0px; padding: 0px; height: 40px;"><a data-url="/realtime/list?sea_type=1&amp;sif_key=8&amp;scm_key=4&amp;srch_from=20190410&amp;srch_to=20190510&amp;fish_name=가자미">동해남부 : <strong>가자미</strong></a></li><li style="margin: 0px; padding: 0px; height: 40px;"><a data-url="/realtime/list?sea_type=2&amp;sif_key=50&amp;scm_key=3&amp;srch_from=20190410&amp;srch_to=20190510&amp;fish_name=메기">충청북도 : <strong>메기</strong></a></li><li style="margin: 0px; padding: 0px; height: 40px;"><a data-url="/realtime/list?sea_type=2&amp;sif_key=87&amp;scm_key=8&amp;srch_from=20190410&amp;srch_to=20190510&amp;fish_name=감성돔">경상남도 : <strong>감성돔</strong></a></li><li style="margin: 0px; padding: 0px; height: 40px;"><a data-url="/realtime/list?sea_type=1&amp;sif_key=14&amp;scm_key=5&amp;srch_from=20190410&amp;srch_to=20190510&amp;fish_name=볼락">남해동부 : <strong>볼락</strong></a></li><li style="margin: 0px; padding: 0px; height: 40px;"><a data-url="/realtime/list?sea_type=2&amp;sif_key=40&amp;scm_key=6&amp;srch_from=20190410&amp;srch_to=20190510&amp;fish_name=붕어">전라남도 : <strong>붕어</strong></a></li><li style="margin: 0px; padding: 0px; height: 40px; opacity: 1; display: none;"><a data-url="/realtime/list?sea_type=2&amp;sif_key=40&amp;scm_key=6&amp;srch_from=20190410&amp;srch_to=20190510&amp;fish_name=붕어">전라남도 : <strong>붕어</strong></a></li><li style="margin: 0px; padding: 0px; height: 40px; opacity: 1; display: none;"><a data-url="/realtime/list?sea_type=2&amp;sif_key=40&amp;scm_key=6&amp;srch_from=20190410&amp;srch_to=20190510&amp;fish_name=붕어">전라남도 : <strong>붕어</strong></a></li><li style="margin: 0px; padding: 0px; height: 40px; opacity: 1; display: none;"><a data-url="/realtime/list?sea_type=2&amp;sif_key=40&amp;scm_key=6&amp;srch_from=20190410&amp;srch_to=20190510&amp;fish_name=붕어">전라남도 : <strong>붕어</strong></a></li><li style="margin: 0px; padding: 0px; height: 40px; opacity: 1; display: none;"><a data-url="/realtime/list?sea_type=2&amp;sif_key=40&amp;scm_key=6&amp;srch_from=20190410&amp;srch_to=20190510&amp;fish_name=붕어">전라남도 : <strong>붕어</strong></a></li><li style="margin: 0px; padding: 0px; height: 40px; opacity: 1; display: none;"><a data-url="/realtime/list?sea_type=2&amp;sif_key=40&amp;scm_key=6&amp;srch_from=20190410&amp;srch_to=20190510&amp;fish_name=붕어">전라남도 : <strong>붕어</strong></a></li><li style="margin: 0px; padding: 0px; height: 40px;"><a data-url="/realtime/list?sea_type=1&amp;sif_key=23&amp;scm_key=8&amp;srch_from=20190410&amp;srch_to=20190510&amp;fish_name=긴꼬리벵에돔">대마도 : <strong>긴꼬리벵에돔</strong></a></li></ul>
				</div>
			</div>
		</section>
	</div>

    	<div class="main_icon_area">
<section>
             <a class="guide" data-url="/category/list?sea_type=1&amp;cc_key=1&amp;cci_key=1" data-id="1" data-sub="1" data-count="0"><img src="https://img.moolban.com/unsafe/images/icon/A/time.png?rand=1556514130">시간·체험<span>바다</span></a>
             <a class="guide ocean" data-url="/category/list?sea_type=1&amp;cc_key=2&amp;cci_key=" data-id="1" data-sub="2" data-count="1"><img src="https://img.moolban.com/unsafe/images/icon/A/seahole.png?rand=1556514130">바다낚시<span>바다</span></a>
             <a class="guide river" data-url="/category/list?sea_type=2&amp;cc_key=12&amp;cci_key=" data-id="2" data-sub="12" data-count="2"><img src="https://img.moolban.com/unsafe/images/icon/A/bass.png?rand=1556514130">민물낚시<span>민물</span></a>
             <a class="guide hotel" data-url="/category/list?sea_type=2&amp;cc_key=6&amp;cci_key=" data-id="2" data-sub="6" data-count="3"><img src="https://img.moolban.com/unsafe/images/icon/A/minhole.png?rand=1556514130">숙박<span>민물</span></a>
             <a class="guide newsfeed" data-url="/category/list?sea_type=2&amp;cc_key=11&amp;cci_key=" data-id="2" data-sub="11" data-count="4"><img src="https://img.moolban.com/unsafe/images/icon/A/cafe.png?rand=1556514130">뉴스피드<span>민물</span></a>
             <a class="guide" data-url="/category/list?sea_type=1&amp;cc_key=1&amp;cci_key=13" data-id="1" data-sub="1" data-count="5"><img src="https://img.moolban.com/unsafe/images/icon/A/alltime.png?rand=1556514130">종일·생활 <span>바다</span></a>
             <a class="guide" data-url="/category/list?sea_type=1&amp;cc_key=1&amp;cci_key=14" data-id="1" data-sub="1" data-count="7"><img src="https://img.moolban.com/unsafe/images/icon/A/bream.png?rand=1556514130">돔<span>바다</span></a>
             <a class="guide" data-url="/category/list?sea_type=1&amp;cc_key=1&amp;cci_key=15" data-id="1" data-sub="1" data-count="6"><img src="https://img.moolban.com/unsafe/images/icon/A/hairtail.png?rand=1556514130">갈치<span>바다</span></a>
             <a class="guide" data-url="/category/list?sea_type=1&amp;cc_key=1&amp;cci_key=16" data-id="1" data-sub="1" data-count="8"><img src="https://img.moolban.com/unsafe/images/icon/A/pro.png?rand=1556514130">전문<span>바다</span></a>
             <a class="guide" data-url="/category/list?sea_type=1&amp;cc_key=3&amp;cci_key=" data-id="1" data-sub="3" data-count="9"><img src="https://img.moolban.com/unsafe/images/icon/A/stone.png?rand=1556514130">갯바위<span>바다</span></a>
             <a class="guide" data-url="/category/list?sea_type=1&amp;cc_key=13&amp;cci_key=" data-id="1" data-sub="13" data-count="10"><img src="https://img.moolban.com/unsafe/images/icon/A/yacha.png?rand=1556514130">요트 <span>바다</span></a>
             <a class="guide" data-url="/category/list?sea_type=1&amp;cc_key=4&amp;cci_key=" data-id="1" data-sub="4" data-count="11"><img src="https://img.moolban.com/unsafe/images/icon/A/port.png?rand=1556514130">항구정보<span>바다</span></a>
             <a class="guide" data-url="/category/list?sea_type=2&amp;cc_key=5&amp;cci_key=" data-id="2" data-sub="5" data-count="12"><img src="https://img.moolban.com/unsafe/images/icon/A/coast.png?rand=1556514130">연안<span>민물</span></a>
             <a class="guide" data-url="/category/list?sea_type=2&amp;cc_key=8&amp;cci_key=" data-id="2" data-sub="8" data-count="13"><img src="https://img.moolban.com/unsafe/images/icon/A/noji.png?rand=1556514130">노지<span>민물</span></a>
             <a class="guide" data-url="/guide" data-id="" data-sub="" data-count="14"><img src="https://img.moolban.com/unsafe/images/icon/A/guide.png?rand=1556514130">통합가이드</a>
             <a class="main_ico"></a>
             <a class="main_ico"></a>
             <a class="main_ico"></a>
		</section>
	</div>
    
    <!-- 기획전 -->
<div class="main_plan_area list_sty_box">
    <section>
        <p class="list_title">기획전<!--<a>모두보기</a>--></p>
        <div class="swiper-container swiper-container-horizontal">
            <div class="swiper-wrapper" style="transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;">
                                    <a data-url="/home/plan_view?seq_key=74" class="swiper-slide swiper-slide-active" data-key="74" data-count="0" style="width: 474.5px; margin-right: 15px;"><img src="https://img.moolban.com/unsafe/images/promotion/9c097b401ac3e964843ec3666c2534a9.jpg?rand=1556514130" alt=""></a>
                                    <a data-url="/home/plan_view?seq_key=67" class="swiper-slide swiper-slide-next" data-key="67" data-count="1" style="width: 474.5px; margin-right: 15px;"><img src="https://img.moolban.com/unsafe/images/promotion/dc992d27905dd97c44c06a979bdd6c69.jpg?rand=1556514130" alt=""></a>
                                    <a data-url="/home/plan_view?seq_key=64" class="swiper-slide" data-key="64" data-count="2" style="width: 474.5px; margin-right: 15px;"><img src="https://img.moolban.com/unsafe/images/promotion/7f8581faa3654cc840c8c946b271d5b5.jpg?rand=1556514130" alt=""></a>
                                    <a data-url="/home/plan_view?seq_key=68" class="swiper-slide" data-key="68" data-count="3" style="width: 474.5px; margin-right: 15px;"><img src="https://img.moolban.com/unsafe/images/promotion/ba3b990c345e0916de4a6e5b71bcc4a4.jpg?rand=1556514130" alt=""></a>
                                    <a data-url="/home/plan_view?seq_key=69" class="swiper-slide" data-key="69" data-count="4" style="width: 474.5px; margin-right: 15px;"><img src="https://img.moolban.com/unsafe/images/promotion/075b7f9ec541801b680e9b94ca2caf2f.jpg?rand=1556514130" alt=""></a>
                                    <a data-url="/home/plan_view?seq_key=65" class="swiper-slide" data-key="65" data-count="5" style="width: 474.5px; margin-right: 15px;"><img src="https://img.moolban.com/unsafe/images/promotion/8d546c9af908c8c4ad7b38b3812fe965.jpg?rand=1556514130" alt=""></a>
                                    <a data-url="/home/plan_view?seq_key=66" class="swiper-slide" data-key="66" data-count="6" style="width: 474.5px; margin-right: 15px;"><img src="https://img.moolban.com/unsafe/images/promotion/adba7d9940984c53dfcb15f46c25e8b0.jpg?rand=1556514130" alt=""></a>
                                    <a data-url="/home/plan_view?seq_key=62" class="swiper-slide" data-key="62" data-count="7" style="width: 474.5px; margin-right: 15px;"><img src="https://img.moolban.com/unsafe/images/promotion/5080c439f4f6f85c0c989990b600f492.jpg?rand=1556514130" alt=""></a>
                            </div>
        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
        <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"><span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 1"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 2"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 3"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 4"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 5"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 6"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 7"></span></div>
    </section>
</div>

<div class="main_plan_banner list_sty_box">
    <p class="list_title">기획전<!--<a>모두보기</a>--></p>
    <div class="inner">
                <a href="/home/plan_view?seq_key=74"><img src="https://img.moolban.com/unsafe/images/promotion/9c097b401ac3e964843ec3666c2534a9.jpg?rand=1556514130" alt=""></a>
                <a href="/home/plan_view?seq_key=67"><img src="https://img.moolban.com/unsafe/images/promotion/dc992d27905dd97c44c06a979bdd6c69.jpg?rand=1556514130" alt=""></a>
                <a href="/home/plan_view?seq_key=64"><img src="https://img.moolban.com/unsafe/images/promotion/7f8581faa3654cc840c8c946b271d5b5.jpg?rand=1556514130" alt=""></a>
                <a href="/home/plan_view?seq_key=68"><img src="https://img.moolban.com/unsafe/images/promotion/ba3b990c345e0916de4a6e5b71bcc4a4.jpg?rand=1556514130" alt=""></a>
                <a href="/home/plan_view?seq_key=69"><img src="https://img.moolban.com/unsafe/images/promotion/075b7f9ec541801b680e9b94ca2caf2f.jpg?rand=1556514130" alt=""></a>
                <a href="/home/plan_view?seq_key=65"><img src="https://img.moolban.com/unsafe/images/promotion/8d546c9af908c8c4ad7b38b3812fe965.jpg?rand=1556514130" alt=""></a>
                <a href="/home/plan_view?seq_key=66"><img src="https://img.moolban.com/unsafe/images/promotion/adba7d9940984c53dfcb15f46c25e8b0.jpg?rand=1556514130" alt=""></a>
                <a href="/home/plan_view?seq_key=62"><img src="https://img.moolban.com/unsafe/images/promotion/5080c439f4f6f85c0c989990b600f492.jpg?rand=1556514130" alt=""></a>
            </div>
</div>
<section>
 
</section>

	<footer class="main_footer_area">
		<section>
			<div class="logo_drop clearfix">
				<a class="footer_logo"><img src="https://img.moolban.com/unsafe/asset/www/responsive/img/basic/footer_logo.png" alt=""></a>
				<a class="footer_drop">사업자정보</a>
			</div>
			<div class="adress_box">
				<address>
					<p><span>(주)아이스앤브이</span><span>대표이사 : 박종언</span><span>주소 : 서울시 금천구 가산디지털1로 186 704호 ICE&amp;V</span></p>
					<p><a href="tel:1599-6975">고객센터 : 1599-6975</a><a href="mailto:help@moolban.com">일반문의 : help@moolban.com</a></p>
                    <p><span>업무제휴 관련 문의 : <a href="mailto:marketing@moolban.com">marketing@moolban.com</a></span></p>
					<p><span>사업자 등록번호 : 617-81-81455</span><span>통신판매번호 : 제2012-서울금천-0485호</span></p>

				</address>
			</div>
			<div class="agree_box">
				<a href="/about">서비스 소개</a>
				<a href="/more/policy_info/personal">개인정보처리방침</a>
				<a href="/more/policy_info/agreement">서비스이용약관</a>
				<a href="/more/policy_info/youth_protection">청소년보호정책</a>
			</div>
			<p class="copyright">Copyright ICE&amp;V Corp. All Rights Reserved.</p>
		</section>
	</footer>
</div>
</div>
<!-- homejs -->	
<script src="${js}/homemain/swiper.min.js"></script>
<script src="${js}/homemain/mainhome.js"></script>
<script src="${js}/homemain/pub.js"></script>
<script src="${js}/homemain/geolocation.js"></script>
<!-- adminjs -->
<script src="${js}/admin/vendor/bootstrap-notify.js"></script>
<script src="${js}/admin/vendor/jquery.counterup.js"></script>
<script src="${js}/admin/vendor/jquery-ui.js"></script>
<!-- reservationjs -->
<script src="${js}/reservation/vendor/owl.carousel.min.js"></script>
<script src="${js}/reservation/vendor/main.js"></script>
<script src="${js}/homemain/nav.js"></script>
<script src="${js}/reservation/vendor/handleCounter.js"></script>
<!-- newfeedjs -->
<script src="${js}/aquagram/vendor/wow.min.js"></script>      
<script src="${js}/aquagram/vendor/respond.min.js"></script>    
<script src="${js}/aquagram/vendor/html5shiv.min.js"></script>	
<script src="${js}/aquagram/vendor/custom.js"></script>     
<!-- instanavjs -->
<script src="${js}/aquagram/vendor/instanav.js"></script>
<script src="${js}/aquagram/vendor/instafeed.js"></script> <!-- instafeed.js 추후 미사용시 삭제. -->
<!-- instajs -->
<!-- Stickyjs ---->
<script src="${js}/aquagram/vendor/Sticky-kit.js"></script>
<!-- commonjs -->
<<<<<<< HEAD
<script src="${js}/app.js"></script>
<script src="${js}/router.js"></script>
=======
<script src="<%=application.getContextPath()%>/resources/js/app.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/router.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/common/fileupload.js"></script>
>>>>>>> jeonguk
<!-- changhajs -->
<script src="${js}/admin/changha.js"></script>
<script src="${js}/admin/adminres.js"></script>   
<!-- eunyeongjs -->
<script src="${js}/component/eycompo.js"></script>
<script src="${js}/reservation/eunyeong.js"></script>  
<!-- jeongukjs -->
<script src="${js}/component/jwcompo.js"></script>
<script src="${js}/aquagram/jeonguk.js"></script>  
<!-- 낚어안녕하세요 -->
</body>

<script>
app.init('<%= application.getContextPath() %>');
app.kakao();

</script>
</html>