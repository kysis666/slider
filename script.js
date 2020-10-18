var i = 0;
var px = 0;

function photoslide() {
  var slider = document.getElementById("slider");
  var photo = document.querySelectorAll(".slider .photo");

  px += photo[i].offsetWidth;

  if (i >= photo.length - 1) {
    i = 0;
    px = 0;
  }

  slider.style.transform = `translate(-${px}px, 0px)`;
  i++;
}

setInterval(photoslide, 1000);