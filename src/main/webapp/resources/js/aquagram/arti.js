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
				
				
				
			},
			error: e=>{
				alert('에러!');
			}
				
		});
		/*$.getJSON(url, d=>{
			alert('getJSON 시작'+url);
			
			
		});*/

			
			
		let a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
		let box = '';
		
//		$('.navbar').attr('style','font-size:9pt');		
		
		/*		$('#instafeed').attr('id','instafeed-gallery-feed').addClass('gallery row no-gutter');
		$('#instafeed').appendTo('<button id="btn-instafeed-load" class="btn">Load more</button>');
		let galleryFeed = new Instafeed({
			  get: "user",
			  userId: 4622774,
			  accessToken: "4622774.7cbaeb5.ec8c5041b92b44ada03e4a4a9153bc54",
			  resolution: "standard_resolution",
			  useHttp: "true",
			  limit: 6,
			  template: '<div class="col-xs-12 col-sm-6 col-md-4"><a href="{{image}}"><div class="img-featured-container"><div class="img-backdrop"></div><div class="description-container"><p class="caption">{{caption}}</p><span class="likes"><i class="icon ion-heart"></i> {{likes}}</span><span class="comments"><i class="icon ion-chatbubble"></i> {{comments}}</span></div><img src="{{image}}" class="img-responsive"></div></a></div>',
			  target: "instafeed-gallery-feed",
			  after: function() {
			    // disable button if no more results to load
			    if (!this.hasNext()) {
			      btnInstafeedLoad.setAttribute('disabled', 'disabled');
			    }
			  },
			});
			galleryFeed.run();

			var btnInstafeedLoad = document.getElementById("btn-instafeed-load");
			btnInstafeedLoad.addEventListener("click", function() {
			  galleryFeed.next()
			});
			*/
		

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