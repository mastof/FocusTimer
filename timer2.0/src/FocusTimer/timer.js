import states from "./states.js"
import * as el from './elements.js'
import { reset } from "./actions.js"
import { Kitchen } from "./sounds.js"


export function countdown() {
  if(!states.isRunning) {
    return
  }
  
  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  seconds--

  if(seconds < 0) {
    seconds = 59
    minutes--
  }

  if(minutes < 0) {
    Kitchen.play()
    reset()
    return
  }

  updateDisplay(minutes, seconds)

  setTimeout(() => countdown(), 1000)
}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? states.minutes
  seconds = seconds ?? states.seconds

  el.minutes.textContent = String(minutes).padStart(2, "0")
  el.seconds.textContent = String(seconds).padStart(2, "0")
}

export function moreMinutes() {
  if (states.minutes < 60) {
    states.minutes += 5;
    updateDisplay();
  }
}

export function lessMinutes() {
  if (states.minutes > 0) {
    states.minutes -= 5;
    updateDisplay();
  }
}