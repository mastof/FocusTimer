import states  from './states.js';
import * as timer from './timer.js'
import * as el from './elements.js'
import * as audio from './sounds.js'

export function toggleRunning() {
  states.isRunning = document.documentElement.classList.toggle('running')

  timer.countdown()

  audio.buttonPressAudio.play()
}

export function reset() {
  states.isRunning = false
  document.documentElement.classList.remove('running')
  timer.updateDisplay()
}

export function plusMin() {
  timer.moreMinutes()

}

export function minusMin() {
  timer.lessMinutes()
}

// sounds
export function tree() {
  const tree = document.querySelector('[data-sounds*="tree"]');
  states.isMute = tree.classList.toggle('secondaryc');

  if(states.isMute) {
  audio.buttonTreePressAudio.play()
  return
  }

  audio.buttonTreePressAudio.pause()
}

export function snow() {
  const snow = document.querySelector('[data-sounds*="snow"]');
  states.isMute = snow.classList.toggle('secondaryc');
  
  if(states.isMute) {
  audio.buttonSnowPressAudio.play()
  return
  }

  audio.buttonSnowPressAudio.pause()
}

export function flame() {
  const flame = document.querySelector('[data-sounds*="flame"]');
  states.isMute = flame.classList.toggle('secondaryc');

  if(states.isMute) {
  audio.buttonFlarePressAudio.play()
  return
  }

  audio.buttonFlarePressAudio.pause()
}

export function store() {
  const store = document.querySelector('[data-sounds*="store"]');
  states.isMute = store.classList.toggle('secondaryc');
  
  if(states.isMute) {
  audio.buttonStorePressAudio.play()
  return
  }

  audio.buttonStorePressAudio.pause()
}