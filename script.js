const cymbal = document.getElementById('cymbal');
const cymbalMain = document.getElementById('cymbal-main'); 

const tomdrum = document.getElementById('tom-drum');

const roundDrum = document.getElementById('round-drum');

const snareDrum = document.getElementById('snare-drum');

// hiHat whole element and top-plate-class to animate the openHat animation
const hiHat = document.getElementById('hihat');
const hiHatTopPlate = document.querySelector('.hihat-top-plate');
const hiHatBottomPlate = document.querySelector('.hihat-bottom-plate');

// Global check to see whether clicking the drum should play drum or kick, alternates based on previous sound played.
let playBoomSound = true;

cymbal.addEventListener('click', () => {
  const rideSound = new Audio('./sounds/ride.wav');
  rideSound.play();

  cymbalMain.classList.add('rotated');

  setTimeout(() => {
    cymbalMain.classList.remove('rotated');
  }, 200);
});

tomdrum.addEventListener('click', () => {
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
  
  playBoomSound = !playBoomSound;
});

snareDrum.addEventListener('click', () => {
  const snareSound = new Audio('./sounds/snare.wav');
  snareSound.play();
});

let hiHatClickCount = 0;

hiHat.addEventListener('click', () => {
  hiHatClickCount++;

  if (hiHatClickCount < 4) {
    const hiHatSound = new Audio('./sounds/hihat.wav');
    hiHatSound.play();

    hiHatTopPlate.classList.add('tilted');
    hiHatBottomPlate.classList.add('tilted');

    setTimeout(() => {
      hiHatTopPlate.classList.remove('tilted');
      hiHatBottomPlate.classList.remove('tilted');
    }, 200);
  } else {
    const openHatSound = new Audio('./sounds/openhat.wav');
    openHatSound.play();

    hiHatTopPlate.classList.add('raised');

    setTimeout(() => {
      hiHatTopPlate.classList.remove('raised');
    }, 500);

    hiHatClickCount = 0;
  }
});

// Button Area
const boomButton = document.getElementById('boom-button');
const clapButton = document.getElementById('clap-button');
const hihatButton = document.getElementById('hihat-button');
const kickButton = document.getElementById('kick-button');
const openhatButton = document.getElementById('openhat-button');
const rideButton = document.getElementById('ride-button');
const snareButton = document.getElementById('snare-button');
const tinkButton = document.getElementById('tink-button');
const tomButton = document.getElementById('tom-button');

document.addEventListener('keydown', (event) => {
  console.log(`Event Key ${event.key}`);
  switch (event.key) {
    case "a": // Boom
      const boomAudio = new Audio('./sounds/boom.wav');
      boomAudio.play();
      break;
    case "s": // Clap
      const clapAudio = new Audio('./sounds/clap.wav');
      clapAudio.play();
      break;
    case "d": // HiHat
      const hihatAudio = new Audio('./sounds/hihat.wav');
      hihatAudio.play();

      hiHatTopPlate.classList.add('tilted');
      hiHatBottomPlate.classList.add('tilted');
  
      setTimeout(() => {
        hiHatTopPlate.classList.remove('tilted');
        hiHatBottomPlate.classList.remove('tilted');
      }, 200);
      break;
    case "f": // Kick
      const kickAudio = new Audio('./sounds/kick.wav');
      kickAudio.play();
      break;
    case "g": // OpenHat
      const openhatAudio = new Audio('./sounds/openhat.wav');
      openhatAudio.play();
      hiHatTopPlate.classList.add('raised');

      setTimeout(() => {
        hiHatTopPlate.classList.remove('raised');
      }, 500);
      break;
    case "h": // Ride
      const rideAudio = new Audio('./sounds/ride.wav');
      rideAudio.play();

      cymbalMain.classList.add('rotated');

      setTimeout(() => {
        cymbalMain.classList.remove('rotated');
      }, 200);
      break;
    case "j": // Snare
      const snareAudio = new Audio('./sounds/snare.wav');
      snareAudio.play();
      break;
    case "k": // Tink
      const tinkAudio = new Audio('./sounds/tink.wav');
      tinkAudio.play();
      break;
    case "l": // Tom
      const tomAudio = new Audio('./sounds/tom.wav');
      tomAudio.play();
      break;
    default:
      break;
  }
});