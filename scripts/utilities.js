function hideElementById(id) {
    const element = document.getElementById(id)
    element.classList.add('hidden')
}
function setElementById(id) {
    const element = document.getElementById(id)
    element.classList.remove('hidden')
}
function setBackgroundColorById(id) {
    const element = document.getElementById(id)
    element.classList.add('bg-[#FFA500]')
}

function setARandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabetArray = alphabetString.split('')
    const alphabetNumber = Math.random() * 25
    const index = Math.round(alphabetNumber)
    const alphabet = alphabetArray[index]
    return alphabet
}