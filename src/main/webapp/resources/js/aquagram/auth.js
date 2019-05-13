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
				defualt_loader();
                alert('userid::::'+sessionStorage.getItem('userid'));
                alert('photo::::'+sessionStorage.getItem('userpo'));
				
				

			});  
		
		
	};
	let defualt_loader=()=>{
		$('#right_nav_cont').empty();
		$('#my_navbar').empty();
		$(jwcompo.left_content()).appendTo('#leftbar_content');
		$(jwcompo.right_nav()).appendTo('#right_nav_cont');
		$(jwcompo.my_navbar()).appendTo('#my_navbar');
		$('#leftbar_content').empty();
		css();
		nav();
		arti.arti_img_upload();
		feed_infinitemove();
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
		$('#my_fv').attr('style','cursor:pointer').click(function(e){
			e.preventDefault();
			arti.init();
		});
		//$('leftbar_content').empty();

	};
	
	let right_nav_lander=()=>{
		
		
	};
	
	let feed_infinitemove =()=>{

		let isEnd = false;

		$(function(){
			$(document).ready(function(){
				$(window).data('ajaxready',true).scroll(function(){
					if($(window).data('ajaxready')==false) return;
					if($(window).scrollTop() + 300 >=$(document).height()-$(window).height()){
						$(document).ready(function(){
							$('div#loadmoreajaxloader').show();
							$(window).data('ajaxready',false);
							feed_fetchList();
						});
					}		
				})
				
			});
			feed_fetchList(); 
		});
		
		let feed_fetchList=()=>{
	        if(isEnd == true){
	        	return;
	        }
	        let startNo = $("#leftbar_content").children('#data_wow').last().data("no") || 0;
			let mid ='gigi123';
			let page = 0;
			let url = $.ctx()+'/myfeed/'+mid;
			let data = { mid:mid,
					startRow:startNo,
					pageSize:2};
			let userd={};
			$.ajax({
				url: $.ctx()+'/arti/feed/'+data.mid,
				type: 'post',
				data: JSON.stringify(data),
				dataType: 'json',
				contentType: 'application/json; charset=UTF-8;',
				success: d=>{
					
					  let length = d.ffeed.length;
					  //alert(length);
	                  if( length < 1 ){
	                	  isEnd = true;
	
	                  }
	                  if(d){
	                	  $('div#loadmoreajaxloader').hide();
	                	
	                	  $.each(d.ffeed,(i, j)=>{
	                		  feed_renderList(j); 
	                		  userd[i] = {userid: j.mid,
	                				  		userphoto:j.userpo,
	                				  		artcount:j.artCount,
	                				  		followerCount:j.followerCount,
	                				  		folloingCount:j.folloingCount};
	 	                	 if(j.mid !== ''){
		                		 mynavd(userd);
	 	                	 }
		                  	});


	                  }else{
	                	  $('div#loadmoreajaxloader').html();
	                  }
	                  $(window).data('ajaxready', true);

				},
				error: e=>{
					alert('에러!');
				}
					
			});
			
		};
		
	};
	
	let mynavd =(x)=>{
		
		 $('#my_fv').text(x[0].artcount);
		  $('#followerid').text(x[0].followerCount);
		  $('#folloingid').text(x[0].folloingCount);
			//$('#userimg').attr('src','resources/img/aquagram/profilephoto/'+d.nav.profilephoto);
		  $('#navmypage').html('<img id="userimg" class="img-circle" alt="Cinque Terre" src="resources/img/aquagram/profilephoto/'+x[0].userphoto+'" '
					+'style="width: 50px; height: 50px; position: center;"/>'+x[0].userid+'</div></li>');
		
	};
/*	tagar[i] = tagcut.split(' /');
	alert('??'+tagar[i]);
	if(tagar[i] == ''){
		return;		
	}*/
	let settags = (x)=>{
		alert('settag:: 진입');
		let settag ='';
		let tagcut = x.tag.split('.');
			$.each(tagcut,(i,j)=>{
				settag += '<a>'+tagcut[i]+'</a>';
				
			});	
			$(settag).appendTo('#tags');
		
	
	};

	let feed_renderList =(x)=>{

				let feeditem = '<div class="wow fadeInDown" id="data_wow" style="border-radius: 6px;" data-no="'+x.rownum+'">'
					+'					    <div class="panel panel-default">'
					+'						        <div class="heading">'
					+' 			<div class="item" id="'+x.artnum+'" style="height: 58px; border: none; margin: 8px;"> ' 
					+'  	<img class="img-circle" alt="Cinque Terre" src="resources/img/aquagram/profilephoto/'+x.profilephoto+'" style="width: 50px; height: 50px; position: center"><div><h5 style="top:-49px; left: 60px">'+x.mname+'</h5></div>	'							  							
					+' 			</div>'
					+'						        <div class="body">'
					+'						         <img src="resources/img/aquagram/articles/'+x.artphoto+'" style="display: block; margin: 0px auto; width: 100%;">'
					+'						        </div>'
					+'						        <div class="footer">'
					+'						         <div id="comments_1">'
					+'						         	<!-- Right-aligned -->'
					+'									<div class="media">'
					+'									  <div class="media-body" style="text-align: left; padding-top: 15px; padding-bottom: 15px;">'
					+'									   	<div> <h4 class="media-heading" style="margin-left: 5px">'+x.content+'<div id="tags"></div></h4></div>'
					+'									   	<div> <h6 class="media-heading" style="margin-left: 5px">53 like</h6></div>'
					+'									  </div>'
					+'									</div>'
					+'						         </div>'
					+'						          <div id="feedcomments_nav">'
					+'    <ul class="nav bs-docs-sidenav" id="feedcomments" style="-ms-overflow-style: none; overflow:scroll; width:100%; height:130px; border-top: none;">'
					+'						<li>'
					+'						</li> '
				    +'          				</ul>'						
					+'							    	</div>'
					+'							    	<div class="input-group" >'
					+'									     <input style="border: none; background: transparent;" id="upcomment'+x.artnum+'" type="text" class="form-control" name="upcomment" placeholder="댓글입력">'
					+'									      <span style="border: none; background: transparent;"class="input-group-addon"><p>게시</p></span>   '
					+'									    </div>'
					+'									</div>'
					+'									</div>'
					+'									</div>'
					+'						        </div>';
			
				$('#leftbar_content').append(feeditem)
				if(x.tag == null){
					x.tag ='';
				}else{
					settags(x);
				}
	/*			

				+'     		<div id="item" style="top: 5px;">'
				+'                  <div class="list-group-item list-group-item-action" id="comments_my" style="height: 58px; border: none; display: -webkit-box;"> '
				+'                <img class="img-circle" alt="Cinque Terre" src="resources/img/aquagram/profilephoto/'+d.als.profilephoto+'" style="width: 40px; height: 40px; position: center"/>'
				+'                 <div style="display: -webkit-box;"><h5 style="top:0px; left: 7px; font-weight:bold;">'+d.als.mid+'</h5><div><h6 id="contag" style="left: 15px; width: 90%;">'+d.als.content+'</h6></div></div>'
				+'                   <div style="font-size: 5px; left: 105px; top: 8px;">'+d.als.artdate+'</div>'
				+'                </div> '
				+'              </div> '
*/
};
	

	
	
	
	
	let nav =()=>{
		/*	General 네비게이션 	*/
		$('.home').click(e=>{
			
			
			$('.rescss').remove();
			$('.instacss').remove();
			$(homecss).appendTo('head');
			location.assign('/web');
			app.init();
		    
		});
		$('.ocean').click(e=>{
		e.preventDefault();
		$('.instacss').remove();
		$(rescss).appendTo('head');
		eunyeong.init('ocean')
		});
		
		$('.river').click(()=>{
		
		});
		
		$('.hotel').click(()=>{
		
		});
		$('.aquagram').click(e=>{
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