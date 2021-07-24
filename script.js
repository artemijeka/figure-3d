'use strict';

(function () {

  document.addEventListener('DOMContentLoaded', function () {



    var figure3d__scene = document.querySelector('.figure-3d__scene');
    var currentPositionDeg = 0;
    var x = 0;
    var oldX = 0;

    figure3d__scene.addEventListener("mousedown", function (e) {
      figure3d__scene.onmousemove = function (e) {
        mouseMoveFunction(e, 'move');
      }
    });

    document.addEventListener("mouseup", function (e) {
      figure3d__scene.onmousemove = function (e) {
        mouseMoveFunction(e, 'stop');
      }
    });

    function mouseMoveFunction(e, moveOrStop) {
      if (moveOrStop === 'stop') {
        // figure3d__scene.style.animationName = 'rotate-scene';
      } else if (moveOrStop === 'move') {
        x = e.clientX / 500;
        if (oldX < e.clientX) {
          currentPositionDeg += x;
        } else if (oldX > e.clientX) {
          currentPositionDeg -= x;
        }
        // figure3d__scene.style.animationName = 'unset';
        figure3d__scene.style.transform = 'perspective(1024px) rotateY(' + currentPositionDeg + 'deg)';
        oldX = e.pageX;
      }
    }



    // function mouseMoveWhilstDown(target, whileMove) {
    //   var endMove = function () {
    //     window.removeEventListener('mousemove', whileMove);
    //     window.removeEventListener('mouseup', endMove);
    //   };

    //   target.addEventListener('mousedown', function (event) {
    //     event.stopPropagation(); // remove if you do want it to propagate
    //     window.addEventListener('mousemove', whileMove);
    //     window.addEventListener('mouseup', endMove);
    //   });
    // }

    // var z = null;                                                         
    // var x = null;                                                      
    // mouseMoveWhilstDown(                                                  
    //   figure3d__scene,
    //   function (e) {
    //     // var documentHeight = document.documentElement.clientHeight;
    //     // var oneDegOf90 = documentHeight / 90;
    //     // var z = e.pageY / oneDegOf90;
    //     // console.log(x);
    //     figure3d__scene.style.transform = 'perspective(1024px) rotateY(' + e.pageX / 2 + 'deg)';// rotateZ(' + z + 'deg)
    //   }
    // );



  });

})();