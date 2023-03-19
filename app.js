let isDown = false;
let isDragging = false
let startX;
let scrollLeft;
const slider = document.querySelector('.slider')

const end = () => {
	isDown = false;
  slider.classList.remove('active');
  if(!isDragging) return;
    isDragging = false;
}

const start = (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX || e.touches[0].pageX;
  scrollLeft = slider.scrollLeft;	
}

const move = (e) => {
	if(!isDown) return;

  e.preventDefault();
  isDragging = true;
  const x = e.pageX || e.touches[0].pageX;
  distance = (x - startX);
  slider.scrollLeft = scrollLeft - distance;
}

slider.addEventListener('mousedown', start);
slider.addEventListener('touchstart', start);

slider.addEventListener('mousemove', move);
slider.addEventListener('touchmove', move);

slider.addEventListener('mouseleave', end);
slider.addEventListener('mouseup', end);
slider.addEventListener('touchend', end);






