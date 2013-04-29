var carousel = document.getElementById('carousel');
var leftPosition = 0;

carousel.style.marginLeft = '0';


prevButton = document.getElementById('prev');
nextButton = document.getElementById('next');



nextButton.onclick = function() {
  if(leftPosition > -1049) {
    carousel.style.marginLeft = (parseInt(carousel.style.marginLeft, 10) - 525) + 'px';
    leftPosition -= 525;
  } else {
    carousel.style.marginLeft = '0';
    leftPosition = 0;
  }
};

prevButton.onclick = function() {
  if(leftPosition === 0) {
    carousel.style.marginLeft = '-1050px';
    leftPosition = -1050;
  } else {
    carousel.style.marginLeft = (parseInt(carousel.style.marginLeft, 10) + 525) + 'px';
    leftPosition += 525;
  }
};