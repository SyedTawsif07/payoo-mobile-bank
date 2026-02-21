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
function setBalance(value) {
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = value
}

// machine id > hide all > show id
function showOnly(id) {
    const addMoney = document.getElementById('add-money');
    const cashout = document.getElementById('cashout');
    const history = document.getElementById('history');
    const payBill = document.getElementById('pay-bill');
    const transfer = document.getElementById('transfer');
    // shobaike hide koro
    addMoney.classList.add('hidden')
    cashout.classList.add('hidden')
    history.classList.add('hidden')
    payBill.classList.add('hidden')
    transfer.classList.add('hidden')

    // jei id ase shetake show koro
    const selected = document.getElementById(id)
    selected.classList.remove('hidden')
}