function generateMockData() {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const generateNumbers = () => {
        const randomX = Math.floor(Math.random() * viewportWidth);
        const randomY = Math.floor(Math.random() * viewportHeight);

        return {
            randomX,
            randomY
        }
    }

    const boundingBoxes = [];
    for (let index = 0; index < Math.floor(Math.random() * 70); index++) {
        const { randomX, randomY } = generateNumbers();
        
        const randomContainer = {
            top: randomY,
            right: randomX + 50,
            bottom: randomY + 50,
            left: randomX,
        };

        boundingBoxes.push(randomContainer);
    }


    return boundingBoxes;
}