const eurToDkkRate = 7.433;
const tokenEurValue = 13;

function convert() {
    let tokenValue = (<HTMLInputElement>document.getElementById("tokenValue")).value;
    let tokenDkkValue = Math.round(tokenEurValue * eurToDkkRate);
    document.getElementById("presentWorth").innerHTML = "1 token is worth " + tokenValue + " gold / " + tokenEurValue + "€ / " + tokenDkkValue + "kr.";
    oneOfCurrencyToGold(tokenValue, tokenDkkValue);
}

function oneOfCurrencyToGold(tokenValue, tokenDkkValue) {
    document.getElementById("1eurToGold").innerHTML = "1€ is worth " + Math.round(tokenValue / tokenEurValue) + "gold.";
    document.getElementById("1dkkToGold").innerHTML = "1dkk is worth " + Math.round(tokenValue / tokenDkkValue) + "gold.";
}