const cymbal = document.getElementById('cymbal');
const cymbalMain = document.getElementById('cymbal-main'); 

const tomdrum = document.getElementById('tom-drum')

cymbal.addEventListener('click', () => {
  // starting new audo inside event listener lets auto play multiple times instead of waiting to end
  const rideSound = new Audio('./sounds/ride.wav');
  rideSound.play();

  cymbalMain.classList.add('rotated');

  setTimeout(() => {
    cymbalMain.classList.remove('rotated');
  }, 200);
});

tomdrum.addEventListener('click', () => {
  // starting new audo inside event listener lets auto play multiple times instead of waiting to end
  const tomSound = new Audio('./sounds/tom.wav');
  tomSound.play();

});