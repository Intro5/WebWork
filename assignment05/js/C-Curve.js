
function createCcurve(){
  var canvas = document.getElementById('myccurve');
  var canvasContext = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerWidth * 2;

  //COLLECT THE USER INPUT
  var level = document.getElementById("nLevels").value;

  //DRAW THE Fractal
  var x1 = canvas.width - canvas.width /3;
  var y1 = canvas.height / 6;
  var x2 = x1;
  var y2 = canvas.height/2;

  drawCurve(canvasContext, x1, y1, x2, y2, level);

}

//RECURSIVE DRAWING METHOD
function drawCurve(canvasContext, x1, y1, x2, y2, level){
  //primitive state
  if (level == 0) {
    canvasContext.beginPath();
    canvasContext.moveTo(x1, y1);
    canvasContext.lineTo(x2, y2);
    canvasContext.stroke();
  }
  else {
    var xn = (x1 + x2) / 2 + (y1 - y2) / 2;
    var yn = (x2 - x1) / 2 + (y1 + y2) / 2;
    drawCurve(canvasContext, x1, y1, xn, yn, level-1);
    drawCurve(canvasContext, xn, yn, x2, y2, level-1)
  }
}
