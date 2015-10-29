(function() {
	var object = document.createElement('div');

	object.setAttribute('id', 'smile');
	object.style.position = 'absolute';
	object.style.width = '100px';
	object.style.height = '100px';
	object.style.borderRadius = '100%';
	object.style.backgroundColor = 'rgba(50, 50, 50, 0.8)';
	object.style.backgroundImage = 'url(images/smile.jpg)';
	object.style.backgroundRepeat = 'no-repeat';
	object.style.backgroundSize = '230%';
	object.style.backgroundPosition = '50% 47%';
	object.style.top = 0;
	object.style.left = 0;

	document.body.appendChild(object);


	//var object = document.querySelector('#circle');
	var left = parseInt(getComputedStyle(object).left, 10) || 0,
		htmlTop = parseInt(getComputedStyle(object).top, 10) || 0;

	var width = parseInt(getComputedStyle(object).width, 10) || 100,
		height = parseInt(getComputedStyle(object).height, 10) || 100;


	function animateObject(obj) {

		var screenWidth = document.documentElement.clientWidth;
		var screenHeight = document.documentElement.clientHeight;

		left += 1;
		htmlTop +=5;
		

		var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
	    							window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;


		if (left > screenWidth) {
			left = - width;
			htmlTop += height;
		};

		if (htmlTop > screenHeight) {
			htmlTop = -height;
		};

		object.style.left = left + "px";
		object.style.top = htmlTop + "px";

		requestAnimationFrame(animateObject);
	};
	animateObject(object);
})();