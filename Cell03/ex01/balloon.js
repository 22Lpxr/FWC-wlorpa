const balloon = document.getElementById('balloon');

const COLORS = ['red', 'green', 'blue'];
const MIN_SIZE = 200;
const MAX_SIZE = 420;
const GROW_STEP = 10;
const SHRINK_STEP = 5;

let size = MIN_SIZE;
let colorIndex = 0;

function applyState() {
  balloon.style.width = size + 'px';
  balloon.style.height = size + 'px';
  balloon.style.backgroundColor = COLORS[colorIndex];
}

balloon.addEventListener('click', () => {
  size += GROW_STEP;

  if (size > MAX_SIZE) {
    size = MIN_SIZE;
    colorIndex = 0;
  } else {
    colorIndex = (colorIndex + 1) % COLORS.length;
  }

  applyState();
});


balloon.addEventListener('mouseleave', () => {
  if (size <= MIN_SIZE) return;

  size = Math.max(MIN_SIZE, size - SHRINK_STEP);
  colorIndex = (colorIndex - 1 + COLORS.length) % COLORS.length;

  applyState();
});
