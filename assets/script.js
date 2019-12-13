



$(function(){
	$(".on").click(function(){$('body').css("background","#000");localStorage.setItem("backColor","on")})
})

$(function(){
	$(".off").click(function(){$('body').css("background","#fff");localStorage.setItem("backColor","off")})
})






// once content has been loaded
window.addEventListener('DOMContentLoaded', function(){
// checkForItems();
// saveUserInfo(); // run saving user info  
if(localStorage.getItem("backColor") == 'on'){
		$('body').css("background","#000")
	}else{
		$('body').css("background","#fff")
	}  
});



		dragElement(document.getElementById("draggable"));

			function dragElement(elmnt) {
			  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
			  if (document.getElementById(elmnt.id)) {
			    // if present, the header is where you move the DIV from:
			    document.getElementById(elmnt.id).onmousedown = dragMouseDown;
			  } else {
			    // otherwise, move the DIV from anywhere inside the DIV:
			    elmnt.onmousedown = dragMouseDown;
			  }

			  function dragMouseDown(e) {
			    e = e || window.event;
			    e.preventDefault();
			    // get the mouse cursor position at startup:
			    pos3 = e.clientX;
			    pos4 = e.clientY;
			    document.onmouseup = closeDragElement;
			    // call a function whenever the cursor moves:
			    document.onmousemove = elementDrag;
			  }

			  function elementDrag(e) {
			    e = e || window.event;
			    e.preventDefault();
			    // calculate the new cursor position:
			    pos1 = pos3 - e.clientX;
			    pos2 = pos4 - e.clientY;
			    pos3 = e.clientX;
			    pos4 = e.clientY;
			    // set the element's new position:
			    if(elmnt.offsetTop - pos2  > 0){
			    	elmnt.style.top = "0px";
			    }else{
			    	elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
			    }
			    
			    if(elmnt.offsetLeft - pos1 > 0){
			    	elmnt.style.left = "0px";
			    }else{
			    	elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
			    }

			    
			  }

			  function closeDragElement() {
			    // stop moving when mouse button is released:
			    document.onmouseup = null;
			    document.onmousemove = null;
			  }
			}