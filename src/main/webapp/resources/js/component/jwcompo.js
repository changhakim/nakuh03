/*
 *  
 *	@작성자 : 배정욱 gt1854@gmail.com
 *	@작성일자 : 2019. 4. 22. 오후 2:59:24
 *	@파일명 : compo.js
 *	@기능 : component
 *
 *
 *  commonnav :: General navi 
 *  
 *  j_main :: #test 에 들어갈 base form
 *  left_content :: newfeed content's
 *  right_nav :: right_navibar 
 *  my_navbar :: 중앙에 위치한 navibar
 *  insta_base :: 내 게시물 목록(사진리스트)
 *  photo_form :: photo 폼 
 *  photo_feed_css_hover :: CSS 추가 
 *  modal_css :: 모달 CSS
 *  upload_modal :: 업로드 기능 모달에 들어갈 폼
 * 	img_upload_from :: 이미지 /파일 업로드 컴포
 * 
 * 
 * */


var jwcompo = jwcompo || {};
jwcompo = {
	commonnav :()=>{
			return '<nav class="navbar navbar-inverse navbar-default" role="navigation" id="comnav" data-spy="affix" data-offset-top="525" style="width: 100%; height:50px; background-color: #fafafa; border: none; border-bottom: 1px solid; border-color: #ddd; border-radius: 0px; margin-bottom:0px;z-index:8888;">	  '
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
		j_main : ()=>{
			return '   <div id="aq_main" style="width: 100%; heigh: 500px;" >'
			+'    		<img class="img-rounded" alt="" src="resources/img/aquagram/mountains.jpg" style="width: 100%; height: 500px; position: center"/>'
			+'   </div>'
			+'   <div class="wrap">'
			+'   	<div>'
			+'   		<nav class="navbar navbar-inverse" role="navigation" id="my_navbar" data-spy="affix" data-offset-top="525" style="width: 100%; height:75px; background-color: #fafafa; border: none; border-bottom: 1px solid; border-color: #ddd; border-radius: 0px;">	  '
			+'   		</nav>'
			+'   	</div>'
			+'   </div>'
			+'   <div id="donw_content" class="container" style="margin: auto; top:75px ">'
			+'   	<div id="leftbar_content" class="col-md-8"></div>'
			+'   	<div id="right_nav" class="col-md-4" role="complementary">	'
			+'   	 	<nav class="bs-docs-sidebar hidden-print hidden-xs hidden-sm affix-top" id="right_nav_cont" data-spy="affix" data-offset-top="525" >'
			+'   	 	</nav>'
			+'   	</div> '
			+'   </div>'
	
		},	

		left_content :()=>{
			return '		            <div class="wow fadeInDown" style="border-radius: 6px; ">'
			+'					    <div class="panel panel-default text-center">'
			+'						        <div class="heading">'
			+'						          <h1>Basic</h1>'
			+'						        </div>'
			+'						        <div class="body">'
			+'						         <img src="resources/img/aquagram/test_img.jpg" style="display: block; margin: 0px auto; width: 100%;">'
			+'						        </div>'
			+'						        <div class="footer">'
			+'						         <div id="comments_1">'
			+'						         	<!-- Right-aligned -->'
			+'									<div class="media">'
			+'									  <div class="media-body" style="text-align: left;">'
			+'									   	<div> <h4 class="media-heading" style="margin-left: 5px">John Doe</h4></div>'
			+'									   	<div> <h6 class="media-heading" style="margin-left: 5px">53 like</h6></div>'
			+'									  </div>'
			+'									</div>'
			+'						         </div>'
			+'						          <h4>per month</h4>'
			+'							    	</div>							'
			+'							    	<div class="input-group" >'
			+'									     <input style="border: none; background:transparent;" id="comment" type="text" class="form-control" name="comment" placeholder="댓글입력">'
			+'									      <span style="border: none; background: transparent;"class="input-group-addon"><p>게시</p></span>   '
			+'									    </div>'
			+'									</div>'
			+'						        </div>'
			+'		          <div class="wow fadeInDown" style="border-radius: 6px; ">'
			+'					    <div class="panel panel-default text-center">'
			+'						        <div class="heading">'
			+'						          <h1>Basic</h1>'
			+'						        </div>'
			+'						        <div class="body">'
			+'						         <img src="resources/img/aquagram/test_img.jpg" style="display: block; margin: 0px auto; width: 100%;">'
			+'						        </div>'
			+'						        <div class="footer">'
			+'						         <div id="comments_1">'
			+'						         	<!-- Right-aligned -->'
			+'									<div class="media">'
			+'									  <div class="media-body" style="text-align: left;">'
			+'									   	<div> <h4 class="media-heading" style="margin-left: 5px">John Doe</h4></div>'
			+'									   	<div> <h6 class="media-heading" style="margin-left: 5px">53 like</h6></div>'
			+'									  </div>'
			+'									</div>'
			+'						         </div>'
			+'						          <h4>per month</h4>'
			+'							    	</div>							'
			+'							    	<div class="input-group" >'
			+'									      <input style="border: none; background:transparent;" id="comment" type="text" class="form-control" name="comment" placeholder="댓글입력">'
			+'									      <span style="border: none; background: transparent;"class="input-group-addon"><p>게시</p></span>   '
			+'									    </div>'
			+'									</div>'
			+'						        </div>'
			+'		         <div class="wow fadeInDown" style="border-radius: 6px; ">'
			+'					    <div class="panel panel-default text-center">'
			+'						        <div class="heading">'
			+'						          <h1>Basic</h1>'
			+'						        </div>'
			+'						        <div class="body">'
			+'						         <img src="resources/img/aquagram/test_img.jpg" style="display: block; margin: 0px auto; width: 100%;">'
			+'						        </div>'
			+'						        <div class="footer">'
			+'						         <div id="comments_1">'
			+'						         	<!-- Right-aligned -->'
			+'									<div class="media">'
			+'									  <div class="media-body" style="text-align: left;">'
			+'									   	<div> <h4 class="media-heading" style="margin-left: 5px">John Doe</h4></div>'
			+'									   	<div> <h6 class="media-heading" style="margin-left: 5px">53 like</h6></div>'
			+'									  </div>'
			+'									</div>'
			+'						         </div>'
			+'						          <h4>per month</h4>'
			+'							    	</div>							'
			+'							    	<div class="input-group" >'
			+'	    							     <input style="border: none; background:transparent;" id="comment" type="text" class="form-control" name="comment" placeholder="댓글입력">'
			+'									      <span style="border: none; background: transparent;"class="input-group-addon"><p>게시</p></span>   '
			+'									    </div>'
			+'									</div>'
			+'						        </div>'
			+'						<div class="wow fadeInDown" style="border-radius: 6px; ">'
			+'					    <div class="panel panel-default text-center">'
			+'						        <div class="heading">'
			+'						          <h1>Basic</h1>'
			+'						        </div>'
			+'						        <div class="body">'
			+'						         <img src="resources/img/aquagram/test_img.jpg" style="display: block; margin: 0px auto; width: 100%;">'
			+'						        </div>'
			+'						        <div class="footer">'
			+'						         <div id="comments_1">'
			+'						         	<!-- Right-aligned -->'
			+'									<div class="media">'
			+'									  <div class="media-body" style="text-align: left;">'
			+'									   	<div> <h4 class="media-heading" style="margin-left: 5px">John Doe</h4></div>'
			+'									   	<div> <h6 class="media-heading" style="margin-left: 5px">53 like</h6></div>'
			+'									  </div>'
			+'									</div>'
			+'						         </div>'
			+'						          <h4>per month</h4>'
			+'							    	</div>							'
			+'							    	<div class="input-group" >'
			+'	    							     <input style="border: none; background:transparent;" id="comment" type="text" class="form-control" name="comment" placeholder="댓글입력">'
			+'									      <span style="border: none; background: transparent;"class="input-group-addon"><p>게시</p></span>   '
			+'									    </div>'
			+'									</div>'
			+'						        </div>'
			+'				<div class="wow fadeInDown" style="border-radius: 6px; ">'
			+'					    <div class="panel panel-default text-center">'
			+'						        <div class="heading">'
			+'						          <h1>Basic</h1>'
			+'						        </div>'
			+'						        <div class="body">'
			+'						         <img src="resources/img/aquagram/test_img.jpg" style="display: block; margin: 0px auto; width: 100%;">'
			+'						        </div>'
			+'						        <div class="footer">'
			+'						         <div id="comments_1">'
			+'						         	<!-- Right-aligned -->'
			+'									<div class="media">'
			+'									  <div class="media-body" style="text-align: left;">'
			+'									   	<div> <h4 class="media-heading" style="margin-left: 5px">John Doe</h4></div>'
			+'									   	<div> <h6 class="media-heading" style="margin-left: 5px">53 like</h6></div>'
			+'									  </div>'
			+'									</div>'
			+'						         </div>'
			+'						          <h4>per month</h4>'
			+'							    	</div>							'
			+'							    	<div class="input-group" >'
			+'	    							     <input style="border: none; background:transparent;" id="comment" type="text" class="form-control" name="comment" placeholder="댓글입력">'
			+'									      <span style="border: none; background: transparent;"class="input-group-addon"><p>게시</p></span>   '
			+'									    </div>'
			+'									</div>'
			+'						        </div>'
		},
		
		right_nav :()=>{
			return '<ul class="nav bs-docs-sidenav nav-stacked" style="width:300px; height:68px; padding:10px; border-radius: 6px;">'
			+'				 <li>'
			+'				 <div class="my" style="babackground-color: #fafafa">'
			+'				        <div id="item">'
			+'				        	<div class="group-item list-group-item-action" style="height: 58px; border: none; "> '
			+'							  <img class="img-circle" alt="Cinque Terre" src="resources/img/aquagram/test_img.jpg" style="width: 50px; height: 50px; position: center"/>'
			+'								 <div ><h5 style="top:-49px; left: 60px; font-weight:bold;" >mpick04</h5></div>'
			+'								  	<div style="top:-55px; left: 60px; font-size: 5px; display:-webkit-inline-box;">JeongUkBae <div style="right: 0">더보기</div></div>'
			+'								</div> '
			+'							</div> '
			+'							</div> '
			+'		'
			+'				 </li>'
			+'				</ul>'
			+'		<ul class="nav bs-docs-sidenav" style="overflow:scroll; width:300px; height:210px; padding:10px; background-color: white; border-radius: 6px;  border:1px solid; border-color: #ddd;">'
			+'				 <li>      '
			+'				 	<div class="users_list">'
			+'				 		<h5> 새소식 </h5>'
			+'				        <div id="item">'
			+'				        	<div class="list-group-item list-group-item-action" style="height: 58px; border: none;"> '
			+'							  <img class="img-circle" alt="Cinque Terre" src="resources/img/aquagram/test_img.jpg" style="width: 50px; height: 50px; position: center"/>' 
			+'								 <div ><h5 style="top:-49px; left: 60px">mpick04</h5></div>'
			+'								  	<div style="top:-55px; left: 60px; font-size: 7px;">24시간전</div>'
			+'								</div> '
			+'							</div> '
			+'				        <div id="item">'
			+'				        	<div class="list-group-item list-group-item-action" style="height: 58px; border: none;"> '
			+'							  <img class="img-circle" alt="Cinque Terre" src="resources/img/aquagram/test_img.jpg" style="width: 50px; height: 50px; position: center"/> '
			+'								 <div ><h5 style="top:-49px; left: 60px">mpick04</h5></div>'
			+'								  	<div style="top:-55px; left: 60px; font-size: 7px;">24시간전</div>'
			+'								</div> '
			+'							</div> '
			+'				        <div id="item">'
			+'				        	<div class="list-group-item list-group-item-action" style="height: 58px; border: none;"> '
			+'							  <img class="img-circle" alt="Cinque Terre" src="resources/img/aquagram/test_img.jpg" style="width: 50px; height: 50px; position: center"/>' 
			+'								 <div ><h5 style="top:-49px; left: 60px">mpick04</h5></div>'
			+'								  	<div style="top:-55px; left: 60px; font-size: 7px;">24시간전</div>'
			+'								</div> '
			+'							</div> '
			+'				        <div id="item">'
			+'				        	<div class="list-group-item list-group-item-action" style="height: 58px; border: none;"> '
			+'							  <img class="img-circle" alt="Cinque Terre" src="resources/img/aquagram/test_img.jpg" style="width: 50px; height: 50px; position: center"/>' 
			+'								 <div ><h5 style="top:-49px; left: 60px">mpick04</h5></div>'
			+'								  	<div style="top:-55px; left: 60px; font-size: 7px;">24시간전</div>'
			+'								</div> '
			+'							</div> 	'
			+'				        <div id="item">'
			+'				        	<div class="list-group-item list-group-item-action" style="height: 58px; border: none;"> '
			+'							  <img class="img-circle" alt="Cinque Terre" src="resources/img/aquagram/test_img.jpg" style="width: 50px; height: 50px; position: center"/>' 
			+'								 <div ><h5 style="top:-49px; left: 60px">mpick04</h5></div>'
			+'								  	<div style="top:-55px; left: 60px; font-size: 7px;">24시간전</div>'
			+'								</div> '
			+'							</div> 														'
			+'					</div>'
			+'				</li>'
			+'		      </ul>'
			+'		'
			+'		      <ul class="nav bs-docs-sidenav" style="overflow:scroll; width:300px; height:150px; padding:10px; background-color: white; border-radius: 6px; border:1px solid; border-color: #ddd;">'
			+'				 <li>      '
			+'				 	<div class="users_list">'
			+'				 		<h5> 새로운친구 </h5>'
			+'				        <div id="item">'
			+'				        	<div class="list-group-item list-group-item-action" style="height: 58px; border: none;"> '
			+'							  <img class="img-circle" alt="Cinque Terre" src="resources/img/aquagram/test_img.jpg" style="width: 50px; height: 50px; position: center"/>'
			+'								 <div ><h5 style="top:-49px; left: 60px">mpick04</h5></div>'
			+'								  	<div style="top:-55px; left: 60px; font-size: 7px;">24시간전</div>'
			+'								</div> '
			+'							</div> '
			+'				        <div id="item">'
			+'				        	<div class="list-group-item list-group-item-action" style="height: 58px; border: none;"> '
			+'							  <img class="img-circle" alt="Cinque Terre" src="resources/img/aquagram/test_img.jpg" style="width: 50px; height: 50px; position: center"/> '
			+'								 <div ><h5 style="top:-49px; left: 60px">mpick04</h5></div>'
			+'								  	<div style="top:-55px; left: 60px; font-size: 7px;">24시간전</div>'
			+'								</div> '
			+'							</div> '
			+'				        <div id="item">'
			+'				        	<div class="list-group-item list-group-item-action" style="height: 58px; border: none;"> '
			+'							  <img class="img-circle" alt="Cinque Terre" src="resources/img/aquagram/test_img.jpg" style="width: 50px; height: 50px; position: center"/> '
			+'								 <div ><h5 style="top:-49px; left: 60px">mpick04</h5></div>'
			+'								  	<div style="top:-55px; left: 60px; font-size: 7px;">24시간전</div>'
			+'								</div> '
			+'							</div> '
			+'				        <div id="item">'
			+'				        	<div class="list-group-item list-group-item-action" style="height: 58px; border: none;"> '
			+'							 <img class="img-circle" alt="Cinque Terre" src="resources/img/aquagram/test_img.jpg" style="width: 50px; height: 50px; position: center"/> '
			+'								 <div ><h5 style="top:-49px; left: 60px">mpick04</h5></div>'
			+'								  	<div style="top:-55px; left: 60px; font-size: 7px;">24시간전</div>'
			+'								</div> '
			+'							</div> 	'
			+'				        <div id="item">'
			+'				        	<div class="list-group-item list-group-item-action" style="height: 58px; border: none;"> '
			+'							  <img class="img-circle" alt="Cinque Terre" src="resources/img/aquagram/test_img.jpg" style="width: 50px; height: 50px; position: center"/> '
			+'								 <div ><h5 style="top:-49px; left: 60px">mpick04</h5></div>'
			+'								  	<div style="top:-55px; left: 60px; font-size: 7px;">24시간전</div>'
			+'								</div> '
			+'							</div> 														'
			+'					</div>'
			+'				</li>'
			+'		      </ul>'
		},
		my_navbar : ()=>{
			return '<ul class="nav navbar-nav">'
			+'    <li><div id="navmypage" style="top:11px; left:10px; margin-right: 70px; margin-left: 35px;">'
			+' <img id="userimg" class="img-circle" alt="Cinque Terre" src="resources/img/aquagram/test_img.jpg" style="width: 50px; height: 50px; position: center;"/>mpick04</div></li>'
			+'    <li style="position: center; top:15px; margin-right: 25px;">'
			+'		<div>'
			+'			<div> 등급</div>'
			+'			<div > 브론즈</div>'
			+'		 </div>'
			+'		</li>'
			+'    <li style="position: center; top:15px; margin-right: 25px;">'
			+'		<div>'
			+'			<div style="position: center;"> 어획수</div>'
			+'			<div> 30 마리</div>'
			+'		 </div>'
			+'		</li>'
			+'    <li style="position: center; top:15px; margin-right: 25px;">'
			+'		<div>'
			+'			<div> 뉴스피드</div>'
			+'			<div id="feed_fv"> 52 </div>'
			+'		 </div>'
			+'		</li>'
			+'    <li style="position: center; top:15px; margin-right: 25px;">'
			+'		<div>'
			+'			<div> 내 게시물</div>'
			+'			<div id="my_fv"> 4 </div>'
			+'		 </div>'
			+'		</li>'
			+'    <li style="position: center; top:15px;  margin-right: 25px;">'
			+'		<div>'
			+'			<div> 팔로워</div>'
			+'			<div id="followerid"> 52 </div>'
			+'		 </div>'
			+'		</li>'
			+'    <li style="position: center; top:15px;  margin-right: 25px;">'
			+'		<div>'
			+'			<div> 팔로잉</div>'
			+'			<div id="folloingid"> 43 </div>'
			+'		 </div>'
			+'		</li>'
			+'    <li style="position: center; top:15px; margin-right: 25px;">'
			+'		<div>'
			+'			<div> 프로필 편집</div>'
			+'		 </div>'
			+'		</li>'
			+'    <li style="position: center; top:15px; margin-right: 25px;">'
			+'		<div>'
			+'			<div id="art_upload">등록</div>'
			+'		 </div>'
			+'		</li>'
			+'    <li style="position: center; top:15px; margin-right: 25px;">'
			+'		<div>'
			+'			<div>삭제</div>'
			+'		 </div>'
			+'		</li>'
			/*+'    <li style="position: center"><div style="top:10px; left:40px;">feed view</div><div> 64</div></li>'
			+'    <li style="position: center"><div style="top:10px; left:40px;">Article count</div><div> 4</div></li>'
			+'    <li style="position: center"><div style="top:10px; left:40px;">Articles</div><div> 4</div></li>'
			+'    <li style="position: center"><div style="top:10px; left:40px;">Follower</div><div> 64</div></li>'
			+'    <li style="position: center"><div style="top:10px; left:40px;">Following</div><div> 39</div></li>'
			+'    <li style="position: center"><div style="top:10px; left:40px;">프로필 편집</div><div> </div></li>'
			+'    <li style="position: center"><div style="top:10px; left:40px;"><span class="glyphicon glyphicon-use" aria-hidden="true"></span></div></li>'
			+'    '*/
			+'  </ul>'
			
		},
		insta_base : ()=>{
			return '<div class="instagram-wrap">'
			+'          <div class="container">'
			+'              <div class="row">'
			+'                  <div class="col-xs-12" style="margin: inherit;">'
			+'                      <div class="instagram-content">'
			+'                          <div class="row photos-wrap">'
			+'                          <!-- Instafeed target div -->'
			+'                          <div id="instafeed">'
			+'							</div>'			
			+'                          <!-- The following HTML will be our template inside instafeed -->'
			+'                          </div>'
			+'                      </div>'
			+'                  </div>'
			+'              </div>'
			+'          </div>'
			+'      </div>'
		},
		
		photo_form :()=>{
			return '                     <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">'
			+'                              <div class="photo-box">'
			+'                                  <div class="image-wrap">'
			+'                                      <img src="resources/img/aquagram/test_img.jpg">'
			+'                                      <div class="likes">309 Likes</div>'
			+'                                  </div>'
			+'                                  <div class="description">'
			+'                                      Fantastic Architecture #architecture #testing'
			+'                                      <div class="date">September 16, 2014</div>'
			+'                                  </div>'
			+'                              </div>'
			+'                          </div>   <!--  target end -->'
			
		},
	
		photo_feed_css_hover :()=>{
			return '<style>'
			+'    @import url("https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i");'
				+'    body {'
				+'    }'
				+'    '
				+'    /* remove bootstrap gutter*/'
				+'    .row.no-gutter {'
				  +'    margin-left: 0;'
				  +'    margin-right: 0;'
				+'    }'
				+'    '
				+'    .row.no-gutter [class*="col-"]:not(:first-child),'
				+'    .row.no-gutter [class*="col-"]:not(:last-child) {'
				  +'    padding-right: 0;'
				  +'    padding-left: 0;'
				+'    }'
				+'    '
				+'    '
				+'    /* the good stuff */'
				+'    body {'
				+'    }'
				+'    '
				+'    .img-featured-container {'
				  +'    overflow: hidden;'
				  +'    position: relative;'
				+'    }'
				+'    '
				+'    .img-featured-container img {'
				  +'    width: 100%;'
				+'      padding: 5px; '
				+'    }'
				+'    '
				+'    .img-featured-container .img-backdrop {'
				  +'    background: linear-gradient(135deg, rgba(38, 163, 255, 0.85), rgba(83, 201, 179, 0.85));'
				  +'    margin: 0;'
				  +'    padding: 0;'
				  +'    width: 100%;'
				  +'    height: 100%;'
				  +'    position: absolute;'
				  +'    z-index: 1;'
				  +'    opacity: 0;'
				  +'    transition: all 0.3s ease;'
				+'    }'
				+'    '
				+'    .img-featured-container:hover > .img-backdrop {'
				  +'    opacity: 1;'
				+'    }'
				+'    '
				+'    /* center text horizontally and vertically on image hover */'
				+'    .img-featured-container .description-container {'
				  +'    color: #fff;'
				  +'    font-size: 13px;'
				  +'    line-height: 1.2;'
				  +'    padding: 0 30px;'
				  +'    text-align: center;'
				  +'    line-height: 20px;'
				  +'    width: 100%;'
				  +'    position: absolute;'
				  +'    top: 50%;'
				  +'    left: 50%;'
				  +'    transform: translate(-50%, -50%);'
				  +'    transform-style: preserve-3d;'
				  +'    z-index: 2;'
				  +'    opacity: 0;'
				  +'    transition: all .2s ease;'
				+'    }'
				+'    '
				+'    .img-featured-container .description-container .fa-instagram {'
				  +'    font-size: 40px;'
				+'    }'
				+'    '
				+'    .img-featured-container .description-container p {'
				  +'    font-weight: 300;'
				  +'    margin-bottom: 0;'
				+'    }'
				+'    '
				+'    .img-featured-container:hover .description-container {'
				  +'    opacity: 1;'
				+'    }'
				+'    '
				+'    .img-featured-container .description-container .caption {'
				  +'    display: none;'
				  +'    margin-bottom: 10px;'
				+'    }'
				+'    '
				+'    .img-featured-container .description-container .likes,'
				+'    .img-featured-container .description-container .comments {'
				  +'    margin: 0 5px;'
				+'    }'
				+'    '
				+'    /* load more button */'
				+'    #btn-instafeed-load {'
				  +'    color: #fff;'
				  +'    background: #26a3ff;'
				  +'    font-size: 16px;'
				  +'    margin: 20px auto;'
				  +'    padding: 8px 40px;'
				  +'    display: block;'
				  +'    border: none;'
				+'    }'
				+'    '
				+'    /* media queries  */'
				+'    @media screen and (min-width:768px) {'
				  +'    .img-featured-container .description-container .caption {'
				    +'    display: block;'
				  +'    }'
				+'    }'
				+' 				'
				+' .feeds {'
				+'    width: 100%;'
				+'   height: 100%;;'
				+' }'
				+'  .feeds img {'
				+' 	height: 293px;'
				+'   width: 293px;'
				+' }'
				+'</style>'
			
		},
		
		modal_css :()=>{
			return '<style>'	
			+'  .modal {'
			+'    display: none; /* Hidden by default */'
			+'    position: fixed; /* Stay in place */'
			+'    z-index: 1; /* Sit on top */'
			+'    left: 0;'
			+'    top: 0;'
			+'    width: 100%; /* Full width */'
			+'    height: 100%; /* Full height */'
			+'    overflow: auto; /* Enable scroll if needed */'
			+'    background-color: rgb(0,0,0); /* Fallback color */'
			+'    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */'
			+'  }'
			+'  '
			+'  /* Modal Content/Box */'
			+'  .modal-content {'
			+'    background-color: #fefefe;'
			+'    margin: 15% auto; /* 15% from the top and centered */'
			+'    padding: 20px;'
			+'    border: 1px solid #888;'
			+'    width: 80%; /* Could be more or less, depending on screen size */'
			+'  }'
			+'  '
			+'  /* The Close Button */'
			+'  .close {'
			+'    color: #aaa;'
			+'    float: right;'
			+'    font-size: 28px;'
			+'    font-weight: bold;'
			+'  }'
			+'  '
			+'  .close:hover,'
			+'  .close:focus {'
			+'    color: black;'
			+'    text-decoration: none;'
			+'    cursor: pointer;'
			+'}'
			+'</style>'
		},
		
		upload_modal :()=>{
			return ' <div class="modal fade" id="upload_modal" role="dialog">'
			+'    <div class="modal-dialog">'
			+'      <!-- Modal content-->'
			+'      <div class="modal-content">'
			+'        <div class="modal-header">'
			+'          <button type="button" class="close" data-dismiss="modal">&times;</button>'
			+'          <h4 class="modal-title">Modal Header</h4>'
			+'        </div>'
			+'        <div class="modal-body">'
			+'          <p>Some text in the modal.</p>'
			+'        </div>'
			+'        <div class="modal-footer">'
			+'          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'
			+'        </div>'
			+'      </div>'
			+'    </div>'
			+'  </div>'
 		},
 		
 		img_upload_from :()=>{
 			return '<div class="row">'
	            +		'<div id="img_upload_div" class="col-md-5  mb-5">'
	            +		'<form id="img_upload_frm"  encType="multipart/form-data">'
	            +		'<label for="cc-expiration">이미지  등록(파일 업로드)</label>'
	            +		'<input type="file" id="photo"  name="photo" class="form-control" id="photo" data-width=“300” data-height=“300" placeholder=""  required="">'
	            +	'<div class="invalid-feedback">'
	            +			'</div>'
/*	            +			'<input type="submit"  id="img_upload_btn">'*/
	            +		'</form>'
	            +	'</div>'
	            +	'<div class="col-md-5 mb-5">'
	            +	'<form id="img_drag_frm"   encType="multipart/form-data">'
	            +		'<label for="cc-cvv">이미지  등록(드레그&드랍)</label>'
	            +		'<input type="file" class="form-control"  id="cc-cvv" placeholder="" required="">'
	            +	'<div class="invalid-feedback">'
	            +		'</div>'
/*	            +		'<input type="submit" id="img_drag_btn">'*/
	            +		'</form>'
	            +		'</div>'
	            +	'</div>'
	 			
 			
 		}
	
	};
	
