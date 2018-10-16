var t;
function reducir(){
	var w_actual=window.outerWidth;
	var h_actual=window.outerHeight;
	
	window.resizeTo(w_actual-1,h_actual-1);
	window.moveTo(screenX,screenY+1);
	if (w_actual<300 || h_actual<300)
		window.clearInterval(t);
}

function maximizar(){
	window.resizeTo(window.screen.width,window.screen.height);
	window.moveTo(0,0);
	t=window.setInterval("reducir()",10)
}