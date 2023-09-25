import { controls, sounds } from "./elements.js";
import * as actions from './actions.js'


export function registerControls() {
  controls.addEventListener('click', (event)=> {
  const action = event.target.dataset.action
  if(typeof actions[action] != 'function') {
  return
  }
  
  actions[action]()
  })
  }
  
  export function registerSounds() {
    sounds.addEventListener('click', (event)=> {
      const music = event.target.dataset.sounds
      if(typeof actions[music] != 'function') {
      return
      }
      
      actions[music]()
      })
      }
      
  
  

