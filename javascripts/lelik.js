var Object = function(obj){
    var cls = obj.cls,
        positionY = obj.startY,
        positionX = obj.startX,
        routeY = obj.routeY,
        routeX = obj.routeX,
        routeYNum = obj.speedY,
        routeXNum = obj.speedX,
        element = document.createElement("div"),
        d2 = 0;
    element.classList.add(cls);
    document.querySelector(".main").appendChild(element);
    function step(){
        var stepId = requestAnimationFrame(step);
        var d = new Date().getMilliseconds();
        element.style.top =  positionY  + "px";
        element.style.left = positionX  + "px";
        routeY ? positionY += routeYNum : positionY -= routeYNum;
        routeX ? positionX += routeXNum : positionX -= routeXNum;
        if (!obj.dead){
            if(!obj.reuse){
                if (positionY >= 590){routeY = false}
                if (positionX >= 690){routeX = false}
                if (positionY <= 0){routeY = true}
                if (positionX <= 0){routeX = true}
                if(obj.bounce){
                    var ufoMirror = document.querySelector(".ufo");
                    var ufoMirrorY = 245;
                    var ufoMirrorX = parseInt(ufoMirror.style.left);
                    if (ufoMirrorY == positionY && ufoMirrorX <= positionX && ufoMirrorX + 60 >= positionX){
                        routeY = false;
                    }
                    if (ufoMirrorY + 20 == positionY && ufoMirrorX <= positionX && ufoMirrorX + 60 >= positionX){
                        routeY = true;
                    }
                }
            }else{
                if (positionY >= 590||positionX >= 690||positionY <= 0||positionX <= 0){
                    positionY = obj.startY;
                    positionX = obj.startX;
                }
            }
        }else{
            if (positionY>590||positionX >= 690||positionY <= 0||positionX <= 0){
                cancelAnimationFrame(stepId);
                element.remove();
            }
        }
    }
    step();
};
/**
 * Created by admin on 18.04.15.
 */
var FlyObj = function(){
    var left = 150,
        top = 250,
        tankX = 0,
        tankY = 0;

    this.createTank = function() {
        var element = document.createElement("div");

        element.classList.add("ufo");
        element.style.left = left + "px";
        element.style.top = top + "px";
        document.querySelector(".main").appendChild(element);

        var leftCat = document.createElement("div");
        leftCat.classList.add("leftCat");
        document.querySelector(".ufo").appendChild(leftCat);

        var rightCat = document.createElement("div");
        rightCat.classList.add("rightCat");
        document.querySelector(".ufo").appendChild(rightCat);

        var caseT = document.createElement("div");
        caseT.classList.add("case");
        document.querySelector(".ufo").appendChild(caseT);


        var tower = document.createElement("div");
        tower.classList.add("tower");
        document.querySelector(".case").appendChild(tower);

        var gun = document.createElement("div");
        gun.classList.add("gun");
        document.querySelector(".case").appendChild(gun);
    };


    this.drive = function() {
        var element = document.querySelector(".ufo"),
            deg = 0,
            bomb = {
                alignY:0,
                alignX:20,
                routeX:true,
                routeY:false,
                speedY:5,
                speedX:0
            };


        document.addEventListener("keydown", function () {
            switch(deg){
                case 0:
                    tankX = 0;
                    tankY = 10;
                    bomb = {alignX:20, alignY:0, routeX:true, routeY:false, speedY:5, speedX:0};
                    break;
                case 45:
                    tankX = -7;
                    tankY = 7;
                    bomb = {alignX:30, alignY:5, routeX:true, routeY:false, speedY:4, speedX:4};
                    break;
                case 90:
                    tankX = -10;
                    tankY = 0;
                    bomb = {alignX:30, alignY:20, routeX:true, routeY:false, speedY:0, speedX:5};
                    break;
                case 135:
                    tankX = -7;
                    tankY = -7;
                    bomb = {alignX:30, alignY:30, routeX:true, routeY:true, speedY:4, speedX:4};
                    break;
                case 180:
                    tankX = 0;
                    tankY = -10;
                    bomb = {alignX:20, alignY:40, routeX:true, routeY:true, speedY:5, speedX:0};
                    break;
                case 225:
                    tankX = 7;
                    tankY = -7;
                    bomb = {alignX:0, alignY:30, routeX:false, routeY:true, speedY:4, speedX:4};
                    break;
                case 270:
                    tankX = 10;
                    tankY = 0;
                    bomb = {alignX:0, alignY:20, routeX:false, routeY:true, speedY:0, speedX:5};
                    break;
                case 315:
                    tankX = 7;
                    tankY = 7;
                    bomb = {alignX:10, alignY:5, routeX:false, routeY:false, speedY:4, speedX:4};
                    break;
            }

            if (event.keyCode == 32) {
                var startX = parseInt(document.querySelector(".ufo").style.left),
                    startY = parseInt(document.querySelector(".ufo").style.top),

                    obj2 = new Object({
                        cls: "square2",
                        startY: startY + bomb.alignY,
                        startX: startX + bomb.alignX,
                        routeY: bomb.routeY,
                        routeX: bomb.routeX,
                        speedY: bomb.speedY,
                        speedX: bomb.speedX,
                        dead: true,
                        reuse: false,
                        bounce: false
                    });
            }

            if (event.keyCode == 37) {
                if(deg==0) deg=360;
                deg -= 45;
            }

            if (event.keyCode == 39) {
                deg += 45;
            }

            if (event.keyCode == 38) {
                move(tankX, tankY);


            }
            if (event.keyCode == 40) {
                move(-tankX, -tankY);
            }

            function move(x,y){
                var left = parseInt(element.style.left),
                    top = parseInt(element.style.top);
                element.style.left = (left - x) + "px";
                element.style.top = (top - y) + "px";

            }

            deg = deg%360;

            element.style.transform = "rotate(" + deg + "deg)";

        });
    };
    this.createTank();
    this.drive();
};

function elemForRain(){
    var pos = +((Math.random()*600).toFixed()),
        rX = true,
        rY = true,
        spX = 0,
        spY = 2,
        stY = 0,
        stX = pos,
        random = Math.random();

    if(random < 0.25) {
        rX = false;
        spX = 2;
        spY = 0;
        stY = pos;
        stX = 690;
    }
    if(random > 0.25 && random < 0.5) {
        rY = false;
        spX = 0;
        spY = 2;
        stY = 590;
        stX = pos;
    }
    if(random > 0.5 && random < 0.75) {
        spX = 2;
        spY = 0;
        stY = pos;
        stX = 0;
    }


    new Object({cls:"square",startY:stY,startX:stX,routeY:rY,routeX:rX,speedY:spY,speedX:spX, dead:true, reuse: true, bounce:false});
}

function createCounter(cls){
    var counter = document.createElement("div");
    counter.classList.add(cls);
    document.querySelector(".main").appendChild(counter);
}

function elementContact(selector1, selector2, selectorBox, del1, del2, border){
    var sum = 0;

    function doIt(){
    requestAnimationFrame(doIt);
    var elems1 = document.querySelectorAll(selector1),
        elems2 = document.querySelectorAll(selector2);
        if(elems1[0] !== null) {
            [].forEach.call(elems1, function (elem) {
                var iTop = parseInt(elem.style.top),
                    iLeft = parseInt(elem.style.left);
                [].forEach.call(elems2, function (item) {
                    var eTop = parseInt(item.style.top),
                        eLeft = parseInt(item.style.left);
                    if (eTop >= (iTop - border) && eTop <= (iTop + border) && eLeft >= (iLeft - border) && eLeft <= (iLeft + border)) {
                        sum += 1;
                        document.querySelector(selectorBox).innerHTML = "contact " + sum;
                        if (del1)  elem.remove();
                        if (del2)  item.remove();
                    }
                });
            });
        }
    }

    doIt();
}

var ufo = new FlyObj(), 
    rain = setInterval(elemForRain, 1000);

createCounter("counter");
elementContact(".square2", ".square", ".counter",true, true, 15);

