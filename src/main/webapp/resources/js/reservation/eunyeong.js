"use strict";
var eunyeong = eunyeong || {};
eunyeong = (()=>{
    const WHEN_ERR = '호출하는 JS파일을 찾지 못지 못했습니다.'
    let _,compojs, js,
        m_ctt, s_ctt, f_ctt;
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
  
    let ocean =()=>{
        $(m_ctt).empty();
        $(s_ctt).attr('style','background:#242c36 url(/web/resources/img/reservation/ocean.jpg)');
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
        prolist();
    };
    
    let river =()=>{
    	alert('river진입');
            $(m_ctt).empty();
            $(eycompo.main_container()).appendTo(m_ctt);
            $('input.btn[type=submit]').click(e=>{
                e.preventDefault();
                alert('민물화면이다');
            });
    };
    
    let hotel =()=>{
        $.when($.getScript(compojs))
        .done(()=>{
            $(m_ctt).empty();
            $(eycompo.main_container()).appendTo(m_ctt);
            $('input.btn[type=submit]').click(e=>{
                e.preventDefault();
                alert('숙박화면이다');
            });
        });
    };

    /*메인 검색창 : 키워드 */
    let search =()=>{
    	let keyword ={
    			proword:$('#search_keyword').val()};
    	alert('keyword에 들어온 값' + keyword.proword);
    	$.getJSON(_+'/prosearch/' + keyword.proword,d=>{
    		alert('Ajax 성공')
    		$(s_ctt).remove();
    		$(m_ctt).empty();

    		$(eycompo.search_bar()).prependTo(m_ctt);

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
    	            			.appendTo(m_ctt);
    	            		
/*    	            			.click(function(){
    	            				let proid = $(this).attr('id');
    	            				alert('prolist의 id' + proid);
    	                				$.ajax({
    	                		    		url:_+'/products/'+ proid,
    	                		    		type:'POST',
    	                		    		data : JSON.stringify(proid),
    	                		    		dataType :'json',
    	                		    		contentType :'application/json',
    	                		    		success : d=>{
    	                		    			alert('AJAX성공' + d.product.proname);
    	                		    			let aa = {proname:d.product.proname,price:d.product.price,company:d.product.company,
    	                		    					  address:d.product.address,category:d.product.category,proimg:d.product.proimg,
    	                		    					  regidate:d.product.regidate,fishname:d.product.fishname,phone:d.product.phone,
    	                		    					  lat:d.product.lat,lng:d.product.lng}
    	                		    			detail(aa);
    	                		    		},
    	                		    		error :e=>{
    	                		    			alert('AJAX실패');
    	                		    		}
    	                		    	});
    	            			})*/
    	            })//each종료 
    		})
    };

    /*검색창 : 도시명*/
    let searchlist =()=>{
        $(s_ctt).remove();
        $(m_ctt).empty();
        $(eycompo.search_bar()).prependTo(m_ctt);
        prolist();
        $('button[type=button]').click(e=>{
            e.preventDefault();
            $(m_ctt).empty();
            prolist();
            $(i_ctt).click(function(){
                alert('바다3상세화면');
                item();
            });
        });
    };
    
    /*datepicker*/
    let datepicker =()=>{
    	  $(function() {
    		    $("#datepicker").datepicker();
    		  });
    };
    
    /*상세정보 : 상품 */
    let detail =x=>{
        $(s_ctt).remove();
        $(m_ctt).empty();
        $(document).ready(function() {
        	initMap(x);
        });
        $(m_ctt).attr('class','')
        $(m_ctt).attr('class','container')
        $('#feat').css('padding-top','0')
        $(eycompo.item_container()).appendTo(m_ctt);
        $('#info_content').prepend(eycompo.product_info());
        $('#proname').text(x.proname);
        $('#price').text(x.price);
        $('#company').text(x.company);
        $('#proimg').attr('src',$.img() + '/reservation/' + x.proimg);
        $('#category').text(x.category);
        $('#proaddress').text(x.address);
        $('#fishname').text(x.fishname);
        $('#phone').text(x.phone);
        
        $('#select_item').attr('style','cursor:pointer').attr('data-toggle','modal').attr('data-target','#myModal').click(function(e){
        	payment();
        });
     };
    
      let payment =()=>{
  			$('#myModal').attr('style','display: block; z-index:99999;');
  			$('.modal-dialog').attr('style','top:200px;');
  			$('.modal-content').attr('style','margin:auto;');
  			$('.modal-title').text('상품선택하기');
  			$('<div class="checkbox"><label><input type="checkbox" value="">상품 : 광어</label></div>'
  			+'<div class="checkbox"><label><input type="checkbox" value="">어종 </label></div>').appendTo('.modal-body');
  			$('.modal-footer').attr('button', '선택완료');
  			
  	};
      
    /*상품 전체보기 */
    let prolist =()=>{
    	$.getJSON(_+'/products', d=>{
    		$(m_ctt).empty();
    		
            $.each(d, (i,j)=>{
            	$('<div class="col-sm-4">'
            			+'	<div class="left-widget-sidebar">'
            			+'		<div class="card-widget bg-white user-card" style="height:400px">'              
            			+'			<div id="proimg" class="u-img img-cover" style="background-image: url(/web/resources/img/reservation/'+ j.proimg + ');background-size:cover; height: 300px;"></div>'
            			+'					<div class="u-content"></br></br>'
            			+'					<h5>' + j.company + '</h5>'
            			+'					<p class="text-muted">' + j.price +'</p>'
            			+'					</div>'
            			+'					</div>'
            			+'				</div>'
            			+'			</div>'
            			+'		</div>')
            			.attr('id', j.pronum)
            			.appendTo(m_ctt)
            			.click(function(){
            				let proid = $(this).attr('id');
            				alert('prolist의 id' + proid);
                				$.ajax({
                		    		url:_+'/products/'+ proid,
                		    		type:'POST',
                		    		data : JSON.stringify(proid),
                		    		dataType :'json',
                		    		contentType :'application/json',
                		    		success : d=>{
                		    			alert('AJAX성공' + d.product.proname);
                		    			let aa = {proname:d.product.proname,price:d.product.price,company:d.product.company,
                		    					  address:d.product.address,category:d.product.category,proimg:d.product.proimg,
                		    					  regidate:d.product.regidate,fishname:d.product.fishname,phone:d.product.phone,
                		    					  lat:d.product.lat,lng:d.product.lng}
                		    			detail(aa);
                		    		},
                		    		error :e=>{
                		    			alert('AJAX실패');
                		    		}
                		    	});
            			})
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
    
    function initMap(x) {
  	  // The location of Uluru
  	  var uluru = {lat: x.lat, lng: x.lng};
  	  // The map, centered at Uluru
  	  var map = new google.maps.Map(
  	      document.getElementById('map'), {zoom: 15, center: uluru});
  	  // The marker, positioned at Uluru
  	  var marker = new google.maps.Marker({position: uluru, map: map});
  }
    
    let css = ()=>{
         homecss ='<link class="homecss" rel="stylesheet" type="text/css" href="/web/resources/css/home/homemain.css">'
            +'<link class="homecss" href="https://fonts.googleapis.com/css?family=Raleway:300,400,600,600i,700" rel="stylesheet">'
            +'<link class="homecss" href="/web/resources/css/home/style.css" rel="stylesheet">';
         
         rescss = '<link class="rescss" rel="stylesheet" href="/web/resources/css/reservation/common.css">'
			 +'<link class="rescss" rel="stylesheet" type="text/css" href="/web/resources/css/reservation/modal.css"> '
		 	 +'<link class="rescss" rel="stylesheet" href="/web/resources/css/reservation/main.css">'
             +'<link class="rescss" rel="stylesheet" href="/web/resources/css/reservation/navbar.css">'
             +'<link class="rescss" rel="stylesheet" href="/web/resources/css/reservation/resdetail.css">';
 
         instacss =' <link class="instacss" rel="stylesheet" type="text/css" href="/web/resources/css/aquagram/style.css">'
             +' <link class="instacss" rel="stylesheet" type="text/css" href="/web/resources/css/aquagram/animate.css">'
             +' <link class="instacss" rel="stylesheet" type="text/css" href="/web/resources/css/aquagram/structure.css">'
             +' <link class="instacss" rel="stylesheet" type="text/css" href="/web/resources/css/aquagram/docs.min.css"> '
             +' <link class="instacss" rel="stylesheet" type="text/css" href="/web/resources/css/aquagram/default_css.css">';
             
    };
    return {init:init, searchlist:searchlist, ocean:ocean, river:river, hotel:hotel, detail:detail, 
    		prolist:prolist, datepicker:datepicker, payment:payment, search:search};
})();