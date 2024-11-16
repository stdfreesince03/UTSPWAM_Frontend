const canvas = document.getElementById('jumpCanvas');
const ctx = canvas.getContext('2d');
let score = 0;

function setHighDPI(canvas, context, scaleFactor = 2) {
    const originalWidth = canvas.width;
    const originalHeight = canvas.height;

    canvas.width = originalWidth * scaleFactor;
    canvas.height = originalHeight * scaleFactor;
    canvas.style.width = `${originalWidth}px`;
    canvas.style.height = `${originalHeight}px`;

    context.scale(scaleFactor, scaleFactor);
    recalculateLedgePositions();
}

let ledgeWidth1, ledgeX1, ledgeHeight1, ledgeY1;
let ledgeWidth2, ledgeX2, ledgeHeight2, ledgeY2;

function recalculateLedgePositions() {
    ledgeWidth1 = canvas.width * 0.35 / 2;
    ledgeX1 = 0;
    ledgeHeight1 = canvas.height * 0.5 / 2;
    ledgeY1 = canvas.height / 2 - ledgeHeight1;

    ledgeWidth2 = canvas.width * 0.3 / 2;
    ledgeX2 = canvas.width * 0.7 / 2;
    ledgeHeight2 = canvas.height * 0.3 / 2;
    ledgeY2 = canvas.height / 2 - ledgeHeight2;
}

setHighDPI(canvas, ctx);

const carSelect = document.getElementById('carSelect');
const speedSlider = document.getElementById('speed');
const speedValue = document.getElementById('speedValue');
const carName = document.getElementById('carName');
const carImage = document.getElementById('carImage');
const startButton = document.getElementById('startButton');

const cars = [
    { name: 'Car 1', mass: 1000, image: 'car_1.png', jumpForce: 12 },
    { name: 'Car 2', mass: 1200, image: 'car_2.png', jumpForce: 11 },
    { name: 'Car 3', mass: 1400, image: 'car_3.png', jumpForce: 10 },
    { name: 'Car 4', mass: 1600, image: 'car_4.png', jumpForce: 9 },
    { name: 'Car 5', mass: 1800, image: 'car_5.png', jumpForce: 8 },
    { name: 'Car 6', mass: 2000, image: 'car_6.png', jumpForce: 7 }
];

const GRAVITY = 9.81;
let gameState = {
    speed: 0,
    selectedCar: cars[0],
    position: { x: 0, y: 0 },
    velocity: { x: 0, y: 0 },
    isJumping: false,
    phase: 'ready',
    lastTimestamp: 0,
    carSize: { width: 0, height: 0 },
    initialSpeed: 0,
    hasLanded: false  // New flag to track if car has successfully landed
};

let carImg = new Image();

function preloadCarImage() {
    carImg.src = `/images/${gameState.selectedCar.image}`;
    carImg.onload = () => {
        gameState.carSize = {
            width: canvas.width * 0.05,
            height: canvas.height * 0.05
        };
        positionCarOnLedge();
        drawScene();
    };
}

function drawGrassyLedge() {
    ctx.fillStyle = '#228B22';
    ctx.fillRect(ledgeX1, ledgeY1, ledgeWidth1, ledgeHeight1);
    ctx.fillRect(ledgeX2, ledgeY2, ledgeWidth2, ledgeHeight2);
}

function drawCar(x, y) {
    ctx.drawImage(carImg, x, y, gameState.carSize.width, gameState.carSize.height);
}

function drawScene() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGrassyLedge();
    drawScore();

    drawCar(gameState.position.x, gameState.position.y);
}

function updatePhysics(deltaTime) {
    switch (gameState.phase) {
        case 'approach':
            gameState.position.x += gameState.speed * deltaTime;
            if (gameState.position.x >= ledgeWidth1 - gameState.carSize.width) {
                gameState.phase = 'jump';
                initiateJump();
            }
            break;

        case 'jump':
            gameState.position.x += gameState.velocity.x * deltaTime;
            gameState.position.y += gameState.velocity.y * deltaTime;
            gameState.velocity.y += GRAVITY * deltaTime;
            checkCollisions();
            break;

        case 'driving':
            if (gameState.hasLanded) {
                gameState.position.x += gameState.initialSpeed * deltaTime;
            }
            break;
    }
}

function checkCollisions() {
    const carBottom = gameState.position.y + gameState.carSize.height;
    const carRight = gameState.position.x + gameState.carSize.width;
    const carLeft = gameState.position.x;


    if (gameState.velocity.y > 0 &&
        carBottom >= ledgeY2 &&
        carLeft >= ledgeX2 &&
        carRight <= ledgeX2 + ledgeWidth2) {

        // Successfully landed
        gameState.position.y = ledgeY2 - gameState.carSize.height;
        gameState.velocity.y = 0;
        gameState.velocity.x = gameState.initialSpeed;
        gameState.phase = 'driving';
        gameState.hasLanded = true;
    }

    else if (carBottom > canvas.height ||
        (carLeft > ledgeWidth1 &&
            carBottom > ledgeY1 &&
            !gameState.hasLanded)) {

        endGame('crash');
    }

    else if (carLeft > canvas.width) {
        endGame('success');
    }
}

function initiateJump() {
    const jumpAngle = Math.PI / 4;
    const jumpSpeed = gameState.selectedCar.jumpForce;

    gameState.velocity.x = gameState.speed;
    gameState.velocity.y = -jumpSpeed * Math.sin(jumpAngle);
}

function drawScore() {
    ctx.font = '20px Arial';
    ctx.fillStyle = '#333';
    ctx.textAlign = 'right';
    ctx.fillText(`Score: ${score}`, canvas.width / 2 - 20, 40);
}

function endGame(status) {
    gameState.phase = 'finished';
    gameState.isJumping = false;

    if (status === 'success') {
        score++;
        console.log('Car made it through! Restarting...');
    } else if (status === 'crash') {
        score--;
        console.log('Car crashed! Restarting...');
    }

    restartGame();
}

function restartGame() {
    speedSlider.disabled = false;
    carSelect.disabled = false;
    gameState.hasLanded = false;  // Reset landing flag
    positionCarOnLedge();
    gameState.phase = 'ready';
}

function startJump() {
    if (gameState.isJumping) return;

    gameState.isJumping = true;
    gameState.phase = 'approach';
    gameState.initialSpeed = parseFloat(speedSlider.value) * (1000 / 3600);
    gameState.speed = gameState.initialSpeed;
    gameState.lastTimestamp = performance.now();
    gameState.hasLanded = false;

    speedSlider.disabled = true;
    carSelect.disabled = true;

    requestAnimationFrame(gameLoop);
}

function gameLoop(timestamp) {
    if (!gameState.isJumping) return;

    const deltaTime = (timestamp - gameState.lastTimestamp) / 1000;
    gameState.lastTimestamp = timestamp;

    updatePhysics(deltaTime);
    drawScene();

    if (gameState.phase !== 'finished') {
        requestAnimationFrame(gameLoop);
    }
}

function updateCarSelection() {
    gameState.selectedCar = cars[parseInt(carSelect.value) - 1];
    carName.textContent = gameState.selectedCar.name;
    carImage.src = `/images/${gameState.selectedCar.image}`;
    preloadCarImage();
}

function updateSpeed() {
    if (!gameState.isJumping) {
        speedValue.textContent = speedSlider.value;
    }
}

function positionCarOnLedge() {
    gameState.position = {
        x: ledgeX1 + (ledgeWidth1 * 0.2),
        y: ledgeY1 - gameState.carSize.height
    };
    gameState.velocity = { x: 0, y: 0 };
    gameState.phase = 'ready';
    drawScene();
}

carSelect.addEventListener('input', updateCarSelection);
speedSlider.addEventListener('input', updateSpeed);
startButton.addEventListener('click', startJump);
preloadCarImage();