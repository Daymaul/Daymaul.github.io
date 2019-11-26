var image1 = document.querySelector('.pic1');
var image2 = document.querySelector('.pic2');
var image3 = document.querySelector('.pic3');
image1.addEventListener( 'click', function() {
  image1.classList.toggle('is-flipped');
});
image2.addEventListener( 'click', function() {
  image2.classList.toggle('is-flipped');
});
image3.addEventListener( 'click', function() {
  image3.classList.toggle('is-flipped');
});
