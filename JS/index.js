let canvas = document.querySelector('canvas');
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var startAngle = 0;
var endAngle = 2 * Math.PI;

function drawMoon() {
     var x = 100;
     var y = 100;
     var radius = canvas.width / 20;
     ctx.beginPath();
     ctx.arc(x, y, radius, startAngle, endAngle, false);
     ctx.strokeStyle = "yellow"
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
     ctx.strokeStyle = 'black';
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
     ctx.scale(.5, 1);

     // draw circle which will be stretched into an oval
     ctx.beginPath();
     ctx.arc(centerX, centerY, radius, startAngle, endAngle);

     // restore to original state
     ctx.restore();

     // apply styling
     ctx.fillStyle = 'black';
     ctx.fill();
     ctx.lineWidth = 2;
     ctx.strokeStyle = 'black';
     ctx.stroke();

     // left eye
     var leftcenterX = -40;
     var leftcenterY = 0;

     // save state
     ctx.save();

     // translate context so height from top of enclosing circle
     ctx.translate(canvas.width - 100, canvas.height - 120);

     // scale context horizontally by 50%
     ctx.scale(.5, 1);

     // draw circle which will be stretched into an oval
     ctx.beginPath();
     ctx.arc(leftcenterX, leftcenterY, radius, startAngle, endAngle, false);

     // restore to original state
     ctx.restore();

     // apply styling
     ctx.fillStyle = 'black';
     ctx.fill();
     ctx.lineWidth = 1;
     ctx.strokeStyle = 'black';
     ctx.stroke();
}

function drawHappyFace() {
     drawFace();
     drawEyes();
     drawSmile();
}

function drawSunAndMoon() {
     drawMoon()
     drawSun()
}

drawSunAndMoon();
drawHappyFace();

