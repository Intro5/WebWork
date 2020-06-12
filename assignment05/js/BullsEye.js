function drawIt() {


  //TASK 1: ACCESS THE CANVAS
  var canvas = document.getElementById('mycircle');

  //TASK 2: RESIZE THE CANVAS ACCORDING TO THE WINDOW
  var canvasContext  = canvas.getContext("2d");
  canvas.width = window.innerWidth - 40;
  canvas.height = window.innerWidth - 40;

  //TASK 3: SET THE XY IN THE CENTER OF THE CANVAS
  var centerX = canvas.width / 2;
  var centerY = canvas.width / 2;

  //TASK 4: DRAW A CIRCLE WITH DIAMETER EQUAL TO WIDTH OF CANVAS
  var radius  = canvas.width / 2;
  var green = document.getElementById("nLevels").value/2;
  var midGreen = green + 12;
  var brighterGreen = green + 20;
  var zeroAngle = 0;
  var angle360 = 2 * Math.PI;
  canvasContext.fillStyle = `rgb(0, ${brighterGreen}, 0)`;
  canvasContext.beginPath();
  canvasContext.arc(centerX, centerY, radius, zeroAngle, angle360);
  canvasContext.fill();
  canvasContext.fillStyle = `rgb(0, ${midGreen}, 0)`;
  canvasContext.beginPath();
  canvasContext.arc(centerX, centerY, radius/1.5, zeroAngle, angle360);
  canvasContext.fill();
  canvasContext.fillStyle = `rgb(0, ${green}, 0)`;
  canvasContext.beginPath();
  canvasContext.arc(centerX, centerY, radius/3, zeroAngle, angle360);
  canvasContext.fill();
  

}

function drawLine (canvasContext, centerX, centerY){
  canvasContext.beginPath();
  canvasContext.moveTo(centerX, centerY);
  canvasContext.lineTo(0,0);
  canvasContext.stroke();
}
