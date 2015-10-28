var left = 0;
var tick = 0;
var x = document.getElementById('x');
function goRight() {
      setInterval(function(){
      setInterval(function(){
      	if (tick >=10) {
                  return false;
            };
      	left +=1.5;
            tick++;
      	anim.style.left = left + 'px';
      },188)
            if(left >= 300){
                  // anim.style.left = 0 +'px';
                  // x.setAttribute("visibility","hidden");
                  left = 0;
                  tick = 0;
                  goRight;
                  return false;
            };
            tick =0;
      },1883);
    };

goRight();
