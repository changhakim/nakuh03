"use strict";
var changha = changha||{};

changha = (()=>{
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
		$('#wrapper').html(chcompo.member())
		})
	}
	return {init:init}
	
	
})();