var adminres = adminres||{}

adminres = (()=>{
	let cate;
let init = ()=>{
	onCreate();
}
let onCreate=()=>{
	setContentView();
}
let setContentView=()=>{
	$.when(
	$.getScript($.js()+'/component/chcompo.js')	
	).done(()=>{
		$('.main-panel').html(chcompo.admin)
		dateficker();
		$.getJSON($.ctx()+'/admin/reschart',d=>{
			/*reschart(d);*/
			rescharttwo();
		})
		reslist(1);
		$('#searchgo').click(()=>{
			searchres();
		})
	})

}
let reslist=x=>{
	$.getJSON($.ctx()+'/admin/reserv/'+x,d=>{
		$('#restable').html('<thead>'
					+'    <tr>'
					+'      <th style="text-align: center;"scope="col">예약번호</th>'
					+'      <th style="text-align: center;"scope="col">고객아이디</th>'
					+'      <th style="text-align: center;"scope="col">예약자명</th>'
					+'      <th style="text-align: center;"scope="col">상호명</th>'
					+'      <th style="text-align: center;"scope="col">상품명</th>'
					+'      <th style="text-align: center;"scope="col">상품종류</th>'
					+'      <th style="text-align: center;"scope="col">출발날짜</th>'
					+'      <th style="text-align: center;"scope="col">오전/오후</th>'
					+'      <th style="text-align: center;"scope="col">H.P</th>'
					+'      <th style="text-align: center;"scope="col">예약날짜</th>'
					+'      <th style="text-align: center;"scope="col">결제금액</th>'
					+'    </tr>'
					+'  </thead>'
					+'<tbody id="restable">'
					+' </tbody>')
		$('#adresnav').html('<ul class="pagination justify-content-center respage"style="cursor: pointer;">'
						 +'</ul>')			
		$.each(d.reslist,(x,y)=>{
			if(y.category==='river'){
				cate='민물낚시'
			}else{
				cate='바다낚시'
			}
		$('<tr>' 
		  +'<th scope="row">'+y.resnum+'</th>'
		  +'<td>'+y.mid+'</td>'
		  +'<td>'+y.resname+'</td>'
		  +'<td>'+y.company+'</td>'
		  +'<td>'+y.proname+'</td>'
		  +'<td>'+cate+'</td>'
		  +'<td>'+y.startdate+'</td>'
		  +'<td>'+y.ampm+'</td>'
		  +'<td>'+y.phone+'</td>'
		  +'<td>'+y.resdate+'</td>'
		  +'<td>'+y.deposit+'</td>'
		  +'</tr>').appendTo('#restable').appendTo('#restable')
		})/*each*/
		if(d.pxy.existPrev){
			$('<li class="page-item disabled"><a id="previous" class="page-link" style="cursor: pointer;">Previous</a></li>').appendTo('.respage')
		}
		let i=0;
		for(i=d.pxy.startpage;i<=d.pxy.endpage;i++){
			if(d.pxy.pageNum === i){
				$('<li class="page-item"><a class="pages page-link active">'+i+'</a></li>')
				.attr('href','/phones/page/'+i)
				.appendTo('.respage')
				.click(function(){
					reslist($(this).text());
				})
				}else{
				$('<li class="page-item"><a class="pages page-link">'+i+'</a></li>')
				.attr('href','/phones/page/'+i)
				.appendTo('.respage')
				.click(function(){
					reslist($(this).text());
				})
				
			}
		}
		if(d.pxy.existNext){
			$('<li class="page-item"><a id="next"class="page-link">Next</a></li>').appendTo('.respage')
		}
		$('#previous').click(()=>{
			reslist(d.pxy.prevBlock)
		})
		$('#next').click(()=>{
			reslist(d.pxy.nextBlock)
		})
		})/*getJSON*/
	
}
let searchres = ()=>{
	if($('#datepicker').val()!='' && $('#resselect option:selected').val()==='전체날짜'){
		alert('출발/예약 날짜 설정을 해주세요')
		return
	}
	if($('#datepicker').val()==='' && $('#resselect option:selected').val()!='전체날짜'){
		alert('날짜를 입력해주세요')
		return
	}
	if($('#resselect option:selected').val()==='전체날짜' 
	  && $('#proselect option:selected').val()==='전체상품'
	  && $('#searchbar').val()===''
	  && $('#datepicker').val()===''){
		alert('값을 입력해주세요')
		return
	}
	
	let proselect = '';
	let searchword = $('#searchbar').val();
	if($('#proselect option:selected').val()==='바다낚시'){
		proselect = 'ocean';
	}else{
		proselect = 'river';
	}
	if($('#searchbar').val()==='민물'){
		searchword = 'river';
	}
	if($('#searchbar').val()==='바다'){
		searchword = 'ocean';
	}
	let word = {searchdate:$('#datepicker').val(),
				resselect:$('#resselect option:selected').val(),
				proselect:proselect,
				searchword:searchword,
				number:1}
	searchpage(word);
	
	}
let searchpage=x=>{
	let data = {searchdate:x.searchdate,
				resselect:x.resselect,
				proselect:x.proselect,
				searchword:x.searchword,
				number:x.number}
	$.ajax({
		url:$.ctx()+'/admin/search',
		type:'post',
		data:JSON.stringify(data),
		dataType:'JSON',
		contentType:'application/json',
		success:d=>{
			$('#restable').html('<thead>'
					+'    <tr>'
					+'      <th style="text-align: center;"scope="col">예약번호</th>'
					+'      <th style="text-align: center;"scope="col">고객아이디</th>'
					+'      <th style="text-align: center;"scope="col">예약자명</th>'
					+'      <th style="text-align: center;"scope="col">상호명</th>'
					+'      <th style="text-align: center;"scope="col">상품명</th>'
					+'      <th style="text-align: center;"scope="col">상품종류</th>'
					+'      <th style="text-align: center;"scope="col">출발날짜</th>'
					+'      <th style="text-align: center;"scope="col">오전/오후</th>'
					+'      <th style="text-align: center;"scope="col">H.P</th>'
					+'      <th style="text-align: center;"scope="col">예약날짜</th>'
					+'      <th style="text-align: center;"scope="col">결제금액</th>'
					+'    </tr>'
					+'  </thead>'
					+'<tbody id="restable">'
					+' </tbody>')
		$('#adresnav').html('<ul class="pagination justify-content-center respage"style="cursor: pointer;">'
						 +'</ul>')			
		$.each(d.reslist,(x,y)=>{
			if(y.category==='river'){
				cate='민물낚시'
			}else{
				cate='바다낚시'
			}
		$('<tr>' 
		  +'<th scope="row">'+y.resnum+'</th>'
		  +'<td>'+y.mid+'</td>'
		  +'<td>'+y.resname+'</td>'
		  +'<td>'+y.company+'</td>'
		  +'<td>'+y.proname+'</td>'
		  +'<td>'+cate+'</td>'
		  +'<td>'+y.startdate+'</td>'
		  +'<td>'+y.ampm+'</td>'
		  +'<td>'+y.phone+'</td>'
		  +'<td>'+y.resdate+'</td>'
		  +'<td>'+y.deposit+'</td>'
		  +'</tr>').appendTo('#restable').appendTo('#restable')
		})/*each*/
		if(d.pxy.existPrev){
			$('<li class="page-item disabled"><a id="previous" class="page-link" style="cursor: pointer;">Previous</a></li>').appendTo('.respage')
		}
		let i=0;
		for(i=d.pxy.startpage;i<=d.pxy.endpage;i++){
			if(d.pxy.pageNum === i){
				$('<li class="page-item"><a class="pages page-link active">'+i+'</a></li>')
				.attr('href','/phones/page/'+i)
				.appendTo('.respage')
				.click(function(){
					searchpage(	{searchdate:x.searchdate,
								resselect:x.resselect,
								proselect:x.proselect,
								searchword:x.searchword,
								number:$(this).text()});
				
				})
				}else{
				$('<li class="page-item"><a class="pages page-link">'+i+'</a></li>')
				.attr('href','/phones/page/'+i)
				.appendTo('.respage')
				.click(function(){
					searchpage({searchdate:x.searchdate,
								resselect:x.resselect,
								proselect:x.proselect,
								searchword:x.searchword,
								number:$(this).text()});
				})
				
			}
		}
		if(d.pxy.existNext){
			$('<li class="page-item"><a id="next"class="page-link">Next</a></li>').appendTo('.respage')
		}
		$('#previous').click(()=>{
			searchpage(	{searchdate:x.searchdate,
						resselect:x.resselect,
						proselect:x.proselect,
						searchword:x.searchword,
						number:d.pxy.prevBlock})
		
		})
		$('#next').click(()=>{
			searchpage({searchdate:x.searchdate,
						resselect:x.resselect,
						proselect:x.proselect,
						searchword:x.searchword,
						number:d.pxy.nextBlock})
				
		})		
		},
		error:e=>{
			alert('실패')
		}
		
		
	})
}
let dateficker=()=>{
	$(document).ready(function() {
		$( "#datepicker" ).datepicker({
			dateFormat: 'yy-mm-dd',
		    inline: true,
		    disabled: false,
		    showOtherMonths: true,
		    showMonthAfterYear: true,
		    monthNames: [ '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12' ],
		    dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
		    
		});			
	});
}
function reschart(x){
	var rr = document.getElementById('resChart');
	var resdata = {
		    labels: [x.catecount.category[0].val(),x.catecount.category[1].val()],
		      datasets: [
		        {
		            fill: true,
		            backgroundColor: [
		                '#15607a',
		                '#18a1cd',
		                '#39f3bb'],
		            data: [x.catecount.rescount[0].val(), x.catecount.rescount[1].val()]
		// Notice the borderColor 
		        }
		    ]
		};
	var options = {
	        title: {
	                  display: true,
	                  text: '상품종류별 예약현황',
	                  position: 'top'
	              },
	        rotation: -0.7 * Math.PI,
	        responsive: true
	       
	};
	var myPieChart = new Chart(rr, {
	    type: 'pie',
	    data: resdata,
	    options: options
	});
}
function rescharttwo(){
	new Chart(document.getElementById("resCharttwo"), {
		  type: 'line',
		  data: {
		    labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
		    datasets: [{ 
		        data: [86,114,106,106,107,111,133,221,783,2478],
		        label: "바다",
		        borderColor: "#3e95cd",
		        fill: false
		      }, { 
		        data: [282,350,411,502,635,809,947,1402,3700,5267],
		        label: "민물",
		        borderColor: "#8e5ea2",
		        fill: false
		      }, { 
		        data: [168,170,178,190,203,276,408,547,675,734],
		        label: "숙박",
		        borderColor: "#3cba9f",
		        fill: false
		      }
		    ]
		  },
		  options: {
		    title: {
		      display: true,
		      text: '기간별 예약변동 현황'
		    },
		   rotation: -0.7 * Math.PI,  
		  responsive: true
		  }
		});
}
return {init:init}
})();