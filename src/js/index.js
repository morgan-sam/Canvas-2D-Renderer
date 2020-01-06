import '../css/main.css';

let canvas = document.getElementById('myCanvas');
canvas.height = 480;
canvas.width = 640;
let context = canvas.getContext('2d');

let x = 0;
let y = 0;

let object = [
    ['red', 'orange', 'yellow'],
    ['blue', 'green', 'purple'],
    ['grey', 'black', 'white'],
];

let pixelWidth = canvas.width / object[0].length;
let pixelHeight = canvas.height / object.length;

let xPixels = object[0].length;
let yPixels = object.length;

for (let y = 0; y < yPixels; y++) {
    for (let x = 0; x < xPixels; x++) {
        context.fillStyle = object[y][x];
        context.fillRect(
            x * pixelWidth,
            y * pixelHeight,
            pixelWidth,
            pixelHeight,
        );
    }
}
