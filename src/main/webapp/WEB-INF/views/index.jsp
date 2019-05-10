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
 
</head>
<body>

<!-- datepicker -->
<input type="text" id="datepicker2">
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


 <div id="wrapper" class="container-fluid"> 
<div class="container-fluid">
 <!-- login -->	
 <div id="loginbar"><button id="loginbtn">Login</button></div>
	<!-- main_video -->
    <div class="hero-section">
   <section class="vdosection">
  <div class="overlay-wcs"></div>
  <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
    <source src="/web/resources/video/nakuh_main.mp4" type="video/mp4">
  </video>
  <div class="container h-100">
    <div class="d-flex h-100 text-center align-items-center">
      <div class="w-100 text-white">
      </div>
    </div>
  </div>
</section>
    </div>
    <div class="space-medium">
        <div class="container">
            <div class="row">
                <div class="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8
               col-sm-12 col-xs-12">
                    <div class="mb60 text-center section-title">
                        <!-- section title start-->
                        <h1>Our Services</h1>                   
                    </div>
                    <!-- /.section title start--->
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div class="service-block text-center">
                        <!-- service block -->
                        <div class="service-img ">
                            <!-- service img -->
                            <a id="ocean" href="#"><img style="height: 350px;width: 300px;"src="/web/resources/img/homeimg/main/oceanimg.JPG" class="img-responsive moveimg"> </a>
                        </div>
                        <!-- service img -->
                        <div class="service-content">
                            <!-- service content -->
                            <h2><a href="#" class="title">선상</a></h2>                           
                        </div>
                        <!-- service content -->
                    </div>
                    <!-- /.service block -->
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div class="service-block text-center">
                        <!-- service block -->
                        <div class="service-img">
                            <!-- service img -->
                            <a id="river" href="#"><img style="height: 350px;width: 300px;"src="/web/resources/img/homeimg/main/freshwaterimg.JPG" class="img-responsive moveimg"> </a>
                        </div>
                        <!-- service img -->
                        <div class="service-content">
                            <!-- service content -->
                            <h2><a href="#" class="title">민물</a></h2>              
                        </div>
                        <!-- service content -->
                    </div>
                    <!-- /.service block -->
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div class="service-block text-center">
                        <!-- service block -->
                        <div class="service-img">
                            <!-- service img -->
                            <a id="hotel" href="#"><img style="height: 350px;width: 300px;"src="/web/resources/img/homeimg/main/hotelimg.JPG" class="img-responsive moveimg"> </a>
                        </div>
                        <!-- service img -->
                        <div class="service-content">
                            <!-- service content -->
                            <h2><a href="#" class="title">숙박</a></h2>                           
                        </div>
                        <!-- service content ----->
                    </div>
                    <!-- /.service block -->
                </div>
            </div>
        </div>
    </div>
    <div class="row">
		  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
		   <section class="vdosection">
		  <div id="aqua" class="overlay-wcs"></div>
		  <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
		    <source src="/web/resources/video/aquarium.mp4" type="video/mp4">
		  </video>
		  <div class="container h-100">
		    <div class="d-flex h-100 text-center align-items-center">
		      <div class="w-100 text-white">
		      </div>
		    </div>
		  </div>
		</section>
		</div>    
    </div>
    <div class="space-medium bg-light">
        <div class="container">
            <div class="row">
                <div class="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8
               col-sm-12 col-xs-12">
                    <div class="mb60 text-center section-title">
                        <!-- section title start-->
                        <h1>our recent projects</h1>
                    </div>
                    <!-- /.section title start-->
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div class="project-img mb30">
                        <a href="service-detail.html" class="imghover"><img src="/web/resources/img/homeimg/project-pic-1.jpg" class="img-responsive" alt="Interior Design Website Templates Free Download"></a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div class="project-img mb30">
                        <a href="service-detail.html" class="imghover"><img src="/web/resources/img/homeimg/project-pic-2.jpg" class="img-responsive" alt="Interior Design Website Templates Free Download"></a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div class="project-img mb30">
                        <a href="service-detail.html" class="imghover"><img src="/web/resources/img/homeimg/project-pic-3.jpg" class="img-responsive" alt="Interior Design Website Templates Free Download"></a>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div class="project-img mb30">
                        <a href="service-detail.html" class="imghover"><img src="/web/resources/img/homeimg/project-pic-4.jpg" class="img-responsive" alt="Interior Design Website Templates Free Download"></a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div class="project-img mb30">
                        <a href="service-detail.html" class="imghover"><img src="/web/resources/img/homeimg/project-pic-5.jpg" class="img-responsive" alt="Interior Design Website Templates Free Download"></a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div class="project-img mb30">
                        <a href="service-detail.html" class="imghover"><img src="/web/resources/img/homeimg/project-pic-6.jpg" class="img-responsive" alt="Interior Design Website Templates Free Download"></a>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center  "> <a href="service-detail.html" class="btn btn-default">view all projects</a> </div>
            </div>
        </div>
    </div>
    <div class="space-medium">
        <div class="container">
            <div class="row">
                <div class="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
                    <div class="section-title mb60 text-center">
                        <!-- section title start-->
                        <h1>Why choose uS?</h1>
                    </div>
                    <!-- /.section title start-->
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <div class="outline pinside30 text-center mb30">
                        <div class="mb30"> <img src="/web/resources/img/homeimg/creative-ideas.png" class="" alt="Interior Design Website Templates Free Download"> </div>
                        <div class="">
                            <h2>Creative Ideas </h2>
                            <p>Phasellus hendrerit mauris vitae odio suscip max pius donec aconsequat.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <div class="outline pinside30 text-center mb30">
                        <div class="mb30"> <img src="/web/resources/img/homeimg/modern-technology.png" class="" alt="Interior Design Website Templates Free Download"> </div>
                        <div class="">
                            <h2>Modern technology</h2>
                            <p>Morbi convallis nisl at commodo tem orut libero utnisi lacinia limana.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <div class="outline pinside30 text-center mb30">
                        <div class="mb30"> <img src="/web/resources/img/homeimg/design-creativity.png" class="" alt="Interior Design Website Templates Free Download"> </div>
                        <div class="">
                            <h2>Design &amp; Creativity</h2>
                            <p>Sednunc sagit phasellus mitortor con equat hendrerit maue odi.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="space-medium">
        <div class="container">
            <div class="row">
                <div class="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
                    <div class="section-title mb40 text-center">
                        <!-- section title start-->
                        <h1>Our Client Says</h1>
                    </div>
                    <!-- /.section title start-->
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="testimonial-block bg-light pinside30">
                        <div class="quote-left"> <i class="fa fa-quote-left"></i> </div>
                        <div class="testimonial-content">
                            <p>"They are talented &amp; creative. I have never seen a better designer on the this market. ecommended to all! If you need to build powerfully,contact them immediately ARCHONE design have worked on two stunning projects at our School, We were fortunate to have his vision breathe new life into a small, bare and underused courtyard in the centre of our brand new building. Within 4weeks and his team had transformed a poor quality space into a rich and vibrant courtyard garden, now enjoyed all day, every day by staff and pupils. Both projects have been well managed, within budget and worth every penny of our investment.We greatly look forward to working with him and his team again in the future.”</p>
                            <div class="testimonial-info"> <span class="testimonial-name">- Ruby Burns</span> <span class="testimonial-meta">Market research analyst</span> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="footer">
        <!-- footer-->
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div class="footer-widget">
                        <button type="button" class="btn btn-default btn-lg" id="adminbtn">관리자</button></div>
                        <p>Phasellus hendrerit mauris vitae odio suscip pimus donec consequat cursus viverra varius natoque penatibus magnis dis parturient.</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div class="footer-widget">
                        <!-- social block -->
                        <h3 class="widget-title">Our Address</h3>
                        <p>1309 Roosevelt Wilson Lane
                            <br> Colton, CA 92324</p>
                    </div>
                    <!-- /.social block -->
                </div>
                <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <div class="footer-widget">
                        <!-- newsletter block -->
                        <h3 class="widget-title">e-mail Us</h3>
                        <p>info@yourwebsitedomain.com</p>
                    </div>
                    <!-- newsletter block -->
                </div>
                <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <div class="footer-widget">
                        <!-- newsletter block -->
                        <h3 class="widget-title">Call us</h3>
                        <p>180-874-5234</p>
                        <p>180-752-3957</p>
                    </div>
                    <!-- newsletter block -->
                </div>
            </div>
        </div>
    
    <!-- /.footer-->
    <div class="tiny-footer">
        <!-- tiny footer block --->
        <div class="container">
            <div class="row">
                <div class="col-lg-7 col-md-7 col-sm-7 col-xs-12">
                    <div class="copyright-content">
                       Shared by <i class="fa fa-love"></i><a href="https://bootstrapthemes.co">BootstrapThemes</a>
                    </div>
                </div>
                <div class="col-lg-5 col-md-5 col-sm-5 col-xs-12">
                    <div class="footer-social">
                        <ul class="listnone">
                            <li> <a href="#"><i class="fa fa-facebook-square"></i></a> </li>
                            <li> <a href="#"><i class="fa fa-twitter-square"></i></a> </li>
                            <li> <a href="#"><i class="fa fa-google-plus-square"></i></a> </li>
                            <li> <a href="#"><i class="fa fa-youtube-square"></i></a> </li>
                            <li> <a href="#"><i class="fa fa-pinterest-square"></i></a> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
 </div>

<!-- adminjs -->
<script src="/web/resources/js/admin/vendor/bootstrap-notify.js"></script>
<script src="/web/resources/js/admin/vendor/jquery.counterup.js"></script>
<script src="/web/resources/js/admin/vendor/jquery-ui.js"></script>
<!-- reservationjs -->
<script src="/web/resources/js/reservation/vendor/owl.carousel.min.js"></script>
<script src="/web/resources/js/reservation/vendor/main.js"></script>
<script src="/web/resources/js/reservation/vendor/swiper.min.js"></script>
<script src="/web/resources/js/homemain/nav.js"></script>
<script src="/web/resources/js/reservation/vendor/handleCounter.js"></script>
<!-- newfeedjs -->
<script type="text/javascript" src="/web/resources/js/aquagram/vendor/wow.min.js"></script>      
<script type="text/javascript" src="/web/resources/js/aquagram/vendor/respond.min.js"></script>    
<script type="text/javascript" src="/web/resources/js/aquagram/vendor/html5shiv.min.js"></script>	
<script type="text/javascript" src="/web/resources/js/aquagram/vendor/custom.js"></script>     
<!-- instanavjs -->
<script type="text/javascript" src="/web/resources/js/aquagram/vendor/instanav.js"></script>
<script type="text/javascript" src="/web/resources/js/aquagram/vendor/instafeed.js"></script> <!-- instafeed.js 추후 미사용시 삭제. -->
<!-- instajs -->
<!-- Stickyjs ---->
<script type="text/javascript" src="/web/resources/js/aquagram/vendor/Sticky-kit.js"></script>
<!-- commonjs -->
<script src="<%=application.getContextPath()%>/resources/js/app.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/router.js"></script>
<!-- changhajs -->
<script src="<%=application.getContextPath()%>/resources/js/admin/changha.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/admin/adminres.js"></script>   
<!-- eunyeongjs -->
<script src="<%=application.getContextPath()%>/resources/js/component/eycompo.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/reservation/eunyeong.js"></script>  
<!-- jeongukjs -->
<script src="<%=application.getContextPath()%>/resources/js/component/jwcompo.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/aquagram/jeonguk.js"></script>  
<!-- 낚어안녕하세요 -->
</body>

<script>
app.init('<%= application.getContextPath() %>');
app.kakao();
</script>
</html>