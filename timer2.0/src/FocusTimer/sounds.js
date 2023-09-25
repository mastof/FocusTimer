export const buttonStorePressAudio = new Audio('./assets/Cafeteria.wav')

export const buttonTreePressAudio = new Audio('./assets/Floresta.wav')

export const buttonFlarePressAudio = new Audio('./assets/Lareira.wav')

export const buttonSnowPressAudio = new Audio('./assets/Chuva.wav')

export const buttonPressAudio = new Audio('./assets/button-press.wav')

export const Kitchen = new Audio('./assets/kitchen-timer.mp3')


buttonFlarePressAudio.loop = true
buttonSnowPressAudio.loop = true
buttonStorePressAudio.loop = true
buttonTreePressAudio.loop = true


Kitchen.volume= 0.08;
buttonPressAudio.volume= 0.15;
buttonFlarePressAudio.volume= 0.9;
buttonTreePressAudio.volume= 0.5;
buttonStorePressAudio.volume- 0.01;
buttonSnowPressAudio.volume=0.5;