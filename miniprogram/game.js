let canvas = wx.createCanvas();
console.log(canvas.width, canvas.height);
let ctx = canvas.getContext('2d');
ctx.fillStyle = 'red';
ctx.fillRect(10, 10, 300, 300);
