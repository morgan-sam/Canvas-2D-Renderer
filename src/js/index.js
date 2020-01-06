import '../css/main.css';

let canvas = document.getElementById('myCanvas');
canvas.height = 480;
canvas.width = 640;
let context = canvas.getContext('2d');

Math.random() >= 0.5
    ? (context.fillStyle = 'green')
    : (context.fillStyle = 'purple');
let x = 0;
let y = 0;
let width = 5;
let height = 5;

let object = [['red', 'orange', 'yellow'], ['blue', 'green', 'purple']];
console.log(object[0][1]);

for (let y = 0; y < canvas.height; y += height) {
    for (let x = 0; x < canvas.width; x += width) {
        Math.random() >= 0.5
            ? (context.fillStyle = 'green')
            : (context.fillStyle = 'purple');
        context.fillRect(x, y, width, height);
    }
}
