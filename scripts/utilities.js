// function hideElementById(id) {
//     const element = document.getElementById(id)
//     element.classList.add('hidden')
// }
// function setElementById(id) {
//     const element = document.getElementById(id)
//     element.classList.remove('hidden')
// }
// function setBackgroundColorById(id) {
//     const element = document.getElementById(id)
//     element.classList.add('bg-[#FFA500]')
// }
// function removeBackgroundColorById(id) {
//     const element = document.getElementById(id);
//     element.classList.remove('bg-[#FFA500]')
// }
// function getElementNumberById(elementId) {
//     const element = document.getElementById(elementId).innerText;
//     const value = parseInt(element)
//     return value;
// }
// function setElementValueById(elementId, value) {
//     const element = document.getElementById(elementId)
//     element.innerText = value
// }
// function getElementById(id) {
//     const element = document.getElementById(id)
//     const text = element.innerText
//     return text
// }
// function setARandomAlphabet() {
//     const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
//     const alphabetArray = alphabetString.split('')
//     const alphabetNumber = Math.random() * 25
//     const index = Math.round(alphabetNumber)
//     const alphabet = alphabetArray[index]
//     return alphabet
// }


function hideElementById(id) {
    const element = document.getElementById(id)
    element.classList.add('hidden')
}
function showElementById(id) {
    const element = document.getElementById(id)
    element.classList.remove('hidden')
}
function setBackgroundColor(id) {
    const element = document.getElementById(id)
    element.classList.add('bg-[#FFA500]')
}
function removeBackgroundColor(id) {
    const element = document.getElementById(id)
    element.classList.remove('bg-[#FFA500]')
}
function getElementValueById(id) {
    const element = document.getElementById(id).innerText
    const value = parseInt(element)
    return value;

}
function setElementValueById(id, value) {
    const element = document.getElementById(id)
    element.innerText = value
}
function getElementById(id) {
    const element = document.getElementById(id).innerText
    return element
}
function setARandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetArray = alphabetString.split('');
    const alphabetNumber = Math.random() * 25
    const index = Math.round(alphabetNumber)
    const alphabet = alphabetArray[index]
    return alphabet
}