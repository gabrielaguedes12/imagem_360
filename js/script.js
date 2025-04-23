const container = document.querySelector(".container");
const image = container.querySelector("img");

const cursor = {
    isDragging: false,
    initialPosition: 0,
};

let currentImage = 1;

updateImage = (direction) => {
    if (direction < 0) {
        if (currentImage == 12) {
            currentImage = 1;
        } else {
            currentImage += 1;
        }
    }

    if (direction > 0) {
        if (currentImage == 1) {
            currentImage = 12;
        } else {
            currentImage -= 1;
        }
    }

    image.src = `img/${currentImage}.jpg`;
};

//quando estiver pressionado
container.addEventListener("mousedown", (event) => {
    cursor.isDragging = true;
    cursor.initialPosition = event.clientX;
});

//nao estiver
container.addEventListener("mouseup", () => {
    cursor.isDragging = false;
});

//quando estiver pressionado em movimento
container.addEventListener("mousemove", ({ clientX }) => {
    if (!cursor.isDragging) return;

    const offset = cursor.initialPosition - clientX;

    if (Math.abs(offset) >= 40) {
        updateImage(offset);
        cursor.initialPosition = clientX;
    }
});