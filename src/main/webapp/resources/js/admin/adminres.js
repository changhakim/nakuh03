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
		
		reslist(1);
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
return {init:init}
})();