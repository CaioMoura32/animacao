const scene = document.getElementById("scene");
const plates = document.querySelectorAll(".plate");
const rightDiv = scene.querySelector(".container > div:nth-child(1)");
const followDiv = scene.querySelector(".container > div:nth-child(2)");
let scrollTarget = 0, scrollCurrent = 0;
const maxScroll = 800;
// const cursor = document.getElementById("cursor");

window.addEventListener("scroll", () => {
    // scene.style.transform = `translateY(${window.scrollY}px)`;
    scrollTarget = Math.min(window.scrollY, maxScroll);
});

// Estados
let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
let cursorPos = { x: mouse.x, y: mouse.y };
let divTarget = { x: 0, y: 0 }, divCurrent = { x: 0, y: 0 };
let rightTarget = -140, rightCurrent = -120;
let platesExpanded = false;
let isPlateHovered = false;

let plateRotX = 60, plateRotY = 130;        // destino
let currentRotX = 0, currentRotY = 0;    // suavizado

// Eventos de movimento
document.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;

    const offsetX = (e.clientX / window.innerWidth - 0.5) * 2;
    const offsetY = (e.clientY / window.innerHeight - 0.5) * 2;

    divTarget.x = offsetX * 20;
    divTarget.y = offsetY * 20;

    if (scene.matches(":hover")) {
        plateRotX = offsetY * 30;
        plateRotY = offsetX * 30;
        rightTarget = 300;
    }
});

scene.addEventListener("mouseleave", () => {
    platesExpanded = false;
    plateRotX = 60;
    plateRotY = 130;
    rightTarget = -120;
});

// Efeito individual: afastar plate ao hover
plates.forEach((plate) => {
    plate.addEventListener("mouseenter", () => {
        plate.setAttribute("data-hovered", "true");
        isPlateHovered = true;
    });
    plate.addEventListener("mouseleave", () => {
        plate.removeAttribute("data-hovered");
        isPlateHovered = false;
    });
});

const offsety = 10;
const offsetx = 10;

// Loop principal
function animate() {
    // Cursor
    // cursorPos.x += (mouse.x - cursorPos.x) * 0.15;
    // cursorPos.y += (mouse.y - cursorPos.y) * 0.15;
    // cursor.style.transform = `translate(${cursorPos.x}px, ${cursorPos.y}px)`;

    // Div seguidora
    divCurrent.x += (divTarget.x - divCurrent.x) * 0.1;
    divCurrent.y += (divTarget.y - divCurrent.y) * 0.1;
    followDiv.style.transform = `translate(${divCurrent.x}px, ${divCurrent.y}px)`;

    // Right da primeira div
    rightCurrent += (rightTarget - rightCurrent) * 0.1;
    rightDiv.style.right = `${rightCurrent}px`;

    // Suaviza rotação das plates
    currentRotX += (plateRotX - currentRotX) * 0.1;
    currentRotY += (plateRotY - currentRotY) * 0.1;

    // Plates
    plates.forEach((plate, index) => {
        const base = 85;
        const extra = platesExpanded ? index * 15 : 0;
        const tx = base + extra;
        const ty = base + extra;

        let transform = `
        translateX(calc(var(--i) * ${tx}px))
        translateY(calc(var(--i) * ${ty}px))
        rotateX(${currentRotX}deg)
        rotateY(${currentRotY}deg)
      `;

        if (plate.dataset.hovered) {
            transform += ' translateZ(80px)';
        }

        plate.style.transform = transform;
    });
    scrollCurrent += (scrollTarget - scrollCurrent) * 0.1;
    scene.style.transform = `translateY(${scrollCurrent}px)`;

    requestAnimationFrame(animate);
}

animate();
