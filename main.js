// alert('hello')

function playSound(parameter) {
    // console.log(parameter);
    const audio = document.querySelector(`audio[data-key="${parameter.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${parameter.keyCode}"]`)
        // console.log(key);
        // console.log(audio);
    if (!audio) return
    audio.currentTime = 0 // return an audio to the start
    audio.play()
    key.classList.add('playing')
}

function removeTransition(parameter) {
    if (parameter.propertyName !== 'transform') return
        // console.log(parameter.propertyName);
    this.classList.remove('playing')
}

window.addEventListener('keydown', playSound)
let key = document.querySelectorAll('.key')
key.forEach((parameter) => parameter.addEventListener('transitionend', removeTransition))
    // console.log(key);