"use strict";
var eunyeong = eunyeong || {};
eunyeong = (()=>{
    const WHEN_ERR = '호출하는 JS파일을 찾지 못지 못했습니다.'
    let _,compojs, js,
        m_ctt, s_ctt, f_ctt, start_date;
    let homecss,admincss,rescss,instacss;
    
    let init =x=>{
        _= $.ctx();
    	js = $.js();
        compojs = js + '/component/eycompo.js';
        m_ctt = '#main-container';
        s_ctt = '#search_content';
        f_ctt = '#features-content';
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
            $('#wrapper').html(eycompo.commonnav())
            $(eycompo.main_search()).appendTo('#wrapper');
            css();
            navcss(); 
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
            $('#home').click(e=>{
            
            e.preventDefault();
            $('.rescss').remove();
            $('.instacss').remove();
            $(homecss).appendTo('head');
            location.assign('/web');
            app.init();
            });
            $('#ocean').click(()=>{
            	ocean();
            });
            
            $('#river').click(()=>{
            	river();
            });
            
            $('#hotel').click(()=>{
            	hotel();
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
	
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////*페이지네이션 : 그리기 */	
	
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
           		    			alert('AJAX성공' + d.product.address);
           		    			let aa = {proname:d.product.proname,price:d.product.price,company:d.product.company,
           		    					  address:d.product.address,category:d.product.category,proimg:d.product.proimg,
           		    					  regidate:d.product.regidate,lastday:d.product.lastday,
           		    					  fishname:d.product.fishname,phone:d.product.phone,lat:d.product.lat,lng:d.product.lng}
           		    			detail(aa);
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
	                		    			let aa = {proname:d.proname,price:d.price,company:d.company,
	                		    					  address:d.address,category:d.category,proimg:d.proimg,
	                		    					  regidate:d.today,lastday:d.lastday,
	                		    					  fishname:d.fishname,phone:d.phone,lat:d.lat,lng:d.lng}
	                		    			detail(aa);
	                		    		},
	                		    		error :e=>{
	                		    			alert('AJAX실패');
	                		    		}
	                		    	});
	            			})
    	            })
    		})
    };

    /*검색창 : 도시명*/
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

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*상품정보 : 상세 */
    let detail =x=>{
        $(s_ctt).remove();
        $(m_ctt).remove();
        $(document).ready(function() {
        	initMap(x);
        });
        $(f_ctt).attr('class','container');

        //전체보기에서 가져온 date값으로 캘린더를 그져보자 
        $(eycompo.calender()).appendTo(f_ctt);
            $.each(['1','2','3','4','5'], (i,j)=>{
            	$( '<tr>'
                        +'<td style="color: #666;"><a class="off"><strong>'+ j.day +'</strong></a></td>'
                        +'<td style="color: #666;"><a class="off"><strong>29</strong></a></td>'
                        +'<td style="color: #666;"><a class="off"><strong>30</strong></a></td>'
                        +'<td><a class="cal_cell_date" data-date="2019-05-01"><strong>1</strong><img src="https://img.moolban.com/unsafe/asset/www/responsive/img/weather/weather-30.png" alt=""><span class="mul">3물</span></a></td>'
                        +'<td><a class="cal_cell_date" data-date="2019-05-02"><strong>2</strong><img src="https://img.moolban.com/unsafe/asset/www/responsive/img/weather/weather-10.png" alt=""><span class="mul">4물</span></a></td>'
                        +'<td><a class="cal_cell_date" data-date="2019-05-03"><strong>3</strong><img src="https://img.moolban.com/unsafe/asset/www/responsive/img/weather/weather-10.png" alt=""><span class="mul">5물</span></a></td>'
                        +'<td><a class="cal_cell_date" data-date="2019-05-04"><strong>4</strong><img src="https://img.moolban.com/unsafe/asset/www/responsive/img/weather/weather-10.png" alt=""><span class="mul">6물</span></a></td>'
                    +'</tr>').appendTo('.calendar');
        });
        
        $('#info_content').prepend(eycompo.product_info());
        $('#proname').text(x.proname);
        $('#price').text(x.price);
        $('#company').text(x.company);
        $('#proimg').attr('src',$.img() + '/reservation/' + x.proimg);
        $('#category').text(x.category);
        $('#proaddress').text(x.address);
        $('#fishname').text(x.fishname);
        $('#phone').text(x.phone);
        $('#resdate').text(x.regidate);
        
        let resinfo = {proname:x.proname,price:x.price,pronum:x.pronum, proimg:x.proimg, 
        		fishname:x.fishname, company:x.company}

        $('#select_item').attr('style','cursor:pointer').attr('data-toggle','modal').attr('data-target','#myModal').click(function(e){
        	$('#myModal').attr('style','display: block; z-index:99999;').appendTo('#myModal');
  			$('.modal-dialog').attr('style','top:200px;');
  			$('.modal-content').attr('style','margin:auto;');
  			$('.modal-title').empty();
  			$('.modal-body').empty();
  			$('.modal-footer').empty();
  			$(' <h4 class="modal-title">'+ x.company +'</h4>').appendTo('.modal-title');
  			$('<div class="checkbox"><label><input type="checkbox" value=""> 상품명 : '+ x.proname + '[가격 : ' +x.price+ '원]</label></div>').appendTo('.modal-body');
  			$('<button id="paybtn" type="button" class="btn btn-default" data-dismiss="modal">결제하기</button>').prependTo('.modal-footer').click(e=>{
  				prdres(resinfo);
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
 	    $('#price').text(x.price);
 	    $('#proname1').text(x.proname);
 			
 			$('.reserve_btn').click(e=>{
 				e.preventDefault();
 				alert('버튼클릭');
 				$(f_ctt).empty();
 				$(eycompo.complete_pay()).appendTo(f_ctt);
 				let data ={resdate:x.today, /*rescount:x.count, */deposit:x.price, proname:x.proname, pronum:x.pronum};
 			
 				$('#check_res').click(e=>{
 					alert('버튼클릭222');
 	 				$(f_ctt).empty();
 	 				$(eycompo.list_res()).appendTo(f_ctt);
 	 				$('.cancel_btn').click(e=>{
 	 					alert('버튼클릭333 일단 마이페이지로 이동');
 	 	 				$(f_ctt).empty();
 	 	 				$(eycompo.mypage()).appendTo(f_ctt); 	 				
 	 	 				})
 				});
 				
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

/*    인원 카운트*/
	    function plus(x){
 	        count++;
 	    }
 	    function minus(x){
 	      if (count > 1) {
 	        count--;
 	      }  
 	    };

    
    let css = ()=>{
         homecss ='<link class="homecss" rel="stylesheet" type="text/css" href="/web/resources/css/home/homemain.css">'
            +'<link class="homecss" href="https://fonts.googleapis.com/css?family=Raleway:300,400,600,600i,700" rel="stylesheet">'
            +'<link class="homecss" href="/web/resources/css/home/style.css" rel="stylesheet">';
         
         rescss = '<link class="rescss" rel="stylesheet" href="/web/resources/css/reservation/common.css">'
			 +'<link class="rescss" rel="stylesheet" type="text/css" href="/web/resources/css/reservation/modal.css"> '
		 	 +'<link class="rescss" rel="stylesheet" href="/web/resources/css/reservation/main.css">'
             +'<link class="rescss" rel="stylesheet" href="/web/resources/css/reservation/navbar.css">'
             +'<link class="rescss" rel="stylesheet" href="/web/resources/css/reservation/resdetail.css">'
             +'<link class="rescss" rel="stylesheet" href="/web/resources/css/reservation/responsive_basic.css">'
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