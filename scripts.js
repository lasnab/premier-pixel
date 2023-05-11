function handleNavOpen() {
  document.getElementById('open-nav-button').style.display = 'none';
  var x = document.getElementById('overlayNav');
  if (x.className === 'overlay-nav') {
    x.className += ' responsive';
  }
}

function handleNavClose() {
  var x = document.getElementById('overlayNav');
  if (x.className === 'overlay-nav responsive') {
    x.className = 'overlay-nav';
  }
  document.getElementById('open-nav-button').style.display = 'block';
}

var NUMBER_OF_STARS = 115;

var addPulse = function (element) {
  var pulseTime = Math.random() * 4000;
  setTimeout(function () {
    element.className += ' pulse';
  }, pulseTime);
};

for (var jess = 0; jess < NUMBER_OF_STARS; jess++) {
  var aStar = document.createElement('div');
  aStar.className = 'star';

  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;

  var x = Math.random() * windowWidth;
  aStar.style.left = x + 'px';
  document.body.appendChild(aStar);

  var y = Math.random() * windowHeight;
  aStar.style.top = y + 'px';

  addPulse(aStar);
}
