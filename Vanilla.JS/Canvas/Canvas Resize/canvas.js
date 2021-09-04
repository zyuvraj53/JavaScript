var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

c.fillStyle = 'rgba(255, 0, 0, 0.1)';
c.fillRect(100, 100, 100, 100);
c.fillRect(400, 100, 100, 100);
c.fillRect(300, 400, 100, 100);


console.log(canvas);

//line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.strokeStyle= "#af1099";
c.stroke();

//arc

c.beginPath();
c.arc(300, 300, 30, 0, Math.PI * 2, false);
c.strokeStyle = 'rgba(255, 5,5, 1)';
c.stroke();