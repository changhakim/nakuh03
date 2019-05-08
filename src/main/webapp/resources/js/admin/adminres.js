var adminres = adminres||{}

adminres = (()=>{
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
		$('#protable').html('<table class="table table-responsive">'
				+'  <thead>'
				+'    <tr>'
				+'      <th scope="col">예약번호</th>'
				+'      <th scope="col">고객아이디</th>'
				+'      <th scope="col">예약자명</th>'
				+'      <th scope="col">상호명</th>'
				+'      <th scope="col">상품명</th>'
				+'      <th scope="col">출발날짜</th>'
				+'      <th scope="col">오전/오후</th>'
				+'      <th scope="col">H.P</th>'
				+'      <th scope="col">예약날짜</th>'
				+'      <th scope="col">결제금액</th>'
				+'    </tr>'
				+'  </thead>'
				+'  <tbody>'
				+'    <tr>'
				+'<th scope="row">1</th>'
				+'      <td>Otto</td>'
				+'      <td>@mdo</td>'
				+'      <td>Mark</td>'
				+'      <td>Otto</td>'
				+'      <td>@mdo</td>'
				+'      <td>Mark</td>'
				+'      <td>Otto</td>'
				+'      <td>@mdo</td>'
				+'      <td>@mdo</td>'
				+'    </tr>'
				+'  </tbody>'
				+'</table>')
	})

}
return {init:init}
})();