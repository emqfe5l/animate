(function(){
	var circle = document.createElement("div");	

	function styleElement(elem){
		elem.style.position = "absolute";
		elem.style.top = "80%";
		elem.style.right = "80%";
		elem.style.width = "177px";
		elem.style.height = "160px";		
		elem.style.background = "url(https://js.cx/clipart/train.gif)";
		document.body.appendChild(elem);
	};	

	function animate(draw, duration) {
	  var start = performance.now();

	  requestAnimationFrame(function animate(time) {	  
	    var timePassed = time - start;
	    if (timePassed > duration) timePassed = duration;
	    draw(timePassed);
	    if (timePassed < duration) {
	      requestAnimationFrame(animate);
	    }

	  });
	};

	styleElement(circle);

	circle.onclick = function() {
      animate(function(timePassed) {
        circle.style.left = timePassed / 2 + 'px';
      }, 2000);
    };

})();