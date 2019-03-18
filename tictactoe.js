	var gameover=false;
	var turn=1;
	var row=$("td i");

	if(!gameover){ 
	$("table").on("click","td",function(event){
		event.stopPropagation();
		if(turn===1){
		$(this).html("<i class='fas fa-check' ></i>")	;
		turn=2;
		gameover= gamecheck();
		$(this).click(function(){return false;});
	}
	else if(turn===2){
		$(this).html("<i class='far fa-circle' ></i>");
			turn=1;
		gameover= gamecheck();
		$(this).click(function(){return false;});		
	} 
	})
	} 
	function gamecheck(){
	if($(".one i").attr("class") ==="fas fa-check" &&  $(".two i").attr("class") ==="fas fa-check"  && $(".three i").attr("class")==="fas fa-check") {
		alert("gameover!!! ")
	turn=0;
	return gameover=true; 
	} else if($(".four i").attr("class") ==="fas fa-check" &&  $(".five i").attr("class") ==="fas fa-check"  && $(".six i").attr("class")==="fas fa-check") {
		alert("gameover!!! ")
	turn=0;
	return gameover=true; }
			else if($(".seven i").attr("class") ==="fas fa-check" &&  $(".eight i").attr("class") ==="fas fa-check"  && $(".nine i").attr("class")==="fas fa-check") {
		alert("gameover!!! ")

	turn=0;
	return gameover=true; } else if($(".one i").attr("class") ==="fas fa-check" &&  $(".four i").attr("class") ==="fas fa-check"  && $(".seven i").attr("class")==="fas fa-check") {
   		alert("gameover!!! ")
	turn=0;
	return gameover=true; }
	else if($(".two i").attr("class") ==="fas fa-check" &&  $(".five i").attr("class") ==="fas fa-check"  && $(".eight i").attr("class")==="fas fa-check") {
		alert("gameover!!! ")
	turn=0;
	return gameover=true; }
	else if($(".three i").attr("class") ==="fas fa-check" &&  $(".six i").attr("class") ==="fas fa-check"  && $(".nine i").attr("class")==="fas fa-check") {
		alert("gameover!!! ")
	turn=0;
	return gameover=true; }
	else if($(".one i").attr("class") ==="fas fa-check" &&  $(".five i").attr("class") ==="fas fa-check"  && $(".nine i").attr("class")==="fas fa-check") {
	alert("gameover!!! ")
	turn=0;
	return gameover=true; }
	else if($(".three i").attr("class") ==="fas fa-check" &&  $(".five i").attr("class") ==="fas fa-check"  && $(".seven i").attr("class")==="fas fa-check") {
 		alert("gameover!!! ")
	turn=0;
	return gameover=true; }
	else if($(".one i").attr("class") ==="far fa-circle" &&  $(".two i").attr("class") ==="far fa-circle"  && $(".three i").attr("class")==="far fa-circle") {
	alert("gameover!!! ")
	turn=0;
	return gameover=true; }
	else if($(".four i").attr("class") ==="far fa-circle" &&  $(".five i").attr("class") ==="far fa-circle"  && $(".six i").attr("class")==="far fa-circle") {
   		alert("gameover!!! ")
	turn=0;
	return gameover=true; }
	else if($(".seven i").attr("class") ==="far fa-circle" &&  $(".eight i").attr("class") ==="far fa-circle"  && $(".nine i").attr("class")==="far fa-circle") {
    		alert("gameover!!! ")
	turn=0;
	return gameover=true; }
	else if($(".one i").attr("class") ==="far fa-circle" &&  $(".four i").attr("class") ==="far fa-circle"  && $(".seven i").attr("class")==="far fa-circle") {
  		alert("gameover!!! ")
	turn=0;
	return gameover=true; }
	else if($(".two i").attr("class") ==="far fa-circle" &&  $(".five i").attr("class") ==="far fa-circle"  && $(".eight i").attr("class")==="far fa-circle") {
			alert("gameover!!! ")
	turn=0;
	return gameover=true; }
	else if($(".three i").attr("class") ==="far fa-circle" &&  $(".six i").attr("class") ==="far fa-circle"  && $(".nine i").attr("class")==="far fa-circle") {
		alert("gameover!!! ")
	turn=0;
	return gameover=true; }
	else if($(".one i").attr("class") ==="far fa-circle" &&  $(".five i").attr("class") ==="far fa-circle"  && $(".nine i").attr("class")==="far fa-circle") {
		alert("gameover!!! ")
     	turn=0;
	return gameover=true; }
	else if($(".three i").attr("class") ==="far fa-circle" &&  $(".five i").attr("class") ==="far fa-circle"  && $(".seven i").attr("class")==="far fa-circle") {
   		alert("gameover!!! ")

	turn=0;
	return gameover=true; }


	}

		