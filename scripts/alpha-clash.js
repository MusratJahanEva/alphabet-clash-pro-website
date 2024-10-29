function continueGame() {
    const alphabets = setARandomAlphabet()
    const currentAlphabet = document.getElementById('current-alphabet')
    currentAlphabet.innerText = alphabets
    setBackgroundColorById(alphabets)

}







function play() {
    hideElementById('home-screen')
    setElementById('playing-screen')
    continueGame()
}