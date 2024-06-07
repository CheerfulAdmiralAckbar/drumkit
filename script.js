const cymbal = document.getElementById('cymbal');
const cymbalMain = document.getElementById('cymbal-main'); 

const tomdrum = document.getElementById('tom-drum');

const roundDrum = document.getElementById('round-drum');

const snareDrum = document.getElementById('snare-drum');

// hiHat whole element and top-plate-class to animate the openHat animation
const hiHat = document.getElementById('hihat');
const hiHatTopPlate = document.querySelector('.hihat-top-plate');

// Global check to see whether clicking the drum should play drum or kick, alternates based on previous sound played.
let playBoomSound = true;

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

roundDrum.addEventListener('click', () => {
  const boomSound = new Audio('./sounds/boom.wav');
  const kickSound = new Audio('./sounds/kick.wav');

  if (playBoomSound) {
    boomSound.play();
  } else {
    kickSound.play();
  }
  
  // Changes playBoomSound to the opposite of what the boolean currently is.
  playBoomSound = !playBoomSound;
});

snareDrum.addEventListener('click', () => {
  const snareSound = new Audio('./sounds/snare.wav');
  snareSound.play();
});

let hiHatClickCount = 0;

hiHat.addEventListener('click', () => {
  hiHatClickCount++;

  if (hiHatClickCount < 3) {
    const hiHatSound = new Audio('./sounds/hihat.wav');
    hiHatSound.play();
  } else {
    const openHatSound = new Audio('./sounds/openhat.wav');
    openHatSound.play();

    // Add class to animate top plate raising
    hiHatTopPlate.classList.add('raised');

    setTimeout(() => {
      // Remove class after 500ms to animate it lowering
      hiHatTopPlate.classList.remove('raised');
    }, 500);

    hiHatClickCount = 0;
  }
});