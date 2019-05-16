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
				$.getScript($.js()+'/aquagram/fous.js'),
				$.getScript($.js()+'/reservation/eunyeong.js')
			).done(()=>{
				$('#homemainnav').remove()
                $('<header id="homemainnav">'
                        +'        <section>'
                        +'            <a href="#" class="header_logo off active home">'
                        +'                <img src="/web/resources/img/homeimg/main/nakuhlogo.jpg" style="height: 30px;">'
                        +'            </a>'
                        +'            <a class="location_setting pos_addr_text btn_geo_popup">서울특별시 마포구 대흥동 백범로 23</a>'

                        +'            <div class="header_menu" style="font-weight: bold;">'
                        +'                <a href="#" class="menu_txt pblock ocean">바다</a>'
                        +'                <a href="#" class="menu_txt pblock river">민물</a>'
                        +'                <a href="#" class="menu_txt pblock hotel">숙박</a>'
                        +'                <a href="#" class="menu_txt pblock newsfeed">뉴스피드</a>'
                        +'                <a href="#" class="menu_txt pblock mypage">마이페이지</a>'
                        +'                <a class="menu_btn" id="adminbtn">'
                        +'                    <img style="padding-top: 10px;"src="/web/resources/img/homeimg/main/admin_icon.png">'
                        +'                </a> '
                        +'            </div>'
                        +'        </section>'
                        +'    </header>').appendTo('#navheader');
				defualt_loader();
				

			});  
		
		
	};
	let defualt_loader=()=>{
		$('#aq_main').remove();
		$('#wrapper').attr('style','top: 59px; background-color: white;');
		$('#right_nav_cont').empty();
		$('#my_navbar').empty();
		$(jwcompo.left_content()).appendTo('#leftbar_content');
		$(jwcompo.right_nav()).appendTo('#right_nav_cont');
		$(jwcompo.my_navbar()).appendTo('#my_navbar');
		$('#leftbar_content').empty();
		$('#users_list').empty();
		css();
		nav();
		arti.arti_img_upload();
		feed_infinitemove();
		right_nav_lander();
		
		//중앙 네비 따라오는 옵션
		$(document).ready(function() {
			  $('.navbar').affix({
			    offset: {
			      top: 50
			    }
			  });
			});
		//우측 네비 따라오는 옵션
		$(document).ready(function() {
			  $('#right_nav_cont').affix({
			    offset: {
			      top: 60
			    }
			  });
			});
		$('#my_fv').attr('style','cursor:pointer').click(function(e){
			e.preventDefault();
			arti.init();
		});
		//$('leftbar_content').empty();
		$('#followerid').attr('style','cursor:pointer').attr('data-toggle','modal').attr('data-target','#myModal').click(function(e){
			e.preventDefault();
			follower_list();
		});
		$('#folloingid').attr('style','cursor:pointer').attr('data-toggle','modal').attr('data-target','#myModal').click(function(e){
			e.preventDefault();
			folloing_list();
		});
			
	};
	let follower_list=()=>{
		let mid='gigi123'
		let follower_item='';
		$('#myModal').attr('style','display: block; z-index:99999;');
		$('.modal-dialog').attr('class','modal-dialog');
		$('.modal-dialog').attr('style','top:200px;')
		$('.modal-content').attr('style','margin:auto; width: 65%; height: 600px;');
		$('.modal-title').text('팔로워');
		$('.modal-footer').remove();
		$('.modal-body').attr('style','height: 90%;');
		$('.modal-body').html('<ul class="nav bs-docs-sidenav" style="overflow:scroll; width:100%; height:100%; padding:10px; background-color: white; border-radius: 6px;  border:1px solid; border-color: #ddd;">'
				+'				 <li>      '
				+'				 	<div id="follower_list">'
				+'					</div>'
				+'				</li>'
				+'		      </ul>');
		$.ajax({
			url: $.ctx()+'/serach/follower/'+mid,
			type: 'get',
			data: JSON.stringify(mid),
			dataType: 'json',
			contentType: 'application/json; charset=UTF-8;',
			success: d=>{
				$.each(d.werlist,(i,j)=>{
					follower_item ='			<div class="item" style="display: -webkit-box; " value="'+j.mid+'">'	
						+'				        	<div class="list-group-item list-group-item-action" style="height: 58px; width: 80%; top: 11px; border: none; display: -webkit-box;"> '
						+'							 <div> <img class="img-circle" alt="Cinque Terre" src="resources/img/aquagram/profilephoto/'+j.follpphoto+'" style="width: 50px; height: 50px; position: center"/></div> '
						+'								<div style="left: 13px; text-align: left;"><h5 style="margin-bottom: 3px; font-weight: bold;">'+j.mid+'</h5><p style="font-size: 7px;">'+j.name+'</p></div>'
						+'								</div> '

					if(j.follostate=='0'){
						follower_item+=	'<button type="button" class="btn btn-primary" id="btn_follower" value="'+j.mid+'" style="position: relative; top: 21px;">팔로우</button>'
						+'</div> ';
					}else {
						follower_item+=	'<button type="button" class="btn btn-default" id="btn_folloing" value="'+j.mid+'" style="position: relative; top: 21px;">팔로잉</button>'
							+'</div> ';
						
					}
					$(follower_item).appendTo('#follower_list').children('button').click(function(){
						/*alert($(this).attr('value'));*/
						let data = {mid:'gigi123', 
								folloid:$(this).attr('value')};
						if($(this).text()=='팔로우'){
							/*alert('??'+$(this).attr('value'));*/
							folloings(data);
							$(this).attr('class','btn btn-default').text('팔로잉');
						}else{
							nufollower(data);
							$(this).attr('class','btn btn-primary').text('팔로우');
						}
						
					});
				});
				

				
			},error: e=>{
				
			}
			
			
			
		});
				
	};
	let folloings=(x)=>{
		$.ajax({
			url: $.ctx()+'/regist/folloing',
			type: 'put',
			data: JSON.stringify(x),
			dataType: 'json',
			contentType: 'application/json; charset=UTF-8;',
			success: d=>{
				
			},error:e=>{}
		});
		
		
	};
	let nufollower=(x)=>{
		$.ajax({
			url: $.ctx()+'/delete/unfollower',
			type: 'delete',
			data: JSON.stringify(x),
			dataType: 'json',
			contentType: 'application/json; charset=UTF-8;',
			success: d=>{
				
			},error:e=>{}
		});
	};
	let folloing_list=()=>{
		let mid='gigi123'
		let folloing_item='';
			$('#myModal').attr('style','display: block; z-index:99999;');
			$('.modal-dialog').attr('class','modal-dialog');
			$('.modal-dialog').attr('style','top:200px;')
			$('.modal-content').attr('style','margin:auto; width: 65%; height: 600px;');
			$('.modal-title').text('팔로워');
			$('.modal-footer').remove();
			$('.modal-body').attr('style','height: 90%;');
			$('.modal-body').html('<ul class="nav bs-docs-sidenav" style="overflow:scroll; width:100%; height:100%; padding:10px; background-color: white; border-radius: 6px;  border:1px solid; border-color: #ddd;">'
					+'				 <li>      '
					+'				 	<div id="folloing_list">'
					+'					</div>'
					+'				</li>'
					+'		      </ul>');
			$.ajax({
				url: $.ctx()+'/serach/folloing/'+mid,
				type: 'get',
				data: JSON.stringify(mid),
				dataType: 'json',
				contentType: 'application/json; charset=UTF-8;',
				success: d=>{
					$.each(d.inglist,(i,j)=>{
						folloing_item +='			<div class="item" style="display: -webkit-box;">'	
							+'				        	<div class="list-group-item list-group-item-action" style="height: 58px; width: 80%; top: 11px; border: none; display: -webkit-box;"> '
							+'							 <div> <img class="img-circle" alt="Cinque Terre" src="resources/img/aquagram/profilephoto/'+j.follpphoto+'" style="width: 50px; height: 50px; position: center"/></div> '
							+'								<div style="left: 13px; text-align: left;"><h5 style="margin-bottom: 3px; font-weight: bold;">'+j.mid+'</h5><p style="font-size: 7px;">'+j.name+'</p></div>'
							+'								</div> '
							+'								<button type="button" class="btn btn-default" value="'+j.mid+'" style="position: relative; top: 21px;">팔로잉</button>'
							+'							</div> ';
							
					});
					$(folloing_item).appendTo('#folloing_list').children('button').click(function(){
						let data = {mid:'gigi123', 
								folloid:$(this).attr('value')};
						if($(this).text()=='팔로우'){
							/*alert('??'+$(this).attr('value'));*/
							folloings(data);
							$(this).attr('class','btn btn-default').text('팔로잉');
						}else{
							nufollower(data);
							$(this).attr('class','btn btn-primary').text('팔로우');
							
						}
						nufollower();
					});
					
				},error: e=>{
					
				}
				
				
				
			});
			
	};
	
	let right_nav_lander=()=>{
		let foitem = '';
		let mid='gigi123';
		$.ajax({
			url: $.ctx()+'/arti/follo/'+mid,
			type: 'get',
			data: JSON.stringify(mid),
			dataType: 'json',
			contentType: 'application/json; charset=UTF-8;',
			success: d=>{

				$.each(d.follist,(i,j)=>{
					foitem = '			<div class="item" id="item_'+j.artnum+' style="display: -webkit-box; value="'+j.folloid+'"">'	
						+'				        	<div class="list-group-item list-group-item-action" style="height: 58px; width: 80%; top: 11px; border: none; display: -webkit-box;"> '
						+'							 <div> <img class="img-circle" alt="Cinque Terre" src="resources/img/aquagram/profilephoto/'+j.follpphoto+'" style="width: 50px; height: 50px; position: center"/></div> '
						+'								<div style="left: 13px; text-align: left;"><h5 style="margin-bottom: 3px; font-weight: bold;">'+j.folloid+'</h5><p style="font-size: 7px;">'+j.name+'</p></div>'
						+'								</div> '
						+'								<button type="button" class="btn btn-default" value="'+j.folloid+'" style="position: relative; top: 21px;">팔로잉</button>'
						+'							</div> ';

					$(foitem).appendTo('#users_list').attr('style','cursor:pointer').click(function(){
						/*alert('??!!'+$(this).attr('value'));*/
						let scahid = $(this).attr('value');
						fous.init(scahid);
						
					});
				});

			},error:e=>{
				alert('실패!');
				
			}
			
		});
//		function fn_dateTimeToFormatted(dt) {
//			var min = 60 * 1000;
//			var c = new Date()
//			var d = new Date(dt);
//			var minsAgo = Math.floor((c - d) / (min));
//
//			var result = {
//				'raw': d.getFullYear() + '-' + (d.getMonth() + 1 > 9 ? '' : '0') + (d.getMonth() + 1) + '-' + (d.getDate() > 9 ? '' : '0') +  d.getDate() + ' ' + (d.getHours() > 9 ? '' : '0') +  d.getHours() + ':' + (d.getMinutes() > 9 ? '' : '0') +  d.getMinutes() + ':'  + (d.getSeconds() > 9 ? '' : '0') +  d.getSeconds(),
//				'formatted': '',
//			};
//
//			if (minsAgo < 60) { // 1시간 내
//				result.formatted = minsAgo + '분 전';
//			} else if (minsAgo < 60 * 24) { // 하루 내
//				result.formatted = Math.floor(minsAgo / 60) + '시간 전';
//			} else { // 하루 이상
//				result.formatted = Math.floor(minsAgo / 60 / 24) + '일 전';
//			};
//
//			return formatDate;
//		};

	};
	
	let feed_infinitemove =()=>{

		let isEnd = false;


			$(document).ready(function(){
				$(window).data('ajaxready',true).scroll(function(){
					if($(window).data('ajaxready')==false) return;
					if($(window).scrollTop() + 600 >=$(document).height()-$(window).height()){
						$(document).ready(function(){
							$('div#loadmoreajaxloader').show();
							$(window).data('ajaxready',false);
							feed_fetchList();
						});
					}		
				})
				
			});
			feed_fetchList(); 


	};
	let feed_fetchList=()=>{
		let isEnd = false;
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
                		  userd[i] = {userid: j.mid,
          				  		userphoto:j.userpo,
          				  		artcount:j.artCount,
          				  		followerCount:j.followerCount,
          				  		folloingCount:j.folloingCount};
	                	 if(j.mid !== ''){
	                		 mynavd(userd);
	                	 }
                		  feed_renderList(j,i); 

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
	let mynavd =(x)=>{
		
		 $('#my_fv').text(x[0].artcount);
		  $('#followerid').text(x[0].followerCount);
		  $('#folloingid').text(x[0].folloingCount);
			//$('#userimg').attr('src','resources/img/aquagram/profilephoto/'+d.nav.profilephoto);
		  $('#navmypage').html('<img id="userimg" class="img-circle" alt="Cinque Terre" src="resources/img/aquagram/profilephoto/'+x[0].userphoto+'" '
					+'style="width: 50px; height: 50px; position: center;"/>'+x[0].userid+'</div></li>');
		
	};
	let settags = (x)=>{
			
			
	};
	let feed_renderList =(x,a)=>{
				let feeditem = '<div class="wow fadeInDown" id="data_wow" style="border-radius: 6px;" data-no="'+x.rownum+'" >'
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
					+'									   	<div> <h4 class="media-heading" style="margin-left: 5px">'+x.content+'<div id="tags_'+x.artnum+'">'+x.tag+'</div></h4></div>'
					+'									   	<div> <h6 class="media-heading" style="margin-left: 5px">53 like</h6></div>'
					+'									  </div>'
					+'									</div>'
					+'						         </div>'
					+'						          <div id="feedcomments_nav">'
					+'    <ul class="nav bs-docs-sidenav" id="feedcomments" style="-ms-overflow-style: none; overflow:scroll; width:100%; height:130px; border-top: none;">'
					+'						<li class="comlist_'+x.rownum+'">'
					+'						</li> '
				    +'          				</ul>'						
					+'							    	</div>'
					+'							    	<div class="input-group" id="input-group_'+x.rownum+'">'
					+'										<input style="border: none; background: transparent;" id="upcomment_'+x.artnum+'" type="text" class="form-control" name="" placeholder="댓글입력">'
					+'										<span style="border: none; background: transparent;" class="input-group-addon" value="'+x.artnum+'"><p>게시</p></span>'
					+'									    </div>'
					+'									</div>'
					+'									</div>'
					+'									</div>'
					+'						        </div>';
				
				$(feeditem).appendTo('#leftbar_content');
				let tags = x.tag;
				 /*let tagcut = x.tag;
				let settag = '';
				if(x.tag.split('.') == null){
					x.tag ='';
					return
				}else{
					tagcuts= x.tag.split('.');
					$.each(tagcuts,(i,j)=>{
						settag += '<a>'+tagcuts[i]+'</a>';
						
					});	
					
				}
				$(settag).appendTo('#tags_'+x.artnum);*/
				

				
  				$.getJSON($.ctx()+'/comments/list/'+x.artnum,d=>{
					let comitem ='';
					$.each(d.cls,(i,j)=>{
						comitem +=	'			<div class="item" style="display: -webkit-box; " value="'+j.comid+'">'	
						+'				        	<div class="list-group-item list-group-item-action" style="height: 58px; width: 100%; top: 11px; border: none; display: -webkit-box;"> '
						+'							 <div> <img class="img-circle" alt="Cinque Terre" src="resources/img/aquagram/profilephoto/'+j.comprophoto+'" style="width: 50px; height: 50px; position: center"/></div> '
						+'								<div style="left: 13px; text-align: left;"><h5 style="margin-bottom: 3px; font-weight: bold;">'+j.comid+'</h5><p style="font-size: 7px;">'+j.cmname+'</p></div>'
						+'							<div style="position: relative; left: 30px;"><h5>'+j.comm+'</h5></div>'
						+'								</div> '		
						+'						</div> ';					
					});
					$('.comlist_'+x.rownum).append(comitem);
	  				$('#input-group_'+x.rownum).children('span').click(function(e){
						e.preventDefault();
						let com_data = {
								comid : 'gigi123',
								comm : $('#upcomment_'+$(this).attr('value')).val(),
								titleseq : $(this).attr('value')
						};
						$.ajax({
							url: $.ctx()+'/regist/comm/'+com_data.comid,
							type: 'post',
							data: JSON.stringify(com_data),
							dataType: 'json',
							contentType: 'application/json; charset=UTF-8;',
							success: d=>{
								
								$('#input-group_'+x.rownum).children('input').val('');
								let incomm =	'			<div class="item" style="display: -webkit-box; " value="'+d.comlist.comid+'">'	
								+'				        	<div class="list-group-item list-group-item-action" style="height: 58px; width: 100%; top: 11px; border: none; display: -webkit-box;"> '
								+'							 <div> <img class="img-circle" alt="Cinque Terre" src="resources/img/aquagram/profilephoto/'+d.comlist.comprophoto+'" style="width: 50px; height: 50px; position: center"/></div> '
								+'								<div style="left: 13px; text-align: left;"><h5 style="margin-bottom: 3px; font-weight: bold;">'+d.comlist.comid+'</h5><p style="font-size: 7px;">'+d.comlist.cmname+'</p></div>'
								+'							<div style="position: relative; left: 30px;"><h5>'+d.comlist.comm+'</h5></div>'
								+'								</div> '		
								+'						</div> ';	
								$('.comlist_'+x.rownum).prepend(incomm);

								
							},error:e=>{}
						});
						
						
					});
					
					
				});


	/*			

				+'     		<div id="com_item" style="top: 5px;">'
				+'                  <div class="list-group-item list-group-item-action" id="comments_my" style="height: 58px; border: none; display: -webkit-box;"> '
				+'                <img class="img-circle" alt="Cinque Terre" src="resources/img/aquagram/profilephoto/'+d.als.profilephoto+'" style="width: 40px; height: 40px; position: center"/>'
				+'                 <div style="display: -webkit-box;"><h5 style="top:0px; left: 7px; font-weight:bold;">'+d.als.mid+'</h5><div><h6 id="contag" style="left: 15px; width: 90%;">'+d.als.content+'</h6></div></div>'
				+'                   <div style="font-size: 5px; left: 105px; top: 8px;">'+d.als.artdate+'</div>'
				+'                </div> '
				+'              </div> '
*/
				
};
let nav =()=>{
    /*  General 네비게이션     */
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
    $(window).data('resajaxready',"undefined");
    eunyeong.init('ocean')
    });
    
    $('.river').click(e=>{
    e.preventDefault();
    $('.instacss').remove();
    $(rescss).appendTo('head');
    $(window).data('resajaxready',"undefined");
    eunyeong.init('river')
    });
    
    $('.hotel').click(e=>{
    e.preventDefault();
    $('.instacss').remove();
    $(rescss).appendTo('head');
    $(window).data('resajaxready',"undefined");
    eunyeong.init('hotel')
    });
    $('.newsfeed').click(e=>{
    e.preventDefault();
    $('.rescss').remove();
    $(instacss).appendTo('head');
    jeonguk.init();
    });
    $('.mypage').click(()=>{
    e.preventDefault();
    $('.instacss').remove();
    $(rescss).appendTo('head');
    $(window).data('resajaxready',"undefined");
    eunyeong.init('mypage') 
        
    });
    $('#logout').click(()=>{
        
    });
}
	let css = ()=>{
		/* head css  */
		 homecss = '<link class="homecss" rel="stylesheet" type="text/css" href="/web/resources/css/home/homemain.css" />'
			+'<link class="homecss" href="https://fonts.googleapis.com/css?family=Raleway:300,400,600,600i,700" rel="stylesheet">'
			+'<link class="homecss" href="/web/resources/css/home/style.css" rel="stylesheet">';
		 rescss ='<link class="homecss" href="/web/resources/css/home/responsive.css" rel="stylesheet">'
	            +'<link class="homecss" href="/web/resources/css/home/swiper.min.css" rel="stylesheet">'
	            +'<link class="rescss" rel="stylesheet" type="text/css" href="/web/resources/css/reservation/modal.css"> ';
		 instacss =' <link class="instacss" rel="stylesheet" type="text/css" href="/web/resources/css/aquagram/style.css">'
			 +'  <link class="instacss" rel="stylesheet" type="text/css" href="/web/resources/css/aquagram/animate.css">'
			 +'  <link class="instacss" rel="stylesheet" type="text/css" href="/web/resources/css/aquagram/structure.css">'
			 +'  <link class="instacss" rel="stylesheet" type="text/css" href="/web/resources/css/aquagram/docs.min.css"> '
			 +'  <link class="instacss" rel="stylesheet" type="text/css" href="/web/resources/css/aquagram/default_css.css">';
			 
			 
	}

	
	
	
	return {init:init }
	
})();