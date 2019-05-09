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
			css();
			kakao($.ctx());
			$(homecss).appendTo('head');
			$('#loginbtn').click(function(e){
				$('#id01').css('display','block');
				if(e.target === $('#id01')){
				$('#id01').css('display','none');
				}
				$('.close1').click(()=>{
					$('#id01').css('display','none');
				})
			})
			$('#login').click(()=>{
				$('#userid').val();
				$('#password').val();
				alert('로그인')
			});

			$('#ocean').click(e=>{
				e.preventDefault();
				$('.homecss').remove();
				$('.instacss').remove();
				$('.admincss').remove();
				$(rescss).appendTo('head')
				eunyeong.init('ocean');
			})
			$('#river').click(e=>{
				e.preventDefault();
				$('.homecss').remove();
				$('.instacss').remove();
				$('.admincss').remove();
				$(rescss).appendTo('head')
				eunyeong.init('river');
			})
			$('#hotel').click(e=>{
				e.preventDefault();
				$('.homecss').remove();
				$('.instacss').remove();
				$('.admincss').remove();
				$(rescss).appendTo('head')
				eunyeong.init('hotel');
			})
			$('#aqua').click(e=>{
				e.preventDefault();
				$('.homecss').remove();
				$('.rescss').remove();
				$(instacss).appendTo('head');
				jeonguk.init();
				alert('아쿠아리움')
			})
			$('#adminbtn').click(()=>{
				$('.homecss').remove();
				$('.rescss').remove();
				$('.instacss').remove();
				$(admincss).appendTo('head')
				changha.init();
				
			})

		});
	}
	let css = ()=>{
		 homecss = '<link class="homecss" rel="stylesheet" type="text/css" href="/web/resources/css/home/homemain.css" />'
			+'<link class="homecss" href="https://fonts.googleapis.com/css?family=Raleway:300,400,600,600i,700" rel="stylesheet">'
			+'<link class="homecss" href="/web/resources/css/home/style.css" rel="stylesheet">';
		 
		 
		 admincss='<link class="admincss" href="/web/resources/css/admin/animate.min.css" rel="stylesheet"/>'
			 +'<link class="admincss" href="/web/resources/css/admin/light-bootstrap-dashboard.css?v=1.4.0" rel="stylesheet"/>'
			 +'<link class="admincss" href="/web/resources/css/admin/demo.css" rel="stylesheet" />'
			 +'<link class="admincss" rel="stylesheet" href="/web/resources/css/admin/pe-icon-7-stroke.css">';
			 
	
         rescss = '<link class="rescss" rel="stylesheet" href="/web/resources/css/reservation/common.css">'
			 +'<link class="rescss" rel="stylesheet" type="text/css" href="/web/resources/css/reservation/modal.css"> '
		 	 +'<link class="rescss" rel="stylesheet" href="/web/resources/css/reservation/main.css">'
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
			
	
	let kakao=(x)=>{
		
        $('#kakao_login_btn').attr('style','cursor:pointer').click(function loginWithKakao() {
        	Kakao.init('f7d32ac01021f4eb79136a2e7d1c5523');
        	Kakao.Auth.login({
              success: function(authObj) {
            	  alert('카카오 개인정보 제공 동의?=====1');
                   Kakao.API.request({
                         url: '/v1/user/me',
                         success: function(res) {
                       	  alert('카카오 개인정보 제공 동의?=====2');
                        	 alert('??'+$.ctx());
                               alert(JSON.stringify(res));
                               alert(JSON.stringify(authObj));
                               console.log(res.id);
                               console.log(res.kaccount_email);
                               console.log(res.properties['nickname']);
                               console.log(authObj.access_token);
                               Kakao.Auth.setAccessToken(authObj.access_token, true);
                               sessionStorage.setItem('session', Kakao.Auth.getAccessToken());
                               let resdata = { 
                            	  id:res.id,
                            	  email:res.kaccount_email,
                            	  profileimg:res.properties['profile_image'],
                            	  name:res.properties['nickname']
                               };
                               /* 새로 가입할 경우 이름, 휴대폰, 생년월일 받을지 안받을지 고민. 
                                * $('#change_login_form').html('<label for="uname"><b>이름</b></label>'
									+'<input type="text" placeholder="성함입력" name="mname" id="mname" required>'
									+'<label for="mphone"><b>휴대폰번호</b></label>'
									+'<input type="mphone" placeholder="mphone" name="mphone" id="mphone" required>'
									+'<label for="psw"><b>생년월일</b></label>'
									+'<input type="birth" placeholder="YYMMDD" name="birth" id="birth" required>'
									+'<button id="add_info" type="submit"> 입력 </button>');
                               */
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
                                       $('#loginbtn').attr('id','logout');
                                       $.each(d.m,(i,j)=>{
                                    	   alert('??::'+j.mid);
                                       });
                                       
                                       //location.assign(x+"/ngh");
                                      
                                   },
                                   error:function(err){
                                       alert('실패');
                                       kakao(x);
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