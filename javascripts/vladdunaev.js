// var left = 0;
// var tick = 0;
// var x = document.getElementById('x');
// function goRight() {
//       setInterval(function(){
//       setInterval(function(){
//       	if (tick >=10) {
//                   return false;
//             };
//       	left +=1.5;
//             tick++;
//       	anim.style.left = left + 'px';
//       },188)
//             if(left >= 300){
//                   // anim.style.left = 0 +'px';
//                   // x.setAttribute("visibility","hidden");
//                   left = 0;
//                   tick = 0;
//                   goRight;
//                   return false;
//             };
//             tick =0;
//       },1883);
//     };

// goRight();

var animateUnit = animateUnit || {};
animateUnit.unit = (function(){
   var _unit = document.createElement("div"),
    _normalClass = 'animatated-object unit',
    _mirroredClass = _normalClass + ' mirror',
    _stoped = true,
    _delta = 5,
    _unitLeftPosition,
    _windowWidth;

  var _options = {
        draw: function () {
        if (_unit.className === _mirroredClass) {
          _unitLeftPosition -= _delta;

          if( _unitLeftPosition <= 100 ) {
            _unit.className = _normalClass;
          }
        } else {
          _unitLeftPosition += _delta;

          if( _unitLeftPosition >= _windowWidth - 500 ) {
            _unit.className = _mirroredClass;
          }
        }

        _unit.style.left = _unitLeftPosition + 'px';
      }
  };

  function animateUnit(options) {
    requestAnimationFrame(function animateUnit() {
      options.draw();
      if (!_stoped) {
        requestAnimationFrame(animateUnit);
      }
    });
  }

  return {
    init: function () {
      _unit.className = _normalClass;
      document.body.appendChild(_unit);

      _unitLeftPosition = parseInt( window.getComputedStyle(_unit, null).getPropertyValue("left"), 10);
      _windowWidth = window.innerWidth;
      _stoped = false;
      animateUnit(_options);
    },
    stop: function () {
      _stoped = true;
    }
  };
})();