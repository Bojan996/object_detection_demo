const startButton = document.getElementById('start-draw');
const drawingContainer = document.getElementById('drawing-container');

startButton.addEventListener("click", startDrawingData);

function startDrawingData() {

    setInterval(() => {
        const generatedMockData = generateMockData();

        //Delete already drawn elements
        drawingContainer.innerHTML = "";

        //Generate new elements
        const newElements = [];
        generatedMockData.forEach(mockData => {
            const newelyCreatedElement = generateHTMLElement(mockData);

            newElements.push(newelyCreatedElement);
        });

        //Attach new elements to the DOM
        drawingContainer.innerHTML = newElements.join("");
    }, 100);

}

function generateHTMLElement({ top, right, bottom, left }) {
    return `<div class="bounding-box" style="border: 2px solid red; position: absolute; top: ${top}px; right: ${right}px; bottom: ${bottom}px; left: ${left}px"></div>`
}