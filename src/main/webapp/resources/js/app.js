"use strict";
var app = app||{};
app=(()=>{
	let homecss,admincss,rescss,instacss
	let init=x=>{
		app.$.init(x);

	};
	let onCreate=()=>{
		setContentView();
	};
	let setContentView=()=>{
		$.when(
		$.getScript($.js()+'/reservation/eunyeong.js'),
		$.getScript($.js()+'/aquagram/jeonguk.js'),
		$.getScript($.js()+'/admin/changha.js')
		).done(()=>{
			app_defualt_loader();
		});
	};
	
	//미사용시 삭제. 다른 js 에서 세션 안먹음.
	let session_u ={userid:sessionStorage.getItem('userid'),
					userpo:sessionStorage.getItem('userpo')};
	
	let app_defualt_loader =()=>{
		css();
		logManager();
		$(homecss).appendTo('head');

		$('#login').click(()=>{
			$('#userid').val();
			$('#password').val();
			alert('로그인')
		});

		$('.ocean').click(e=>{
			e.preventDefault();
			alert('app')
			$('.homecss').remove();
			$('.instacss').remove();
			$('.admincss').remove();
			$(rescss).appendTo('head')
			eunyeong.init('ocean');
		})
		$('.river').click(e=>{
			e.preventDefault();
			$('.homecss').remove();
			$('.instacss').remove();
			$('.admincss').remove();
			$(rescss).appendTo('head')
			eunyeong.init('river');
		})
		$('.hotel').click(e=>{
			e.preventDefault();
			$('.homecss').remove();
			$('.instacss').remove();
			$('.admincss').remove();
			$(rescss).appendTo('head')
			eunyeong.init('hotel');
		})
		$('.newsfeed').click(e=>{
			e.preventDefault();
			$('.homecss').remove();
			$('.rescss').remove();
			$(instacss).appendTo('head');
			jeonguk.init();
			alert('아쿠아리움')
		})
		$('#adminbtn').click(()=>{
			alert('들어옴')
			$('.homecss').remove();
			$('.rescss').remove();
			$('.instacss').remove();
			$('#navheader').remove();
			$('#aaadfa').remove();
			$(admincss).appendTo('head')
			changha.init();
		})
		 $('.home').click(e=>{
			 e.preventDefault();
	            $('.rescss').remove();
	            $('.instacss').remove();
	            location.assign('/web');
	            app.init();
	    });
			
	};
	
	let logManager =()=>{

		if(sessionStorage.getItem('userid') != null){
			 $('#loginbtn').text('LOGOUT');
            $('#loginbtn').attr('id','logoutbtn');
            $('#logoutbtn').click(function(e){
           	 e.preventDefault();
           	 logout();
            	});
            } 
		if(sessionStorage.getItem('userid') === null){
			login();
			
		}

			$('kakao_login_btn').click(function(e){
				kakao();
			});
	};
	let login =()=>{
		$('#loginbtn').click(function(e){
			$('#id01').css('display','block');
			if(e.target === $('#id01')){
			$('#id01').css('display','none');
			}
			$('.close1').click(()=>{
				$('#id01').css('display','none');
			})
		});
	};
	
	let logout =()=>{
        	 $('#id01').css('display','none');
        	 sessionStorage.removeItem('userid');
        	 sessionStorage.removeItem('userpo');
             alert('userid::::'+sessionStorage.getItem('userid'));
             alert('photo::::'+sessionStorage.getItem('userpo'));
             $('#logoutbtn').attr('id','loginbtn').text('LOGIN');
             login();
	};
	
	let css = ()=>{
		 homecss ='<link class="homecss" href="/web/resources/css/home/responsive.css" rel="stylesheet">'
			/*+'<link class="homecss" href="/web/resources/css/home/responsive_basic.css" rel="stylesheet">'*/
			+'<link class="homecss" href="/web/resources/css/home/swiper.min.css" rel="stylesheet">'
		 	+'<link class="homecss" rel="stylesheet" type="text/css" href="/web/resources/css/home/homemain.css" />';
		 
		 
		 admincss='<link class="admincss" href="/web/resources/css/admin/animate.min.css" rel="stylesheet"/>'
			 +'<link class="admincss" href="/web/resources/css/admin/light-bootstrap-dashboard.css?v=1.4.0" rel="stylesheet"/>'
			 +'<link class="admincss" href="/web/resources/css/admin/demo.css" rel="stylesheet" />'
			 +'<link class="admincss" rel="stylesheet" href="/web/resources/css/admin/pe-icon-7-stroke.css">';
			 
	
         rescss = '<link class="rescss" rel="stylesheet" type="text/css" href="/web/resources/css/reservation/modal.css"> '
             +'<link class="rescss" rel="stylesheet" href="/web/resources/css/reservation/navbar.css">'
             +'<link class="rescss" rel="stylesheet" href="/web/resources/css/reservation/resdetail.css">'
             +'<link class="rescss" rel="stylesheet" href="/web/resources/css/reservation/prdpay.css">'; 

	 
		 instacss ='  <link rel="stylesheet" type="text/css" href="/web/resources/css/aquagram/style.css">'
			 +'  <link class="instacss" rel="stylesheet" type="text/css" href="/web/resources/css/aquagram/animate.css">'
			 +'  <link class="instacss" rel="stylesheet" type="text/css" href="/web/resources/css/aquagram/structure.css">'
			 +'  <link class="instacss" rel="stylesheet" type="text/css" href="/web/resources/css/aquagram/docs.min.css"> '
			 +'  <link class="instacss" rel="stylesheet" type="text/css" href="/web/resources/css/aquagram/modal.css"> '
			 +'  <link class="instacss" rel="stylesheet" type="text/css" href="/web/resources/css/aquagram/default_css.css">';
	}
	
	let crawl=()=>{
		alert('들어옴')
		 $.ajax({
			  url:$.ctx()+'/wheater',
			  type:'get',
			  data:JSON.stringify(),
			  dataType:'json',
			  contentType:'application/json',
			  success:d=>{
				  alert('업데이트성공')
			  },
			  error:e=>{
				  alert('업데이트 실패')
			  }
			  
		 })
	};
			
	
	let kakao=()=>{
        $('#kakao_login_btn').attr('style','cursor:pointer').click(function loginWithKakao() {
        	Kakao.init('f7d32ac01021f4eb79136a2e7d1c5523');
        	Kakao.Auth.login({
              success: function(authObj) {
            	  alert('카카오 개인정보 제공 동의?=====1');
                   Kakao.API.request({
                         url: '/v1/user/me',
                         success: function(res) {
                       	  alert('카카오 개인정보 제공 동의?=====2');
                       	  		/* alert(JSON.stringify(res));
                               alert(JSON.stringify(authObj));
                               console.log(res.id);
                               console.log(res.kaccount_email);
                               console.log(res.properties['nickname']);
                               console.log(authObj.access_token);*/
                               Kakao.Auth.setAccessToken(authObj.access_token, true);
                               sessionStorage.setItem('kakaosession', Kakao.Auth.getAccessToken());
                               let resdata = { 
                            	  id:res.id,
                            	  email:res.kaccount_email,
                            	  profileimg:res.properties['profile_image'],
                            	  name:res.properties['nickname']
                               };
                               $.ajax({
                                   url: $.ctx()+'/login/kakao/'+res.id,
                                   type: 'POST',
                                   data: JSON.stringify(resdata, authObj),
                                   dataType:'json',
                                   contentType : "application/json; charset=UTF-8",
                                   success: d=>{
                                       alert(d.msg);

 
                                       $('#id01').attr('style','display:none');//닫기 
                                       $('#loginbtn').text('LOGOUT');
                                       $('#loginbtn').attr('id','logoutbtn');
                                       $.each(d.m,(i,j)=>{
                                    	   alert('??::'+j.mid);
                                           sessionStorage.setItem('userid',j.mid);
                                           sessionStorage.setItem('userpo',j.profilephoto);
                                       });
                                       alert('userid::::'+sessionStorage.getItem('userid'));
                                       alert('photo::::'+sessionStorage.getItem('userpo'));
                                       //location.assign(x+"/ngh");
                                      
                                       logManager();
                                   },
                                   error:function(err){
                                       alert('실패');
                                       //kakao();
                                   }
                               });
                               
                             }
                           });
              	
              },
              fail: function(err) {
                alert(JSON.stringify(err));
              }
              
            });
        	
          });
       
	};
	
	
	return {init:init,
			onCreate:onCreate, kakao:kakao }
	
	
})();

app.$={
		init:x=>{
			$.getScript(x+'/resources/js/router.js',
			()=>{
				$.extend(new Session(x))
				app.onCreate(); 
				
			});
			
		}
		
}