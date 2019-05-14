"use strict";
var eunyeong = eunyeong || {};
eunyeong = (()=>{
    const WHEN_ERR = '호출하는 JS파일을 찾지 못지 못했습니다.'
    let _,compojs, js, m_ctt;
    let homecss,admincss,rescss,instacss,calnum;
    
    let init =x=>{
        _= $.ctx();
    	js = $.js();
        compojs = js + '/component/eycompo.js';
        m_ctt = '#wrapper';
        calnum=1;
        onCreate(x);
    }
    
    let onCreate =(x)=>{
        setContentView(x);
    }
    
    let setContentView =(x)=>{
        $.when(
                $.getScript($.js()+'/component/eycompo.js'),
                $.getScript($.js()+'/aquagram/jeonguk.js'),
                $.getScript($.js()+'/app.js')
        ).done(()=>{
        	css();
            switch(x){
            case 'ocean':
                ocean();
            break;
            case 'river':
                river();
            break;
            case 'hotel':
                hotel();
            break;
            }
            
            /*  네비게이션 */
            $('.home').click(e=>{
            
            e.preventDefault();
            $('.rescss').remove();
            $('.instacss').remove();
            location.assign('/web');
            app.init();
            });
            $('#ocean').click(()=>{
            	setContentView('ocean')
            });
            
            $('#river').click(()=>{
            	river();
            });
            
            $('#hotel').click(()=>{
            	hotel();
            });
            
            $('#newsfeed').click(e=>{
                e.preventDefault();
                $('.rescss').remove();
                $(instacss).appendTo('head');
                jeonguk.init();
            });
            $('#mypage').click(()=>{

            });
            
            $('#logout').click(()=>{
                
            });
        })
    };
  
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////*바다 메인화면 */    
    let ocean =()=>{
        $('#wrapper').empty();
        $('.scrolling').remove();
        $(eycompo.header()).appendTo('.header_area');
        $(eycompo.main()).appendTo('#wrapper');
        $('#category_list').empty();
        $('<div id="category_list" class="list_contents" data-start_key="0" data-offset="0" data-limit="10" data-last_offset="">').appendTo('#category_list');
        $('<div class="category_title_line level_3">'
        		+'                    <p>인기추천</p>'
        		+'                    <div class="ad_guide">'
        		+'                        <a>광고 <i><img src="https://img.moolban.com/unsafe/asset/www/responsive/img/basic/reserve_ico04.png" alt=""></i></a>'
        		+'                        <div class="ad_txt">인기추천 광고상품이 표시되는 영역입니다.</div>'
        		+'                    </div>')
       .appendTo('#category_list');
        
     /*홈네비에 있는 검색바 사용할 예정  
       $('input.btn[type=submit]').click(e=>{
        	e.preventDefault();
        	alert('키워드검색');
        	search();
        });*/
        
        let cate = 'ocean';
        $('.select_title').click(()=>{
        	if($('.sort > .select_option').css('display')){
        		
        	}else{
        	  $('.sort > .select_option').css('display' ,'block');	
        	}
            
        	
        })
        pro_infinitemove(cate);
    };
    
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////*민물 메인화면 */        
    let river =()=>{
    	alert('river진입');
        $(m_ctt).empty();
        $(s_ctt).attr('style','background:#242c36 url(/web/resources/img/reservation/river.jpg)');
        $('input.btn[type=submit]').click(e=>{
        	e.preventDefault();
        	alert('키워드검색');
        	search();
        });

        let cate = 'river';
        pro_infinitemove(cate);
        
    };
    
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////*숙박 메인화면 */            
    let hotel =()=>{
    	alert('hotel진입');
        $(m_ctt).empty();
        $(s_ctt).attr('style','background:#242c36 url(/web/resources/img/reservation/lodge.jpg)');
        $('input.btn[type=submit]').click(e=>{
        	e.preventDefault();
        	alert('키워드검색');
        	search();
        });
        
        let cate = 'hotel';
        pro_infinitemove(cate);
        
    };
    

   //////////////////////////////////////////////////////////////////////////////////////////////////////////////////*페이지네이션 : 1*/

    let pro_infinitemove =(x)=>{

		let isEnd = false;

		$(function(){
			$(document).ready(function(){
				$(window).data('ajaxready',true).scroll(function(){
					if($(window).data('ajaxready')==false) return;
					if($(window).scrollTop() + 300 >=$(document).height()-$(window).height()){
						$(document).ready(function(){
							//로딩될 때 충돌막아줌 
							$('div#loadmoreajaxloader').show();
							$(window).data('ajaxready',false);
							pro_fetchList(x);
						});
					}		
				})
			});
			pro_fetchList(x); 
		});
		
		let pro_fetchList=x=>{
	        if(isEnd == true){
	        	
	        	return;
	        }
	        let startNo = $('.list_section').children('.list_ad_box_area3').last().data("no") || 0;	      
			let cate =x;
			let page = 0;
			let url = _+'/catesearch/'+ cate;
			let data = { cate:cate,
					startRow:startNo,
					pageSize:6};
			$.ajax({
				url: url,
				type: 'post',
				data: JSON.stringify(data),
				dataType: 'json',
				contentType: 'application/json; charset=UTF-8;',
				success: d=>{
					  let length = d.list.length;
					  //alert(length);
					  //db에 있는 값이 5 이하길 경우 멈춤
	                  if( length < 5 ){
	                	  isEnd = true;
	                	  alert(isEnd+'success')
	                  }
	                  if(d){
	           
	                	  $('div#loadmoreajaxloader').hide();
	                	  $.each(d.list,(i, j)=>{
	                		  pro_renderList(j); 
		                	 
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
	
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////*전체목록 :페이지네이션 */	
	
	let pro_renderList =(j)=>{
	   	$('<a class="list_box_area list_ad_box_area list_ad_box_area3" data-view_type="3" data-level="2" data-key="9296" data-no="'+j.rownum+'">'
		+'    <div class="list_visual_area">'
		+'    <div class="img_box company_info">'
		+'			<img src=' + $.img() + '/reservation/' + j.proimg + ' alt="" class="list_visual_img">'
		+'         </div>'
		+'        <div class="cover_area"></div>'
		+'        <div class="list_box_txt clearfix">'
		+'            <div class="list_box_left">'
		+'                <div class="list_pic">'
		+'                    '
		+'                 	<span id="fishname" class="kind_blue_txt">'+ j.fishname +'</span>'
		+'                </div>'
		+'                <p name="company" class="list_name_line">'+ j.company +'</p>'
		+'                <div class="write_comment_line">'
		+'                <p>'
		+'                <img src="https://img.moolban.com/unsafe/asset/www/responsive/img/basic/ico_fish.png" alt="">조황 2개'
		+'                 </p>'
		+'                </div>'
		+'                                <p id="address" class="list_address_line">'+ j.address +'</p>'
		+'            </div>'
		+'                        <div class="list_box_right">'
		+'                <div class="live_price">'
		+'                    <p class="price_pic">'
		+'                        <span>실시간예약</span>'
		+'                                                <span class="insurance_pic">보험</span>'
		+'                                                                    </p>'
		+'                    <p id="price" class="price_pay">'+ j.price +'<span>원~</span></p>'
		+'                </div>'
		+'            </div>'
		+'                    </div>'
		+'    </div>'
		+'        <div class="opacity_txt">'
		+'        <!--p><strong>EVENT</strong>가족  체험낚시 또는 어린이도  낚시할 수 있도록 준비되어 있습니다. 이색 데이트 코스 및 펜션과 리조트도 소개해 드립니다.</p-->'
		+'        <div class="marquee1">가족  체험낚시 또는 어린이도  낚시할 수 있도록 준비되어 있습니다. 이색 데이트 코스 및 펜션과 리조트도 소개해 드립니다.</div>'
		+'    </div>'
		+'    </a>')
   		.attr('id', j.pronum)
		.appendTo('.list_section')
   		.click(function(){
			let proid = $(this).attr('id');
   				$.ajax({
   		    		url:_+'/products/'+ proid,
   		    		type:'POST',
   		    		data : JSON.stringify(proid),
   		    		dataType :'json',
   		    		contentType :'application/json',
   		    		success : d=>{
   		    			alert('AJAX성공' + d.today);
   		    			let pro ={pronum:d.product.pronum,proname:d.product.proname,price:d.product.price,company:d.product.company,address:d.product.address,category:d.product.category,
   		    					  proimg:d.product.proimg,fishname:d.product.fishname,phone:d.product.phone,lat:d.product.lat,lng:d.product.lng, today:d.today, lastday:d.lastday,calday:d.calday,callist:d.callist,calheader:d.calheader};
   		    			
   		    			detail(pro);
   		    		},
   		    		error :e=>{
   		    			alert('AJAX실패');
   		    		}
   				});
   		})
	};
    
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////*일부 검색창 : 키워드 */

   let search =()=>{
    	let keyword ={
    			proword:$('#search_keyword').val()};
    	alert('keyword에 들어온 값' + keyword.proword);
    	$.getJSON(_+'/prosearch/' + keyword.proword,d=>{
    		alert('Ajax 성공')
    		$(s_ctt).remove();
    		$(m_ctt).empty();
    		$(eycompo.search_bar()).prependTo(f_ctt);
    			$('button[type=button]').click(e=>{
    				e.preventDefault();
    				alert('search 다시한번진입');
    				search();
    			   });
    			
				$.each(d.list, (x,y)=>{
	            	$('<div class="col-sm-4">'
	            			+'	<div class="left-widget-sidebar">'
	            			+'		<div class="card-widget bg-white user-card" style="height:400px">'              
	            			+'			<div id="proimg" class="u-img img-cover" style="background-image: url(/web/resources/img/reservation/'+ y.proimg + ');background-size:cover; height: 300px;"></div>'
	            			+'					<div class="u-content"></br></br>'
	            			+'					<h5>' + y.company + '</h5>'
	            			+'					<p class="text-muted">' + y.price +'</p>'
	            			+'					</div>'
	            			+'					</div>'
	            			+'				</div>'
	            			+'			</div>'
	            			+'		</div>')
	            			.attr('id', y.pronum)
	            			.appendTo(m_ctt)
	            			.click(function(){
	            				let proid = $(this).attr('id');
	                				$.ajax({
	                		    		url:_+'/products/'+ proid,
	                		    		type:'POST',
	                		    		data : JSON.stringify(proid),
	                		    		dataType :'json',
	                		    		contentType :'application/json',
	                		    		success : d=>{
	                		    			alert('AJAX성공' + d.proname);
	                		    			alert('d.today' + d.today);
	                		    			let de ={pronum:d.pronum,proname:d.proname,price:d.price,company:d.company,address:d.address,category:d.category,proimg:d.proimg,
	                		  					  	  fishname:d.fishname,phone:d.phone,lat:d.lat,lng:d.lng, today:d.today, lastday:d.lastday};
	                		    			detail(de);
	                		    		},
	                		    		error :e=>{
	                		    			alert('AJAX실패');
	                		    		}
	                		    	});
	            			})
    	            })
    		})
    };
    
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*상품정보 : 상세 */
 
    let detail =x=>{
    	alert('detail 진입');
    	$('#wrapper').empty();
    	$('.scrolling').empty();
    	$('<div id="scrolling" class="scrolling">'
    	+'   <div class="header_title">'
    	+'      <section>'
    	+'         <h1>바다낚시</h1>'
    	+'      </section>'
    	+'    </div>'
    	+'</div>').appendTo('.header_area');
    	$(eycompo.pro_head()).appendTo('#wrapper');
    	$(eycompo.pro_info()).appendTo('.view_area');
    	$('.title_arrow').append(x.calheader);
    	  let calval = 0;
          let calno = 0;
          //캘린더 : 물반고기반 
          $.each([4,2,1,3,7],(a,b)=>{
              $('<tr id="rescal'+a+'">'         
                  +'</tr>').appendTo('#rescalendar')
          	for(let i=0;i<7;i++){
          		if(x.callist[calno]==='★'){
          		 $('<td style="color: #666;"><a class="off"><strong>'+x.callist[calno]+'</strong></a></td>').appendTo('#rescal'+a) 
          	    }else if(x.callist[calno]!='★'&&x.callist[calno]<x.today){
          		 $('<td style="color: #666;"><a class="off"><strong>'+x.callist[calno]+'</strong></a></td>').appendTo('#rescal'+a)
          		calval+=1;
          		}else if(x.callist[calno] === undefined){
          			$('<td style="color: #666;"><a class="off"><strong>'+""+'</strong></a></td>').appendTo('#rescal'+a)
          		}else{
          		$('<td><a class="cal_cell_date" value="'+x.calday[calval]+'"><strong>'+x.callist[calno]+'</strong><img src="https://img.moolban.com/unsafe/asset/www/responsive/img/weather/weather-30.png" alt=""><span class="mul">'+(i+a)+'물</span></a></td>')
          		.appendTo('#rescal'+a)
          		calval+=1;
          		}
          		calno+=1;
          		}
          })
          $('.miniinfo').attr('value',x.lastday)
          $('.cal_cell_date').click(function(){
        	  $( '.cal_cell_date' ).removeClass( 'on' );
        	  $(this).addClass('on')
        	 $('.miniinfo').attr('value',$(this).attr('value'))
             let datesplit = $('.miniinfo').attr('value').split('-');
              alert(datesplit[0]);
              $('.miniinfo').html('<div class="date_widget_area view_box" data-date="2019-05-13">'
          			+'        <div class="date_title">'
        			+'            <p>'+datesplit[0]+'년 '+datesplit[1]+'월 '+datesplit[2]+'일</p>'        		
        			+'        </div>'
        			+'        <div class="widget_area clearfix">'
        			+'                        <dl class="widget_box_left widget_box">'
        			+'                                <dt><img src="https://img.moolban.com/unsafe/asset/www/responsive/img/wt_big/wt-big-30.png" alt=""></dt>'
        			+'                                                <dd>'
        			+'                    <span>물때 <strong>무시</strong></span>                    <span>풍속<strong>남서풍 4.07m/s</strong></span>                </dd>'
        			+'                            </dl>'
        			+'                        <a class="widget_box_right widget_box personnel_choice_btn">'
        			+'                <img src="https://img.moolban.com/unsafe/asset/www/responsive/img/basic/ico_people.png" alt="">'
        			+'                <span>예약인원 <strong>1명</strong></span>'
        			+'                <i class="personnel_choice" data-person="60">인원선택</i>'
        			+'            </a>'
        			+'        </div>'
        			+'    </div>')
          })        
           

         
    	$('#pro_review').click(e=>{
    		$('#view_reserve').remove();
    		$(eycompo.pro_review()).appendTo('.view_area');
    	});
    	
    	$('#pro_use').click(e=>{
    		$('#view_reserve').remove();
    		$(eycompo.pro_use()).appendTo('.view_area');
        	$(document).ready(function() {
            	initMap(x);
            });
    	});

        $('.proname').text(x.proname);
        $('.price').html(x.price+'<span>원</span>');
        $('#company').text(x.company);
        $('#proimg').attr('src',$.img() + '/reservation/' + x.proimg);
        $('#category').text(x.category);
        $('#address').text(x.address);
        $('.fishname').text(x.fishname);
        $('#phone').text(x.phone);
        $('#resdate').text(x.today);
        
		let pro ={pronum:x.pronum,proname:x.proname,price:x.price,company:x.company,address:x.address,category:x.category,proimg:x.proimg,
				  regidate:x.today,lastday:x.lastday,fishname:x.fishname,phone:x.phone,
				  lat:x.lat,lng:x.lng, today:x.today, lastday:x.lastday,startdate:$('.miniinfo').attr('value')};

        $('.sel_reserve_goods').attr('data-toggle','modal').attr('data-target','#myModal').click(function(e){
        	$('#myModal').attr('style','display: block; z-index:99999;').appendTo('#myModal');
  			$('.modal-dialog').attr('style','top:200px;');
  			$('.modal-content').attr('style','margin:auto; width: 502px;height: 202px;');
  			$('.modal-title').empty();
  			$('.modal-body').empty();
  			$('.modal-footer').empty();
  			$(' <h4 class="modal-title">'+ x.company +'</h4>').appendTo('.modal-title');
  			$('<div class="checkbox"><label><input class="checkbox" type="checkbox" value=""> 상품명 : '+ x.proname + '[가격 : ' +x.price+ '원]</label></div>').appendTo('.modal-body');
  			$('<button id="paybtn" type="button" class="btn btn-default" data-dismiss="modal">결제하기</button>').prependTo('.modal-footer').click(e=>{
  				prdres(pro);
  			});
  			$('<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>').appendTo('.modal-footer');
        });
     };
    
     //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*상품예약 : 인원선택*/
     
     let prdres =x=>{
     	$('#wrapper').empty();
     	$(eycompo.product_res()).appendTo('#wrapper');
		$(rescss).appendTo('head')
		$('.fishname').text(x.fishname);
     	$('#proname').text(x.proname);
 		$('#company').text(x.company);
 		$('#startdate').text(x.startdate);
 	    $('#proname1').text(x.proname);
 	    $('.price').text(x.price+'원');
 	    let count = '';
 	    /*let count = Number($('#count').val()) + 1;*/
 	    $('<a class="count_minus" value="count_minus"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAECAYAAACQli8lAAAAAXNSR0IArs4c6QAAAClJREFUGBljYKATYATZ4+rquhVIedHIzm27d+/2ZqKR4cjG/kfm0JwNAEZQBgMM6SkpAAAAAElFTkSuQmCC" alt="" ></a>'
 	    		+'<input id="count" type="tel" value="1">'
 	    		+'<a class="count_plus" value="count_plus"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAGVJREFUSA1jYCABvH79eisIk6CFgYUUxUC1XiSqZ2AiVQOp6kctIBhio0E0AoKIEZr1Sc6hBMMGomAbrVPRfyIdAlEG9O1/ECZFE619MFrYEY6N0TggGEZDP4hIbVVsA4YJSTkZAPigFhD8xoqXAAAAAElFTkSuQmCC" alt="" style="display: none;"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAGVJREFUSA1jYCABuLq6bgVhErQwsJCiGKjWi0T1DEykaiBV/agFBENsNIhGQBAxQrM+yTmUYNhAFGyjdSr6T6RDIMqAvv0PwqRoorUPRgs7wrExGgcEw2joBxGprYptwDAhKScDAEDZDFaet43aAAAAAElFTkSuQmCC" alt="">'
 	    		+'</a>').appendTo('#count_box').click(function(){
 	    			switch($(this).attr('value')){
 	    			case 'count_plus':
 	    				count = Number($('#count').attr('value'));
 	    				count++;
 	    				$('#count').attr('value',count);
 	    				$('.price').text(Number(x.price.replace(',',''))*count+'원');	    			
 	    				break;
 	    			case 'count_minus':
 	    				count = Number($('#count').attr('value'));
 	    				count--;
 	    				$('#count').attr('value',count);
 	    				$('.price').text(Number(x.price.replace(',',''))*count+'원');
 	    				/*alert('마이너스')
 	    				let count = Number($('#count').attr('value'));
 	    				count--;
 	    				$('#count').attr('value',count);
 	    				$('.price').text(Number($('.price').text())*count);
 	    				alert(count);*/
 	    				break;

 	    			}
 	    			
 	    		})
 	    
 	    
/* 	    $('#count_plus').click(function(){
 	    	
 	    	$('<input id="count" type="tel" value="1">').appendTo('#count_minus')
 	    });
 	    
 	    $('#count_minus').click(function(){
 	    	if(Number($('#count').val()) < 1){ 	   
 	    		$('#count').val(count);
 	    		prdres(count);
 	    	}else{
 	    		let count = Number($('.count').val()) - 1;
 	 	    	let totalprice = price * count;
 	    	}
 	    });*/
 	    
 		$('.reserve_btn').click(e=>{
			e.preventDefault();			
			let pro ={pronum:x.pronum,proname:x.proname,price:$('.price').text(),company:x.company,address:x.address,category:x.category,proimg:x.proimg,
					  regidate:x.today,lastday:x.lastday,fishname:x.fishname,
					  phone:x.phone,lat:x.lat,lng:x.lng, today:x.today, lastday:x.lastday,startdate:x.startdate};
			reserve_pro(pro);
 			
 				
 			});
     };
     
     //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*상품결제 : 결제값입력*/
  
     let reserve_pro =x=>{
			$('#wrapper').empty();
			$(eycompo.reserve_pro()).appendTo('#wrapper');
			$('#proname').text(x.proname);
			$('.fishname').text(x.fishname);
			$('.tb1').text(x.proname);
			$('.price').text(x.price);
			$('.totalmoney').text(x.price);
			$('.reserve_btn').click(e=>{
				e.preventDefault();
		    	 let res = {
		    		/*mid : 세션에서 들어온 값
	   				deposit : 자바에서 계산*/ 
	     			 mid : 'test',
	     			 resname : $('#resname').val(),
	     			 startdate : $('#startdate').val(),
	     			 phone : $('#phone').val(),
	     			 resdate : x.today,
	     			 rescount : $('#rescount').val(),
	     			 message :  $('#message').val(),
	     			 pronum :  x.pronum,
	     			 proname : x.proname,
	     			 company : x.company,
	     			 deposit : x.price};
	     	 
	     	 $.ajax({
	     		 url : _+'/reservation',
	     		 type : 'POST',
	     		 data : JSON.stringify(res),
	     		 dataType : 'json',
	     		 contentType : 'application/json',
	     		 success : d=>{
	     			 alert('AJAX 성공'+ d.msg);
	     			 respay();
	     		 },
	     		 error : e=>{
	     			 alert('AJAX 실패');
	     		 }
	     	 });
			});
     };
     
     //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*상품결제 : 완료*/
     
    let respay =()=>{
    	alert('결제완료 진입');
    	$(f_ctt).empty();
		$(eycompo.complete_pay()).appendTo(f_ctt);
		$('.call_btn').click(e=>{
			alert('업체통화는 앱에서만 이용가능합니다.');
		});
    	$('#check_res').click(e=>{
    		
    		$.ajax({});
    		
				$(f_ctt).empty();
				$(eycompo.list_res()).appendTo(f_ctt);
				$('.cancel_btn').click(e=>{
					alert('마이페이지로 이동');
	 				$(f_ctt).empty();
	 				$(eycompo.mypage()).appendTo(f_ctt); 	 				
	 				})
			});
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
    
/*    지도*/
    function initMap(x) {
  	  // The location of Uluru
  	  var uluru = {lat: x.lat, lng: x.lng};
  	  // The map, centered at Uluru
  	  var map = new google.maps.Map(
  	      document.getElementById('map'), {zoom: 15, center: uluru});
  	  // The marker, positioned at Uluru
  	  var marker = new google.maps.Marker({position: uluru, map: map});
    };

    let css = ()=>{
         homecss ='<link class="homecss" rel="stylesheet" type="text/css" href="/web/resources/css/home/homemain.css">'
        	+'<link class="homecss" href="/web/resources/css/home/style.css" rel="stylesheet">'
            +'<link class="homecss" href="https://fonts.googleapis.com/css?family=Raleway:300,400,600,600i,700" rel="stylesheet">'
            +'<link class="homecss" href="/web/resources/css/home/style.css" rel="stylesheet">';
         
         rescss = '<link class="rescss" rel="stylesheet" type="text/css" href="/web/resources/css/reservation/modal.css"> '
             +'<link class="rescss" rel="stylesheet" href="/web/resources/css/reservation/resdetail.css">'
             +'<link class="rescss" rel="stylesheet" href="/web/resources/css/reservation/prdpay.css">';
         
         instacss =' <link class="instacss" rel="stylesheet" type="text/css" href="/web/resources/css/aquagram/style.css">'
             +' <link class="instacss" rel="stylesheet" type="text/css" href="/web/resources/css/aquagram/animate.css">'
             +' <link class="instacss" rel="stylesheet" type="text/css" href="/web/resources/css/aquagram/structure.css">'
             +' <link class="instacss" rel="stylesheet" type="text/css" href="/web/resources/css/aquagram/docs.min.css"> '
             +' <link class="instacss" rel="stylesheet" type="text/css" href="/web/resources/css/aquagram/default_css.css">';
             
    };
    return {init:init, ocean:ocean, river:river, hotel:hotel, detail:detail, search:search, prdres:prdres};
})();