$("form").on("submit",function(){
	window.localStorage.setItem("value",$("#J_search").val());
	window.location.href = "cart.html";
	return false;
})
	
$("form").on("keypress",function(e){
	var keycode = e.keyCode;
	if(keycode==13){
		window.localStorage.setItem("value",$("#J_search").val());
		window.location.href = "cart.html";
		return false;	
	}
	
})