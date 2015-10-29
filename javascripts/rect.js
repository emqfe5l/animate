(function() {

// create element
	var element = document.createElement('div');
	element.setAttribute('id', 'rect');
	element.style.width = '100px';
	element.style.height = '100px';
	element.style.position = 'absolute';
	element.style.border = '1px solid green';
	element.style.backgroundColor = 'rgb(0, 220, 0)';
	element.style.top = 500;
	element.style.left = 0;

	document.body.appendChild(element);


	var left = parseInt(getComputedStyle(element).left, 10);
	var top = parseInt(getComputedStyle(element).top, 10);

	var width = parseInt(getComputedStyle(element).width, 10),
		height = parseInt(getComputedStyle(element).height, 10);





	function animateElement(obj) {

		var screenWidth = document.documentElement.clientWidth;
		//var screenHeight = document.documentElement.clientHeight;

		left += 10;
		//top +=5;


		if (left > screenWidth) {
			left = - width;
			//top += height;
		};

/*		if (top > screenHeight) {
			top = -height;
		};
*/
		element.style.left = left + "px";
		element.style.top = top + "px";

		requestAnimationFrame(animateElement);
	};
	animateElement(element);

})();




