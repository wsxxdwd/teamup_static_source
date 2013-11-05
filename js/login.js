$(document).ready(function(){
	$(".login_ipt input").keyup(function(){
		placeholder_hack(this);
	});
	$("#main").on("click","#register_tab",function(){
		$("#login_tab").transition({y:30});
		$("#register_tab").transition({y:-30});
		$("#login_tab").css("background","url(./img/login/login_tab.png)");
		$("#register_tab").css("background","url(./img/login/login_tab2.png)");
	});
	$("#main").on("click","#login_tab",function(){
		$("#login_tab").transition({y:0});
		$("#register_tab").transition({y:0});
		$("#login_tab").css("background","url(./img/login/login_tab2.png)");
		$("#register_tab").css("background","url(./img/login/login_tab.png)");
	});
});
function placeholder_hack(input){
		if($(input).val() != ''){
			$(input).parent().children().last().css("display","none");
		}else{
			$(input).parent().children().last().css("display","block");
		}
}