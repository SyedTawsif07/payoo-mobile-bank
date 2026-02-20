// machine id -> input value
function getValueFromInput(id) {
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id, value);
    return value;
}

// machine balance
function getBalance() {
    const currentBalance = document.getElementById('balance')
    const balance = currentBalance.innerText;
    return Number(balance);
}

// machine id -> set balance
function setBalance(value){
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = value
}