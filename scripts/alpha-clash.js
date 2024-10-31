// function handleKeyUpEvent(event) {
//     const pressed = event.key;
//     if (pressed === 'Escape') {
//         gameOver()
//     }
//     const currentAlphabet = document.getElementById('current-alphabet')
//     const currentAlphabetText = currentAlphabet.innerText
//     const convertAlphabet = currentAlphabetText.toLowerCase()
//     if (pressed === convertAlphabet) {
//         const currentScore = getElementNumberById('current-score')
//         const updateScore = currentScore + 1
//         setElementValueById('current-score', updateScore)
//         removeBackgroundColorById(convertAlphabet)
//         continueGame()
//     }
//     else {
//         const currentLife = getElementNumberById('current-life')
//         const updateLife = currentLife - 1
//         setElementValueById('current-life', updateLife)
//         if (updateLife === 0) {
//             gameOver()
//         }
//     }

// }

// document.addEventListener('keyup', handleKeyUpEvent)

// function continueGame() {
//     const alphabets = setARandomAlphabet()
//     const currentAlphabet = document.getElementById('current-alphabet')
//     currentAlphabet.innerText = alphabets
//     setBackgroundColorById(alphabets)

// }
// function play() {
//     hideElementById('home-screen')
//     hideElementById('play-end-screen')
//     setElementById('playing-screen')
//     setElementValueById('current-score', 0)
//     setElementValueById('current-life', 6)

//     continueGame()
// }
// function gameOver() {
//     hideElementById('playing-screen')
//     setElementById('play-end-screen')
//     const lastScore = getElementNumberById('current-score')
//     setElementValueById('last-score', lastScore)

//     const currentAlphabet = getElementById('current-alphabet')
//     removeBackgroundColorById(currentAlphabet)
// }

function handleKeyupEvent(event) {
    const pressed = event.key
    if (pressed === 'Escape') {
        gameOver()
    }
    const currentAlphabet = document.getElementById('current-alphabet').innerText
    const convertAlphabet = currentAlphabet.toLowerCase()
    if (pressed === convertAlphabet) {
        const currentScore = getElementValueById('current-score')
        const updateScore = currentScore + 1
        setElementValueById('current-score', updateScore)
        removeBackgroundColor(convertAlphabet)
        continueGame()
    }
    else {
        const currentLife = getElementValueById('current-life')
        const updateLife = currentLife - 1
        setElementValueById('current-life', updateLife)
        if (updateLife === 0) {
            gameOver()
        }
    }

}
document.addEventListener('keyup', handleKeyupEvent)
function continueGame() {
    const alphabets = setARandomAlphabet()
    const currentAlphabet = document.getElementById('current-alphabet')
    currentAlphabet.innerText = alphabets
    setBackgroundColor(alphabets)
}

function play() {
    hideElementById('home-screen')
    hideElementById('play-end-screen')
    showElementById('playing-screen')
    setElementValueById('current-score', 0)
    setElementValueById('current-life', 6)
    continueGame()
}
function gameOver() {
    hideElementById('playing-screen')
    showElementById('play-end-screen')
    const lastScore = getElementValueById('current-score')
    setElementValueById('last-score', lastScore)

    const currentAlphabet = getElementById('current-alphabet')
    removeBackgroundColor(currentAlphabet)

}