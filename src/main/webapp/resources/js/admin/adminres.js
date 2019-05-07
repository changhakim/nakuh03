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
	})

}
return {init:init}
})();