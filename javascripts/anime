(function() {
    var object = document.createElement('div');

    object.setAttribute('id', 'smile');
    object.style.position = 'absolute';
    object.style.width = '50px';
    object.style.height = '50px';
    object.style.borderRadius = '75%';
    object.style.backgroundColor = 'rgba(50, 50, 50, 0.8)';
    object.style.backgroundImage = 'url(images/smile.jpg)';
    object.style.backgroundRepeat = 'no-repeat';
    object.style.backgroundSize = '230%';
    object.style.backgroundPosition = '50% 47%';
    object.style.top = 0;
    object.style.left = 0;

    document.body.appendChild(object);


    //var object = document.querySelector('#circle');
    var left = parseInt(getComputedStyle(object).left, 7) || 0,
        htmlTop = parseInt(getComputedStyle(object).top, 7) || 0;

    var width = parseInt(getComputedStyle(object).width, 7) || 100,
        height = parseInt(getComputedStyle(object).height, 7) || 100;


    function animateObject(obj) {

        var screenWidth = document.documentElement.clientWidth;
        var screenHeight = document.documentElement.clientHeight;

        left += 5;
        htmlTop +=9;


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
