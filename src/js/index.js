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

const testFunction = async () => {
    const imgToMatrixObject = async imgURL => {
        let img = new Image();
        let cvs = document.createElement('canvas');
        let ctx = cvs.getContext('2d');
        img.onload = function() {
            ctx.drawImage(img, 0, 0);
            cvs.width = img.width;
            cvs.height = img.height;
            ctx.drawImage(img, 0, 0, img.width, img.height);
            let pixelData = [];
            let xRow = [];
            for (let y = 0; y < img.height; y++) {
                for (let x = 0; x < img.width; x++) {
                    xRow.push(Array.from(ctx.getImageData(x, y, 1, 1).data));
                }
                pixelData.push(Array.from(xRow));
                xRow = [];
            }
            console.log(pixelData);
            drawObject(pixelData, 0, 0);
            return pixelData;
        };
        img.src = imgURL;
    };

    let testKnight = await imgToMatrixObject(knight);
    console.log(testKnight);
};
testFunction();
