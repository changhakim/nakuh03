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
					+'			<span class="comments"><i class="glyphicon glyphicon-comment"></i></span>'
					+'			</div>'
					+'			<img src="resources/img/aquagram/articles/'+j.artphoto+'.'+j.extension+'" class="img-responsive">'
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
					alert('???'+this);
					console.log(this);
					console.log($(this)[0]);
					alert($(this).find('img').attr('src'));
					let od = { artphoto : $(this).find('img').attr('src')};
					$('#myModal').attr('style','display: block; z-index:99999;');
					$('.modal-dialog').attr('style','top:200px;')
					$('.modal-content').attr('style','margin:auto;');
					$('.modal-title').empty();
					$('.modal-body').empty();
					$('.modal-body').append('<div><img src="'+od.artphoto+'" > </div>');

				});
				
			},
			error: e=>{
				alert('에러!');
			}
				
		});
		

		
		
		
		
	};
	let arti_upload =()=>{
		$('#art_upload').attr('style','cursor:pointer').attr('data-toggle','modal').attr('data-target','#myModal').click(function(e){
			e.preventDefault();
			$('#myModal').attr('style','display: block; z-index:99999;');
			$('.modal-dialog').attr('style','top:200px;')
			$('.modal-content').attr('style','margin:auto;');
			$('.modal-title').text('게시물 등록');

		});
	};
	
	
	
	return {init:init, arti_upload:arti_upload};
	
	
})();