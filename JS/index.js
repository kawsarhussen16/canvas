let canvas = document.querySelector('canvas');
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var x = 100;
var y = 100;
var radius = canvas.width / 20;
var startAngle = 0;
var endAngle = 2 * Math.PI;
function drawMoon() {
     ctx.beginPath();
     ctx.arc(x, y, radius, startAngle, endAngle, false);
     ctx.strokeStyle = "yellow"
     ctx.stroke();
     ctx.fillStyle = "#FFE577";
     ctx.fill();
}
let sunX = canvas.width / 2;
let sunY = canvas.height / 2;
let sunRadius = canvas.width / 8;
function drawSun() {
     ctx.beginPath();
     ctx.arc(sunX, sunY, sunRadius, startAngle, endAngle, false);
     ctx.stroke();
     ctx.fillStyle = "yellow";
     ctx.fill();
}


drawMoon()
drawSun()

