let canvas = document.getElementById("field_1");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "red";
ctx.font = "30px Arial";
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
ctx.fillText("Hello from the other side :D", canvas.width/2, 50);
var startAngle = 0;
var endAngle = 2 * Math.PI;

function drawMoon() {
  var x = 100;
  var y = 100;
  var radius = canvas.width / 20;
  ctx.beginPath();
  ctx.arc(x, y, radius, startAngle, endAngle, false);
  ctx.strokeStyle = "yellow";
  ctx.stroke();
  ctx.fillStyle = "#FFE577";
  ctx.fill();
}

function drawSun() {
  let sunX = canvas.width / 2;
  let sunY = canvas.height / 2;
  let sunRadius = canvas.width / 8;
  ctx.beginPath();
  ctx.arc(sunX, sunY, sunRadius, startAngle, endAngle, false);
  ctx.stroke();
  ctx.fillStyle = "yellow";
  ctx.fill();
}

function drawFace() {
  let faceX = canvas.width - 100;
  let faceY = canvas.height - 100;
  let faceRadius = 50;
  ctx.beginPath();
  ctx.arc(faceX, faceY, faceRadius, startAngle, endAngle);
  ctx.stroke();
  ctx.fillStyle = "yellow";
  ctx.fill();
}

function drawSmile() {
  let x = canvas.width - 100;
  let y = canvas.height - 85;
  let radius = 10;
  let startAngle = 2 * Math.PI;
  let endAngle = 1 * Math.PI;

  ctx.beginPath();
  ctx.arc(x, y, radius, startAngle, endAngle);
  ctx.lineWidth = 7;

  // line color
  ctx.strokeStyle = "black";
  ctx.stroke();
}

function drawEyes() {
  ///   Right Eye
  let centerX = 40;
  let centerY = 0;
  let radius = 10;

  // save state
  ctx.save();
  ctx.translate(canvas.width - 110, canvas.height - 120);
  // // scale context horizontally by 50%
  ctx.scale(0.5, 1);

  // draw circle which will be stretched into an oval
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, startAngle, endAngle);

  // restore to original state
  ctx.restore();

  // apply styling
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = "black";
  ctx.stroke();

  // left eye
  var leftcenterX = -40;
  var leftcenterY = 0;

  // save state
  ctx.save();

  // translate context so height from top of enclosing circle
  ctx.translate(canvas.width - 100, canvas.height - 120);

  // scale context horizontally by 50%
  ctx.scale(0.5, 1);

  // draw circle which will be stretched into an oval
  ctx.beginPath();
  ctx.arc(leftcenterX, leftcenterY, radius, startAngle, endAngle, false);

  // restore to original state
  ctx.restore();

  // apply styling
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.lineWidth = 1;
  ctx.strokeStyle = "black";
  ctx.stroke();
}

function drawHappyFace() {
  drawFace();
  drawEyes();
  drawSmile();
}

function drawSunAndMoon() {
  drawMoon();
  drawSun();
}

function init() {
  w = canvas.width;
  h = canvas.height;
  x = Math.round(w / 2);
  y = Math.round(h / 2);
  z = (w + h) / 2;
  star_color_ratio = 1 / z;
  cursor_x = x;
  cursor_y = y;

  for (var t = 0; n > t; t++) {
    star[t] = new Array(5);
    star[t][0] = Math.random() * w * 2 - 2 * x;
    star[t][1] = Math.random() * h * 2 - 2 * y;
    star[t][2] = Math.round(Math.random() * z);
    star[t][3] = 0;
    star[t][4] = 0;
    r.width = w;
    r.height = h;
    context = r.getContext("2d");
    context.fillStyle = "rgb(0,0,0)";
    context.strokeStyle = "rgb(0,255,255)";
  }
}
function background() {
  context.fillRect(0, 0, w, h);

  for (var t = 0; n > t; t++) {
    //    drawSunAndMoon();
    //    drawHappyFace();
    star_x_save = star[t][3];
    star_y_save = star[t][4];
    star[t][2] -= star_speed;
    star[t][2] < 0 && (star[t][2] += z);
    star[t][3] = x + (star[t][0] / star[t][2]) * star_ratio;
    star[t][4] = y + (star[t][1] / star[t][2]) * star_ratio;
    context.lineWidth = 2 * (1 - star_color_ratio * star[t][2]);
    context.beginPath();
    context.moveTo(star_x_save, star_y_save);
    context.lineTo(star[t][3], star[t][4]);
    context.stroke();
    context.closePath();
    setTimeout("background()", fps);
  }
}

var r = document.getElementById("field"),
  n = 812,
  w = 1,
  h = 1,
  x = 0,
  y = 0,
  z = 0,
  star_color_ratio = 0,
  star_x_save,
  star_y_save,
  star_ratio = 115,
  star_speed = 0.5,
  star = new Array(n),
  cursor_x = 0,
  cursor_y = 0,
  context,
  fps = 10;

  
  drawSunAndMoon();
  drawHappyFace();

  init();
  background();
