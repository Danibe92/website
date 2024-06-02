const canvas = document.getElementById('canvas');
const pacman = document.getElementById('pacman');
const mangi = document.getElementById('mangi');

function checkBounds() {
  // Get the dimensions of the canvas and the div elements
  const canvasRect = document.getElementById('canvas').getBoundingClientRect();
  const pacmanRect = document.getElementById('pacman').getBoundingClientRect();
  const mangiRect = document.getElementById('mangi').getBoundingClientRect();

  // Check if the div elements are outside of the canvas
  if (pacmanRect.left < canvasRect.left) {
    document.getElementById('pacman').style.left = canvasRect.left + 'px';
  }
  if (pacmanRect.top < canvasRect.top) {
    document.getElementById('pacman').style.top = canvasRect.top + 'px';
  }
  if (pacmanRect.right > canvasRect.right) {
    document.getElementById('pacman').style.left = canvasRect.right - pacmanRect.width + 'px';
  }
  if (pacmanRect.bottom > canvasRect.bottom) {
    document.getElementById('pacman').style.top = canvasRect.bottom - pacmanRect.height + 'px';
  }
  if (mangiRect.left < canvasRect.left) {
    document.getElementById('mangi').style.left = canvasRect.left + 'px';
  }
  if (mangiRect.top < canvasRect.top) {
    document.getElementById('mangi').style.top = canvasRect.top + 'px';
  }
  if (mangiRect.right > canvasRect.right) {
    document.getElementById('mangi').style.left = canvasRect.right - mangiRect.width + 'px';
  }
  if (mangiRect.bottom > canvasRect.bottom) {
    document.getElementById('mangi').style.top = canvasRect.bottom - mangiRect.height + 'px';
  }
}

// Call the checkBounds function regularly to keep the div elements within the canvas
setInterval(checkBounds, 1);
