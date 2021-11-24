function generatePassword() {
    
    document.getElementById("CheckTheBox");

const character = {
    symbol = "!@#$%&*?+^<>/[\|-",
    number = "0123456789",
    upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase = "abcdefghijklmnopqrstuvwxyz",
}

//Array Methods

function symbol() {
    return character.symbol[Math.floor(Math.random() * character.symbol.length)];
}
function number() {
    return character.number[Math.floor(Math.random() * character.number.length)];
}
function upperCase() {
    return character.lowerCase[Math.floor(Math.random() * character.upperCase.length)];
}
function lowerCase() {
    return character.lowerCase[Math.floor(Math.random() * character.lowerCase.length)];
};

form.addEventListener("submit" , e => {
    e.preventDefault()
});

const password = generatePassword(includeSymbols, includeNumbers, includeUpperCase, includeLowerCase)};

function syncCharacter(e) {
    const value = e.target.value
    characterSymbol.value = value
    
}