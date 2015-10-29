var animate = animate || {};
animate.train = (function(){
	var _train = document.createElement("div"),
    _normalClass = 'animatated-object train',
    _mirroredClass = _normalClass + ' mirror',
    _stoped = true,
    _delta = 5,
    _trainLeftPosition,
    _windowWidth;

  var _options = {
      draw: function () {
        if (_train.className === _mirroredClass) {
          _trainLeftPosition -= _delta;

          if( _trainLeftPosition <= 200 ) {
            _train.className = _normalClass;
          }
        } else {
          _trainLeftPosition += _delta;

          if( _trainLeftPosition >= _windowWidth - 400 ) {
            _train.className = _mirroredClass;
          }
        }

        _train.style.left = _trainLeftPosition + 'px';
      }
  };

  function animate(options) {
    requestAnimationFrame(function animate() {
      options.draw();
      if (!_stoped) {
        requestAnimationFrame(animate);
      }
    });
  }

  return {
    init: function () {
      _train.className = _normalClass;
      document.body.appendChild(_train);

      _trainLeftPosition = parseInt( window.getComputedStyle(_train, null).getPropertyValue("left"), 10);
      _windowWidth = window.innerWidth;
      _stoped = false;
      animate(_options);
    },
    stop: function () {
      _stoped = true;
    }
  };
})();
