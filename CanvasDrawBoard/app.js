const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); // setting the context in which we are going to work

canvas.height = window.innerHeight; // setting the height and the width of canvas workspace, according to window's dimensions
canvas.width = window.innerWidth;
canvas.style = "cursor: pointer";

ctx.lineWidth = 3; // setting the line witdth in px

ctx.strokeStyle = "violet"; // giving a color
// ctx.strokeRect(100, 100, 200, 200); // x and y axes; width and height -> keeps inside empty
// ctx.strokeRect(200, 200, 200, 200); // x and y axes; width and height -> keeps inside empty

let painting;

function startDraw() {
  painting = true;
}
function stopDraw() {
  painting = false;
  ctx.beginPath();
}
function draw(e) {
  if (!painting) return;

  ctx.lineCap = "round";
  ctx.lineWidth = 10;

  ctx.lineTo(e.clientX, e.clientY);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.clientX, e.clientY);
}

canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mouseup", stopDraw);

canvas.addEventListener("mousemove", draw);
