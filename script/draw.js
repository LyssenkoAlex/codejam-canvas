
"use strict";
let colors;
var canvas = document.getElementById("canvasID");
let cWidth = canvas.getBoundingClientRect().width;
let cHeight = canvas.getBoundingClientRect().height;


function drawImg(imageSrc) {
    if (canvas.getContext) {
      var ctx = canvas.getContext("2d");
      let pic = new Image();
      pic.src = imageSrc;
      pic.onload = function() {
        ctx.drawImage(pic, 0, 0, cWidth, cHeight);
      };
    }
  }

  

function drawIcon() {
    drawImg("./assets/img/image.png");
}