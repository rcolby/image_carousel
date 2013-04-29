var carousel = document.getElementById('carousel');
carousel.style.marginLeft = '0';


prevButton = document.getElementById('prev');
nextButton = document.getElementById('next');



nextButton.onclick = function() {
  carousel.style.marginLeft = (parseInt(carousel.style.marginLeft, 10) - 525) + 'px';
};

prevButton.onclick = function() {
  carousel.style.marginLeft = (parseInt(carousel.style.marginLeft, 10) + 525) + 'px';
};