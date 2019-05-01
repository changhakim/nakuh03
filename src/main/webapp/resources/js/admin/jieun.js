"use strict";
var jieun = jieun || {};
jieun = (()=>{
    const WHEN_ERR = '호출하는 JS 파일을 찾지 못했습니다.';
    let js, compojs;
    
    let init =()=>{
        js = $.js();
        compojs = js +'/compo.js';
        onCreate();
    };
    
    let onCreate =()=>{
        setContentView();
    };
    
    let setContentView =()=>{
        $.getScript($.js()+'/component/jecompo.js',()=>{
        	$('#wrapper').html(jecompo.admin_main());
        	$('#member').click(()=>{
        		    
        		alert("멤버 클릭");
        		$('#main-content').html(jecompo.member());
        		
			});
        	
        	$('#regi').click(()=>{
        		
        		alert("예약 클릭");
        		$('#main-content').html(jecompo.regi());
        		    
        		
			});

        	$('#fish').click(()=>{
        		
        		alert("시세 클릭");
        		/*$('#wrapper').html(jecompo.admin_main());*/
			});
        	
        	
        });
    };
    return {init:init};
})();