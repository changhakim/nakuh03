"use strict";
var auth = auth || {};
auth =(()=>{
	let homecss,admincss,rescss,instacss;
	let init =()=>{
		onCreate();
	};
	let onCreate =()=>{
		setContentView();
	};
	let setContentView =()=>{
		$.when(
				$.getScript($.js()+'/component/jwcompo.js'),
				$.getScript($.js()+'/aquagram/auth.js'),
				$.getScript($.js()+'/aquagram/arti.js'),
				$.getScript($.js()+'/reservation/eunyeong.js')
			).done(()=>{
				navcss();
				css();
				feed_main();
				nav();
				arti.arti_upload();

				
				

			});  
		
		
	};
	let feed_main =()=>{

		$(jwcompo.left_content()).appendTo('#leftbar_content');
		$(jwcompo.right_nav()).appendTo('#right_nav_cont');
		$(jwcompo.my_navbar()).appendTo('#my_navbar');
		$('#leftbar_content').empty();
		let feeditem ='';
		let mid = 'gigi123';
		$.ajax({
			url: $.ctx()+'/arti/feed/'+mid,
			type: 'get',
			data: JSON.stringify(mid),
			dataType: 'json',
			contentType: 'application/json; charset=UTF-8;',
			success: d=>{
				$('#my_fv').text(d.nav.artCount);
				$('#followerid').text(d.nav.followerCount);
				$('#folloingid').text(d.nav.folloingCount);
				//$('#userimg').attr('src','resources/img/aquagram/profilephoto/'+d.nav.profilephoto);
				$('#navmypage').html('<img id="userimg" class="img-circle" alt="Cinque Terre" src="resources/img/aquagram/profilephoto/'+d.nav.profilephoto+'" '
						+'style="width: 50px; height: 50px; position: center;"/>'+d.nav.mid+'</div></li>');
				$.each(d.ffeed,(i,j)=>{
					feeditem += '<div class="wow fadeInDown" style="border-radius: 6px; ">'
					+'					    <div class="panel panel-default">'
					+'						        <div class="heading">'
					+' 			<div class="item" id="'+j.artnum+'" style="height: 58px; border: none; margin: 8px;"> ' 
					+'  	<img class="img-circle" alt="Cinque Terre" src="resources/img/aquagram/profilephoto/'+j.profilephoto+'" style="width: 50px; height: 50px; position: center"><div><h5 style="top:-49px; left: 60px">'+j.mname+'</h5></div>	'							  							
					+' 			</div>'
					+'						        <div class="body">'
					+'						         <img src="resources/img/aquagram/articles/'+j.artphoto+'" style="display: block; margin: 0px auto; width: 100%;">'
					+'						        </div>'
					+'						        <div class="footer">'
					+'						         <div id="comments_1">'
					+'						         	<!-- Right-aligned -->'
					+'									<div class="media">'
					+'									  <div class="media-body" style="text-align: left; padding-top: 15px; padding-bottom: 15px;">'
					+'									   	<div> <h4 class="media-heading" style="margin-left: 5px">'+j.content+'</h4></div>'
					+'									   	<div> <h6 class="media-heading" style="margin-left: 5px">53 like</h6></div>'
					+'									  </div>'
					+'									</div>'
					+'						         </div>'
					+'						          <div id="feedcomments_nav">'
					+'    <ul class="nav bs-docs-sidenav" id="feedcomments" style="-ms-overflow-style: none; overflow:scroll; width:100%; height:130px; border-top: none;">'
					+'						<li>'
					+'						</li> '
					+'          </ul>'						
					+'							    	</div>'
					+'							    	<div class="input-group" >'
					+'									     <input style="border: none; background:transparent;" id="upcomment" type="text" class="form-control" name="upcomment" placeholder="댓글입력">'
					+'									      <span style="border: none; background: transparent;"class="input-group-addon"><p>게시</p></span>   '
					+'									    </div>'
					+'									</div>'
					+'									</div>'
					+'									</div>'
					+'						        </div>';
					
				});
				$(feeditem).appendTo('#leftbar_content');

	/*			

				+'     		<div id="item" style="top: 5px;">'
				+'                  <div class="list-group-item list-group-item-action" id="comments_my" style="height: 58px; border: none; display: -webkit-box;"> '
				+'                <img class="img-circle" alt="Cinque Terre" src="resources/img/aquagram/profilephoto/'+d.als.profilephoto+'" style="width: 40px; height: 40px; position: center"/>'
				+'                 <div style="display: -webkit-box;"><h5 style="top:0px; left: 7px; font-weight:bold;">'+d.als.mid+'</h5><div><h6 id="contag" style="left: 15px; width: 90%;">'+d.als.content+'</h6></div></div>'
				+'                   <div style="font-size: 5px; left: 105px; top: 8px;">'+d.als.artdate+'</div>'
				+'                </div> '
				+'              </div> '
*/
				
			},
			error: e=>{
				alert('에러!');
			}
	
			
		});

		
		//중앙 네비 따라오는 옵션
		$(document).ready(function() {
			  $('.navbar').affix({
			    offset: {
			      top: 510
			    }
			  });
			});
		//우측 네비 따라오는 옵션
		$(document).ready(function() {
			  $('#right_nav_cont').affix({
			    offset: {
			      top: 510
			    }
			  });
			});
		
		$('#my_fv').attr('style','cursor:pointer').click(()=>{
			arti.init();
		});
		
		
		
		
		
		
	};
	let feed_coms =()=>{
		
		
	};
	
	let navcss = ()=>{
		$(document).ready(function() {
			 $('#comnav').affix({
			  offset: {
			  top: 1
			  }
			 });
		});
	};
	
	
	
	
	let nav =()=>{
		/*	General 네비게이션 	*/
		$('#home').click(e=>{
		
		
		$('.rescss').remove();
		$('.instacss').remove();
		$(homecss).appendTo('head');
		location.assign('/web');
		app.init();
	    
		});
		$('#ocean').click(e=>{
		e.preventDefault();
		$('.instacss').remove();
		$(rescss).appendTo('head');
		eunyeong.init('ocean')
		});
		
		$('#river').click(()=>{
		
		});
		
		$('#hotel').click(()=>{
		
		});
		$('#aquagram').click(e=>{
		e.preventDefault();
		$('.rescss').remove();
		$(instacss).appendTo('head');
		jeonguk.init();
		});
		$('#mypage').click(()=>{
			
		});
		$('#logout').click(()=>{
			
		});
	}
	let css = ()=>{
		/* head css  */
		 homecss = '<link class="homecss" rel="stylesheet" type="text/css" href="/web/resources/css/home/homemain.css" />'
			+'<link class="homecss" href="https://fonts.googleapis.com/css?family=Raleway:300,400,600,600i,700" rel="stylesheet">'
			+'<link class="homecss" href="/web/resources/css/home/style.css" rel="stylesheet">';
		 rescss ='<link class="rescss" rel="stylesheet" href="/web/resources/css/reservation/common.css">'
			 +'<link class="rescss" rel="stylesheet" href="/web/resources/css/reservation/main.css">'
			 +'<link class="rescss" rel="stylesheet" href="/web/resources/css/reservation/navbar.css">';
		 instacss =' <link class="instacss" rel="stylesheet" type="text/css" href="/web/resources/css/aquagram/style.css">'
			 +'  <link class="instacss" rel="stylesheet" type="text/css" href="/web/resources/css/aquagram/animate.css">'
			 +'  <link class="instacss" rel="stylesheet" type="text/css" href="/web/resources/css/aquagram/structure.css">'
			 +'  <link class="instacss" rel="stylesheet" type="text/css" href="/web/resources/css/aquagram/docs.min.css"> '
			 +'  <link class="instacss" rel="stylesheet" type="text/css" href="/web/resources/css/aquagram/default_css.css">';
			 
			 
	}

	
	
	
	return {init:init }
	
})();