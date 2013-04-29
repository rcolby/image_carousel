var carousel = document.getElementById('carousel');
var leftPosition = 0;
var objectId = '';

carousel.style.marginLeft = '0';
carousel.style.opacity = 1;

var prevButton = document.getElementById('prev');
var nextButton = document.getElementById('next');

nextButton.onclick = function() {
  if(leftPosition > -1049) {
    objectId = setInterval(fadeOut, 500);
    carousel.style.marginLeft = (parseInt(carousel.style.marginLeft, 10) - 525) + 'px';
    objectId = setInterval(fadeIn, 500);
    leftPosition -= 525;
  } else {
    objectId = setInterval(fadeOut, 500);
    carousel.style.marginLeft = '0';
    objectId = setInterval(fadeIn, 500);
    leftPosition = 0;
  }
};

prevButton.onclick = function() {
  if(leftPosition === 0) {
    setInterval(fadeOut, 500);
    carousel.style.marginLeft = '-1050px';
    objectId = setInterval(fadeIn, 500);
    leftPosition = -1050;
  } else {
    setInterval(fadeOut, 500);
    carousel.style.marginLeft = (parseInt(carousel.style.marginLeft, 10) + 525) + 'px';
    objectId = setInterval(fadeIn, 500);
    leftPosition += 525;
  }
};

function fadeIn() {
  if(parseFloat(carousel.style.opacity, 10) >= 1){
    return;
  } else {
    carousel.style.opacity = (parseFloat(carousel.style.opacity, 10) + 0.002);
  }
}

function fadeOut() {
  if(parseFloat(carousel.style.opacity, 10) <= 0){
    return;
  } else {
    carousel.style.opacity = (parseFloat(carousel.style.opacity, 10) - 0.002);
  }
}