var animate = animate || {};
animate.letter = (function(){
	var _letter = document.createElement("div"),
  _ltrFontSize;
  _delta = 5;
   _letter.innerHTML = "О";
  var _options = {
      draw: function () {
        if ( _ltrFontSize > 10) {
          _ltrFontSize -= _delta;
          _letter.style.fontSize = _ltrFontSize + "px";
          console.log(_ltrFontSize);
        }
        else {
          _letter.style.fontSize = 600 + "px";
          _ltrFontSize = parseInt( window.getComputedStyle(_letter, null).getPropertyValue("font-size"));

        }

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
      _letter.className = "letter";
      document.body.appendChild(_letter);
      _ltrFontSize = parseInt( window.getComputedStyle(_letter, null).getPropertyValue("font-size"));
      console.log(_ltrFontSize);
      _stoped = false;
      animate(_options);
    },
    stop: function () {
      _stoped = true;
    }
  };
})();
