const startButton = document.getElementById('start-draw');
const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");

// Get the device's pixel ratio
var dpr = window.devicePixelRatio || 1;

// Set the canvas's actual width and height
canvas.width = window.innerWidth * dpr;
canvas.height = window.innerHeight * dpr;

// Scale the canvas using the pixel ratio
ctx.scale(dpr, dpr);


startButton.addEventListener("click", startDrawingData);

function startDrawingData() {

    setInterval(() => {
        const generatedMockData = generateMockData();
        
        // Clear the canvas element
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        
        //Draw bounding boxes
        generatedMockData.forEach(({ top, right, bottom, left }) => {
            // Draw a rectangle on the canvas element
            const divisor = 4;
            ctx.beginPath();
            ctx.rect(left / divisor, top / divisor, right / divisor, bottom / divisor);
            ctx.lineWidth = 2;
            ctx.strokeStyle = "red";
            ctx.stroke();
        });

    }, 100);

}