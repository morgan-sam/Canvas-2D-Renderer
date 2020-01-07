import '../css/main.css';
import knight from '../img/knight.png';

let canvas = document.getElementById('myCanvas');
canvas.height = 480;
canvas.width = 640;
let context = canvas.getContext('2d');

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
            context.fillStyle = arrayToRGBA(inputObject[y][x]);
            context.fillRect(
                objX + x * pixelWidth,
                objY + y * pixelHeight,
                pixelWidth,
                pixelHeight,
            );
        }
    }
}

function arrayToRGBA(rgbaArrayInput) {
    let string = rgbaArrayInput;
    let rgbaColor = `rgba(${string})`;
    return rgbaColor;
}

const imgToMatrixObject = async imgURL => {
    let img = await loadImage(imgURL);
    let cvs = document.createElement('canvas');
    cvs.width = img.width;
    cvs.height = img.height;
    let ctx = cvs.getContext('2d');
    ctx.drawImage(img, 0, 0);
    let pixelData = [];
    let xRow = [];
    let pixel;
    for (let y = 0; y < cvs.height; y++) {
        for (let x = 0; x < cvs.width; x++) {
            pixel = Array.from(ctx.getImageData(x, y, 1, 1).data);
            //if white pixel make transparent
            if (pixel[0] === 255 && pixel[1] === 255 && pixel[2] == 255) {
                pixel = [255, 255, 255, 0];
            }
            xRow.push(pixel);
        }
        pixelData.push(Array.from(xRow));
        xRow = [];
    }
    return pixelData;
};

const loadImage = async imgURL => {
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = imgURL;
    });
};

const drawKnightsDemo = async () => {
    let testKnight = await imgToMatrixObject(knight);
    let y = 0;
    let intervalID = setInterval(function() {
        let randx = randomIntFromInterval(0, 100);
        drawObject(testKnight, randx + 5, y / 4 + 5);
        if (y++ === 200) {
            window.clearInterval(intervalID);
        }
    }, 10);
};

drawKnightsDemo();

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
