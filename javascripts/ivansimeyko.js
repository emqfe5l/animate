var animate = animate || {};
animate.smollSmile = (function(){
(function() {
    var object = document.createElement('div');

    object.setAttribute('id', 'ball');
    // абсолютное позицирование
    object.style.position = 'absolute';
    object.style.width = '75px';
    object.style.height = '75px';
    object.style.borderRadius = '75%';
    object.style.backgroundColor = 'rgba(50, 50, 50, 0.8)';
    object.style.backgroundImage = 'url(images/ball.jpg)';
    object.style.backgroundRepeat = 'no-repeat';
    object.style.backgroundSize = '100%';
    object.style.backgroundPosition = '50% 50%';
    object.style.top = 50;
    object.style.left = 50;

    document.body.appendChild(object);


    //var object = document.querySelector('#circle');
    var left = parseInt(getComputedStyle(object).left, 7) || 0,
        htmlTop = parseInt(getComputedStyle(object).top, 7) || 0;

    var width = parseInt(getComputedStyle(object).width, 7) || 100,
        height = parseInt(getComputedStyle(object).height, 7) || 100;

    console.log( left, htmlTop, width, height );

    function animateObject(obj) {

        var screenWidth = document.documentElement.clientWidth;
        var screenHeight = document.documentElement.clientHeight;

        left += 10;
        htmlTop += 10;
        //console.log(left, htmlTop);

        var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

        if (left > screenWidth) {
            left = - width;
            htmlTop += height;
        }

        if (htmlTop > screenHeight) {
            htmlTop = 0;
        }

        object.style.left = left + "px";
        object.style.top = htmlTop + "px";

        requestAnimationFrame(animateObject);
    }

    animateObject(object);

    // определение позиции элемента
    function getPosition(object){
        console.log ('getPosition');
        //console.log( object );
        var top=0, left=0;
        while( object ) {
            top = top + parseFloat(object.offsetTop);
            left = left + parseFloat(object.offsetLeft);
            object = object.offsetParent
        }
        return {top: Math.round(top), left: Math.round(left)}
    }

    // определение размера элемента
    function getSize(object){
        console.log ('getSize');
        //console.log( object );
         var width =  parseFloat(object.style.width);
         var height = left + parseFloat(object.style.height);
            //object = object.offsetParent
         return {width: Math.round(width), height: Math.round(height)}
    }

    function remove( object ) {
        console.log ('remove');
        object.parentNode.removeChild(object);
    }

    console.log( getPosition(object));
    console.log( getSize(object));
    remove(object)

})();

    return {
        init: function () {
            _smollSmile.className = _normalClass;
            document.body.appendChild(_smollSmile);

            _smollSmileLeftPosition = parseInt( window.getComputedStyle(_smollSmile, null).getPropertyValue("left"), 10);
            _windowWidth = window.innerWidth;
            _stoped = false;
            animate(_options);
        },
        stop: function () {
            _stoped = true;
        }
    };
})();


