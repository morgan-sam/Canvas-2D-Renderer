import '../css/main.css';

let canvas = document.getElementById('myCanvas');
canvas.height = 480;
canvas.width = 640;
let context = canvas.getContext('2d');

let object = [
    ['red', 'orange', 'yellow'],
    ['blue', 'green', 'purple'],
    ['grey', 'black', 'white'],
    ['red', 'orange', 'yellow'],
    ['blue', 'green', 'purple'],
    ['grey', 'black', 'white'],
    ['red', 'orange', 'yellow'],
    ['blue', 'green', 'purple'],
    ['grey', 'black', 'white'],
];

let object2 = [
    ['red', 'red', 'red'],
    ['red', 'steelblue', 'red'],
    ['red', 'red', 'red'],
    ['green', 'green', 'green'],
    ['green', 'white', 'green'],
    ['green', 'green', 'green'],
    ['red', 'red', 'red'],
    ['red', 'steelblue', 'red'],
    ['red', 'red', 'red'],
];

function drawObject(inputObject, objX, objY) {
    let pixelHeight, pixelWidth;
    let xPixels = inputObject[0].length;
    let yPixels = inputObject.length;

    //stretch pixels
    pixelWidth = canvas.width / xPixels;
    pixelHeight = canvas.height / yPixels;

    //fixed size pixels
    pixelWidth = 5;
    pixelHeight = 5;

    objX = objX * pixelWidth;
    objY = objY * pixelHeight;

    for (let y = 0; y < yPixels; y++) {
        for (let x = 0; x < xPixels; x++) {
            context.fillStyle = inputObject[y][x];
            context.fillRect(
                objX + x * pixelWidth,
                objY + y * pixelHeight,
                pixelWidth,
                pixelHeight,
            );
        }
    }
}

drawObject(object, 0, 0);
drawObject(object2, 1, 1);
