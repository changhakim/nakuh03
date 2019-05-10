"use strict";
var eunyeong = eunyeong || {};
eunyeong = (()=>{
    const WHEN_ERR = '호출하는 JS파일을 찾지 못지 못했습니다.'
    let _,compojs, js,
        m_ctt, s_ctt, f_ctt, p_ctt;
    let homecss,admincss,rescss,instacss;
    
    let init =x=>{
        _= $.ctx();
    	js = $.js();
        compojs = js + '/component/eycompo.js';
        m_ctt = '#main-container';
        s_ctt = '#search_content';
        f_ctt = '#features-content';
        p_ctt = 'product_container';
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
            $('#wrapper').html(eycompo.main_search())
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
            $('.ocean').click(()=>{
            	ocean();
            });
            
            $('.river').click(()=>{
            	river();
            });
            
            $('.hotel').click(()=>{
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
        $(m_ctt).empty();
        $('#datepicker2').remove();
        $('#date_search').remove();
        
        $(s_ctt).attr('style','background:#242c36 url(/web/resources/img/reservation/ocean.jpg)');
        
        ////////////////////////////////////////////////////////////////////////datepicker
        
        $(document).ready(
        		 $("<input type='text' class='form-control border-right hasDatepicker' id='date_search' placeholder='로드 테스트 중 ...'>")
        	        .appendTo('#load-target')
        	        .on('click',function(){
        	        	alert('88888888888');
        	        	 $(this).datepicker();
        	        })
    	);

        $('#datepicker2').on('click',function(){
        	alert('7777777')
        	 $("#datepicker2").datepicker();
        });
       /* $(function() {
		    $("#datepicker").datepicker();
		  });*/

        
        $('input.btn[type=submit]').click(e=>{
        	e.preventDefault();
        	alert('키워드검색');
        	search();
        });
        
        let cate = 'ocean';

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
					if($(window).scrollTop() + 650 >=$(document).height()-$(window).height()){
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
	        	alert('if들어옴');
	        	return;
	        }
	        let startNo = $(m_ctt).children('.col-sm-4').last().data("no") || 0;
	        /*alert('No::'+startNo);*/
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
	   	$('<div class="col-sm-4" data-no="'+j.rownum+'">'
	   			+'	<div class="left-widget-sidebar">'
	   			+'		<div class="card-widget bg-white user-card" style="height:360px">'              
	   			+'			<div id="proimg" class="u-img img-cover" style="background-image: url(/web/resources/img/reservation/'+ j.proimg + ');background-size:cover; height: 300px;"></div>'
	   			+'				<div class="u-content"></br></br>'
	   			+'				<h5 style="text-align:left">' + j.company + '</h5>'
	   			+'				<p class="text-muted" style="text-align:right">' + j.price +'</p>'
	   			+'				</div>'
	   			+'			</div>'
	   			+'		</div>'
	   			+'	</div>'
	   			+'</div>')
	       		.attr('id', j.pronum)
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
           		    			alert('AJAX성공' + d.today);
           		    			let pro ={pronum:d.product.pronum,proname:d.product.proname,price:d.product.price,company:d.product.company,address:d.product.address,category:d.product.category,
           		    					proimg:d.product.proimg,fishname:d.product.fishname,phone:d.product.phone,lat:d.product.lat,lng:d.product.lng, today:d.today, lastday:d.lastday};
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

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*검색창2 : 도시명*/
   
    let searchlist =()=>{
        $(s_ctt).remove();
        $(m_ctt).remove();
        $(eycompo.search_bar()).prependTo(m_ctt);
        pro_infinitemove(cate);
        $('button[type=button]').click(e=>{
            e.preventDefault();
            $(m_ctt).empty();
            pro_infinitemove(cate);
            $(i_ctt).click(function(){
                alert('여기 뭐지?? 수정하기~ ');
            	item();
            });
        });
    };
    
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*datepicker*/

    let datepicker =()=>{
    	  $(function() {
    		    $("#datepicker").datepicker();
    		  });
    };

<<<<<<< HEAD
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*상품예약 : 입력*/
 
    let prdres =x=>{
    	alert('상풍예약 진입!! 해당 상품 가격' + x.price);
    	$(m_ctt).empty();
			$(eycompo.product_res()).appendTo(m_ctt);
			$('#deposit').text(x.price);
			$('#price').text(x.price);
			$('#prdprice').text(x.price);
			$('#couponprice').text(x.price);
			$('#totalprice').text(x.price);
			$('#totalprice').text(x.price);
			$('#totalpay').text(x.price); 
			$('#totalprice').text(x.price);//x.price * x.rescount
			$('#proname').text(x.proname);
			
			let totalprice = x.price * $('input[id="rescount"]').val();
			$('#proname').text(x.proname);
			$('a[id="inputbtn"]').click(e=>{
				e.preventDefault();
				let date =x.date;
				alert(x.date);
				let data ={
						resnum:'1',
						cate:'test',
						resname: $('input[id="resname"]').val(),
						startdate:date,
						phone: $('input[id="phone"]').val(),
						rescount: $('input[id="rescount"]').val(),
						deposit: totalprice, /*여기서 인원과 금액 곱하고넘어가자 */ 
						message: $('input[id="message"]').val(),
						pronum: x.pronum,
						proname: x.proname
						};
				
				$('#handleCounter').handleCounter({
					  minimum: 1,
					  maximize: null});
				$('#deposit').text(x.price);
				$.ajax({
					url :_+'/reservation',
					type : 'POST',
					data :JSON.stringify(data),
					dataType :'json',
					contentType :'application/json',
					success : d=>{
						alert('AJAX 성공 : ' + d.msg);
					},
					error : e=>{
						alert('AJAX실패');
					}
				});	
			});
    };
    
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*상품정보 : 달력 */
   /*
    let today = null;
    let date = new Date();
    let date = today.getDay();
    
    month += 1;
    
    function dayy(year, month){ //월의 일수를 구함
    	switch(month){
    	  case 1: case 3: case 5: case 7: case 8: case 10: case 12:
              return 31;
              
    	  case 4: case 6: case 9: case 11:
              return 30;
              
    	  case 2:
    		  if(((year%400)==0||(year%4)==0&&(year%100)!=0)){
                  return 29;
              }
              else{
                  return 28;  
              }
    	}
    }    

    function prevmonth(){ //이전 월로 가는 함수 
    
    	
    	
    }*/
    
<<<<<<< HEAD
/*    상품예약 : 입력
=======

    /*상품예약 : 입력*/

/*    상품예약 : 입력
>>>>>>> 1aefe57bc1c18c2ee5d11aee9d21af5c0aa05919
>>>>>>> 19a0bb56eb027bafc4f1e37dfe6f949d28f7cc9f
    let prdres =x=>{
    	alert('상품예약 진입 ! ');
    	$(m_ctt).empty();
			$(eycompo.product_res()).appendTo(m_ctt);
			$('#deposit').text(x.price);
			$('a[id="inputbtn"]').click(e=>{
				e.preventDefault();
				let data ={
						resname: $('input[id="resname"]').val(),
						phone: $('input[id="phone"]').val(),
						rescount: $('input[id="rescount"]').val(),
						departdate:$('input[id="departdate"]').val(),
						message: $('input[id="message"]').val()};
				$('#handleCounter').handleCounter({
					  minimum: 1,
					  maximize: null});
				$('#deposit').text(x.price);
				$.ajax({
					url :_+'/reservation',
					type : 'POST',
					data :JSON.stringify(data),
					dataType :'json',
					contentType :'application/json',
					success : d=>{
						alert('AJAX 성공 : ' + d.msg);
						
					},
					error : e=>{
						alert('AJAX실패');
					}
				});	
			});
<<<<<<< HEAD
    };*/
=======

    }
    /*상세정보 : 상품 */

    };
>>>>>>> 19a0bb56eb027bafc4f1e37dfe6f949d28f7cc9f
    /*상세정보 : 상품 */

    
=======
>>>>>>> b246bade3d506c2db4e0d67ad84d1fbce3b7ce1a
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*상품정보 : 상세 */
 
    let detail =x=>{
        $(s_ctt).remove();
        $(m_ctt).remove();
        $(document).ready(function() {
        	initMap(x);
        });
        $(f_ctt).attr('class','container');

        //캘린더 : 물반고기반 
        $(eycompo.calender()).appendTo(f_ctt);
        
        //날짜를 동적으로 그리기 
        /*$.each(['1','2','3','4','5'], (i,j)=>{
            	$( '<tr>'
                        +'<td style="color: #666;"><a class="off"><strong>'+ j.day +'</strong></a></td>'
                        +'<td style="color: #666;"><a class="off"><strong>29</strong></a></td>'
                        +'<td style="color: #666;"><a class="off"><strong>30</strong></a></td>'
                        +'<td><a class="cal_cell_date" data-date="2019-05-01"><strong>1</strong><img src="https://img.moolban.com/unsafe/asset/www/responsive/img/weather/weather-30.png" alt=""><span class="mul">3물</span></a></td>'
                        +'<td><a class="cal_cell_date" data-date="2019-05-02"><strong>2</strong><img src="https://img.moolban.com/unsafe/asset/www/responsive/img/weather/weather-10.png" alt=""><span class="mul">4물</span></a></td>'
                        +'<td><a class="cal_cell_date" data-date="2019-05-03"><strong>3</strong><img src="https://img.moolban.com/unsafe/asset/www/responsive/img/weather/weather-10.png" alt=""><span class="mul">5물</span></a></td>'
                        +'<td><a class="cal_cell_date" data-date="2019-05-04"><strong>4</strong><img src="https://img.moolban.com/unsafe/asset/www/responsive/img/weather/weather-10.png" alt=""><span class="mul">6물</span></a></td>'
                    +'</tr>').appendTo('.calendar');
        });*/

        $('.login_tel').click(e=>{       	alert('예약을 완료하시면 업체 연락처가 제공됩니다.');        });
        $('.calendar_next').click(e=>{        	alert('출발일 선택은 다음 페이지에서 제공됩니다.');        });
        $('.cal_cell_date').click(e=>{        	alert('출발일 선택은 다음 페이지에서 제공됩니다.');        });
        $('.personnel_choice').click(e=>{        	alert('인원 선택은 다음 페이지에서 선택하세요');        });

        $(eycompo.product_info()).prependTo('#info_content');
        $('#proname').text(x.proname);
        $('#price').text(x.price);
        $('#company').text(x.company);
        $('#proimg').attr('src',$.img() + '/reservation/' + x.proimg);
        $('#category').text(x.category);
        $('#proaddress').text(x.address);
        $('#fishname').text(x.fishname);
        $('#phone').text(x.phone);
        $('#resdate').text(x.today);
        
		let pro ={pronum:x.pronum,proname:x.proname,price:x.price,company:x.company,address:x.address,category:x.category,proimg:x.proimg,
				  regidate:x.today,lastday:x.lastday,fishname:x.fishname,phone:x.phone,lat:x.lat,lng:x.lng, today:x.today, lastday:x.lastday};

        $('#select_item').attr('style','cursor:pointer').attr('data-toggle','modal').attr('data-target','#myModal').click(function(e){
        	$('#myModal').attr('style','display: block; z-index:99999;').appendTo('#myModal');
  			$('.modal-dialog').attr('style','top:200px;');
  			$('.modal-content').attr('style','margin:auto;');
  			$('.modal-title').empty();
  			$('.modal-body').empty();
  			$('.modal-footer').empty();
  			$(' <h4 class="modal-title">'+ x.company +'</h4>').appendTo('.modal-title');
  			$('<div class="checkbox"><label><input class="checkbox" type="checkbox" value=""> 상품명 : '+ x.proname + '[가격 : ' +x.price+ '원]</label></div>').appendTo('.modal-body');
  			$('<button id="paybtn" type="button" class="btn btn-default" data-dismiss="modal">결제하기</button>').prependTo('.modal-footer').click(e=>{
<<<<<<< HEAD
<<<<<<< HEAD
  				prdres();

  				prdres();

  				prdres();

=======
>>>>>>> b246bade3d506c2db4e0d67ad84d1fbce3b7ce1a
  				prdres(resinfo);
=======
  				prdres(pro);
>>>>>>> 3087dcfe3cffaa4d2bc465ff845da52000a598b5
  			});
  			$('<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>').appendTo('.modal-footer');
        });
     };
    
     //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*상품예약 : 인원선택*/
     
     let prdres =x=>{
     	$(f_ctt).empty();
 		$(eycompo.product_res()).appendTo(f_ctt);
 		$('#proname').text(x.proname);
 		$('#company').text(x.company);
 		$('#startdate').text(x.startdate);
 	    $('#proname1').text(x.proname);
 	    $('#price').text(x.price);
 	    $('.count_plus').click(function(){
 	    	let count = Number($('.count').val()) + 1;
 	    	$('.count').val(count);
 	    });
 	    
 	    $('.count_minus').click(function(){
 	    	if(Number($('.count').val()) < 1){
 	    		let count = 0;
 	    		$('.count').val(count);
 	    		prdres(count);
 	    	}else{
 	    		let count = Number($('.count').val()) - 1;
 	 	    	let totalprice = price * count;
 	    	}
 	    });
 	    
 		$('.reserve_btn').click(e=>{
			e.preventDefault();
			let pro ={pronum:x.pronum,proname:x.proname,price:x.price,company:x.company,address:x.address,category:x.category,proimg:x.proimg,
					  regidate:x.today,lastday:x.lastday,fishname:x.fishname,phone:x.phone,lat:x.lat,lng:x.lng, today:x.today, lastday:x.lastday};
			reserve_pro(pro);
 			
/* 				$('#handleCounter').handleCounter({
 					  minimum: 1,
 					  maximize: null});*/
 				
 			/*	$.ajax({
 					url :_+'/reservation',
 					type : 'POST',
 					data :JSON.stringify(data),
 					dataType :'json',
 					contentType :'application/json',
 					success : d=>{
 						alert('AJAX 성공 : ' + d.msg);
 					},
 					error : e=>{
 						alert('AJAX실패');
 					}
 				});	*/
 			});
     };
     
     //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*상품결제 : 결제값입력*/
     let reserve_pro =x=>{
			$(f_ctt).empty();
			$(eycompo.reserve_pro()).appendTo(f_ctt);
			$('#proname').text(x.proname);
			$('.tb1').text(x.proname);
			$('.tb3').text(x.price);
			$('div.price_box dd').text(x.price);
			$('#to_price').text(x.price);
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
            +'<link class="homecss" href="https://fonts.googleapis.com/css?family=Raleway:300,400,600,600i,700" rel="stylesheet">'
            +'<link class="homecss" href="/web/resources/css/home/style.css" rel="stylesheet">';
         
         rescss = '<link class="rescss" rel="stylesheet" type="text/css" href="/web/resources/css/reservation/modal.css"> '
             +'<link class="rescss" rel="stylesheet" href="/web/resources/css/reservation/navbar.css">'
             +'<link class="rescss" rel="stylesheet" href="/web/resources/css/reservation/resdetail.css">'
             +'<link class="rescss" rel="stylesheet" href="/web/resources/css/reservation/prdpay.css">';
         
         instacss =' <link class="instacss" rel="stylesheet" type="text/css" href="/web/resources/css/aquagram/style.css">'
             +' <link class="instacss" rel="stylesheet" type="text/css" href="/web/resources/css/aquagram/animate.css">'
             +' <link class="instacss" rel="stylesheet" type="text/css" href="/web/resources/css/aquagram/structure.css">'
             +' <link class="instacss" rel="stylesheet" type="text/css" href="/web/resources/css/aquagram/docs.min.css"> '
             +' <link class="instacss" rel="stylesheet" type="text/css" href="/web/resources/css/aquagram/default_css.css">';
             
    };
    return {init:init, searchlist:searchlist, ocean:ocean, river:river, hotel:hotel, detail:detail, 
    		/*prolist:prolist,*/ datepicker:datepicker, search:search, prdres:prdres};
})();