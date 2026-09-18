const COLORS = ['red', 'green', 'blue'];
const MIN_SIZE = 200;
const MAX_SIZE = 420;
const GROW_STEP = 10;
const SHRINK_STEP = 5;

let size = MIN_SIZE;
let colorIndex = 0;

function applyState() {
  $('#balloon').css({
    width:           size + 'px',
    height:          size + 'px',
    backgroundColor: COLORS[colorIndex]
  });
}

$(document).ready(function () {
  $('#balloon').on('click', function () {
    size += GROW_STEP;

    if (size > MAX_SIZE) {
      size = MIN_SIZE;
      colorIndex = 0;
    } else {
      colorIndex = (colorIndex + 1) % COLORS.length;
    }

    applyState();
  });

  $('#balloon').on('mouseleave', function () {
    if (size <= MIN_SIZE) return;

    size = Math.max(MIN_SIZE, size - SHRINK_STEP);
    colorIndex = (colorIndex - 1 + COLORS.length) % COLORS.length;

    applyState();
  });
});
