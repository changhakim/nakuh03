var arti = arti || {};
arti =(()=>{
	let homecss,admincss,rescss,instacss;
	let setPath=()=>{
		 _= $.ctx();
		 js = $.js();
	};
	let init =()=>{
		setPath();
		onCreate();
	};
	let onCreate =()=>{
		setContentView();
	};
	let setContentView =()=>{
		$.when(
				$.getScript($.js()+'/component/jwcompo.js'),
				$.getScript($.js()+'/aquagram/auth.js'),
				$.getScript($.js()+'/reservation/eunyeong.js')
			).done(()=>{
				feed_my();
				arti_upload();
				
				
				
			});  
		
		
	};
	let feed_my=()=>{
		$('#donw_content').html(jwcompo.insta_base());
		let box = '';
		let dl = {};
		let mid ='ahah123';
		let url = _+'/myfeed/'+mid;
		$.ajax({
			url: url+'',
			type: 'get',
			data: JSON.stringify(mid),
			dataType: 'json',
			contentType: 'application/json; charset=UTF-8;',
			success: d=>{
				alert('성공!');
/*				dl = {
					 mid : d.myList.mid.val(),
					 artnum : d.myList.artnum,
					 content : d.myList.content,
					 artdate : d.myList.artdate,
					 artphoto : d.myList.artphoto,
					 ext : d.myList.extension
						};*/
				$.each(d.myList,(i,j)=>{
					box += '<div id="feeds">'
						+'			<div id="myfeed_'+j.artnum+'" class="col-xs-12 col-sm-6 col-md-4 col-lg-3">'
					+'			<a src="resources/img/aquagram/articles/'+j.artphoto+'.'+j.extension+'">'
					+'			<div class="img-featured-container">'
					+'			<div class="img-backdrop"></div>'
					+'			<div class="description-container">'
					+'			<p class="caption">'+j.content+'</p>'
					+'			<span class="likes"><i class="glyphicon glyphicon-heart"></i></span>'
					+'			<span id="comtag" class="comments"><i class="glyphicon glyphicon-comment">'+j.comcount+'</i></span>'
					+'			</div>'
					+'			<img src="resources/img/aquagram/articles/'+j.artphoto+'.'+j.extension+'" id="'+j.artnum+'" class="img-responsive">'
					+'			</div>'
					+'			</a>'
					+'			</div>'
					+'			</div>'
				
					
					


				});
				$(box).appendTo('#instafeed');
				$('.photo-box').attr('style','margin:-26px 0px 30px -29px');
				$('head').after(jwcompo.photo_feed_css_hover());
				
	/*			$(this).click(function(){
					$(this).children('a').attr('src','resources/img/aquagram/test_img.jpg');
					$(this).children('img').attr('src','resources/img/aquagram/test_img.jpg');
					 console.log($(this).children('a'));
					alert('클릭??::');
				});*/
				$('#instafeed').children('#feeds').attr('data-toggle','modal').attr('data-target','#myModal').click(function(e){
					e.preventDefault();
				//	alert('???'+this);
				//	console.log(this);
				//	console.log($(this)[0]);
				//	alert($(this).find('img').attr('src'));
					let od = { artphoto : $(this).find('img').attr('src'),
								artnum : $(this).find('img').attr('id')};
					arti_detail(od);

				});
				
			},
			error: e=>{
				alert('에러!');
			}
				
		});
		

		
		
		
		
	};
	let arti_detail =(x)=>{
		$('#change_modal_2').empty();
		//alert('xx'+x.artnum);
		let artnum = x.artnum;
		//alert('xx'+artnum);
		let comlist='';
		$.ajax({
			url: _+'/arti/detail/'+artnum,
			type: 'get',
			data: JSON.stringify(artnum),
			dataType: 'json',
			contentType: 'application/json; charset=UTF-8;',
			success: d=>{
				$('#myModal').attr('style','display: block; z-index:99999;');
				$('.modal-dialog').attr('style','top:200px;');
				$('.modal-dialog').attr('class','modal-dialog modal-lg');
				$('.modal-content').attr('style','margin:auto;');
				$('.modal-header').remove();
				$('.modal-body').remove();
				$('.modal-footer').remove();
				$('#change_modal_2').html(
						'        <div class="modal-body">'
						+'          <div  class="col-sm-8" style="height: 600px; display: block;"><img src="resources/img/aquagram/articles/'+d.als.artphoto+'.'+d.als.extension+'" width="600" height="600"></div>'
						+'          <div class="col-sm-4" style="background-color:#fff; height: 600px; ">'
						+'              <div class="row" id="user_info" style="padding-bottom: 7px; border-bottom: 1px solid #ddd;">'
						+'                    <div class="group-item" style="height: 58px; border: none; margin-top: 15px; margin-left: 0px; display: inline-flex;">'
						+'                        <img class="img-circle" alt="Cinque Terre" src="resources/img/aquagram/profilephoto/'+d.als.profilephoto+'" style="width: 50px; height: 50px; position: center"/>'
						+'                        <div style="margin-left: 11px;"><h5 style="top:-5px; left: -1px; font-weight:bold; margin-bottom: 0px;" >'+d.als.mid+'</h5><div style="font-size: 5px;">'+d.als.mname+'</div></div>'
						+'                            <div style="top:-55px; left: 60px; font-size: 5px; display:-webkit-inline-box;"> </div>'
						+'                              <div style="right: 0"><h5 style="top: 0px; left: -10px; font-weight:bold; margin-left: 135px;" ><i class="glyphicon glyphicon-option-horizontal"></i></h5></div>'
						+'                        </div> '
						+'                    </div> '
						+'           <div class="row">'
						+'    <ul class="nav bs-docs-sidenav" style="-ms-overflow-style: none; overflow:scroll; width:100%; height:335px; border:1px solid #ddd; border-top: none;">'
						+'     		<div id="item" style="top: 5px;">'
						+'                  <div class="list-group-item list-group-item-action" id="comments_my" style="height: 58px; border: none; display: -webkit-box;"> '
						+'                <img class="img-circle" alt="Cinque Terre" src="resources/img/aquagram/profilephoto/'+d.als.profilephoto+'" style="width: 40px; height: 40px; position: center"/>'
						+'                 <div style="display: -webkit-box;"><h5 style="top:0px; left: 7px; font-weight:bold;">'+d.als.mid+'</h5><div><h6 id="contag" style="left: 15px; width: 90%;">'+d.als.content+'</h6></div></div>'
						+'                   <div style="font-size: 5px; left: 105px; top: 8px;">'+d.als.artdate+'</div>'
						+'                </div> '
						+'              </div> '
						+'         <li>'
						+'         <div class="comments_list" id="comments_list">'
						+'             </div>               '
						+'        </li>'
						+'          </ul>'
						+'            </div>'
						+'        </div>'
						+'    </div>'
						+'  </div>'
						+'</div>');
				$.each(d.tls,(i,j)=>{
					$('#contag').append('&nbsp;<a>'+j.tagname+'</a>');
				});
				$.each(d.cls,(i,j)=>{
					comlist +=	'     <div id="item">'
					+'                  <div class="list-group-item list-group-item-action" style="height: 58px; border: none; display: -webkit-box;"> '
					+'                <img class="img-circle" alt="Cinque Terre" src="resources/img/aquagram/profilephoto/'+j.comprophoto+'" style="width: 40px; height: 40px; position: center"/>'
					+'                 <div style="display: -webkit-box;"><h5 style="top:0px; left: 7px; font-weight:bold;">'+j.comid+'</h5><div style="width: 100%;"><h6 style="left: 15px;">'+j.comm+'</h6></div></div>'
					+'                    <div style="top:0px; left: 60px; font-size: 7px;"></div>'
					+'                </div> '
					+'              </div> '
					
				});
				$(comlist).appendTo('#comments_list');
				
			},
			error:e=>{
				alert('에러!');
			}
			
			
		});
		
		
	};
	let arti_upload =()=>{
		$('#art_upload').attr('style','cursor:pointer').attr('data-toggle','modal').attr('data-target','#myModal').click(function(e){
			e.preventDefault();
			$('#myModal').attr('style','display: block; z-index:99999;');
			$('.modal-dialog').attr('class','modal-dialog');
			$('.modal-dialog').attr('style','top:200px;')
			$('.modal-content').attr('style','margin:auto;');
		


		});
	};
	
	
	
	return {init:init, arti_upload:arti_upload};
	
	
})();