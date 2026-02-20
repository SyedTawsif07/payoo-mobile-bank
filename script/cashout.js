document.getElementById('cashout-btn').addEventListener('click', () => {

    // 1. get the agent number and validate
    const cashoutNumInput = document.getElementById('cashout-number');
    const agentValue = cashoutNumInput.value;
    console.log(agentValue);
    if (cashoutNumInput.length != 11) {
        alert('Invalid Agent Number');
        return;
    }

    // 2. get the amount, validate, convert to number
    const cashoutAmount = document.getElementById('cashout-amount');
    const cashoutValue = cashoutAmount.value;
    console.log(cashoutValue);

    // 3. get the Current balance, validate, convert to number
    const currentBalance = document.getElementById('balance')
    const balanceValue = currentBalance.innerText;
    console.log(balanceValue);

    // 4. calculate new balance
    const newBalance = Number(balanceValue) - Number(cashoutValue);
    if (newBalance < 0) {
        alert('Invalid Amount')
        return;
    }
    console.log(newBalance);

    // 5. get the pin and verify
    const pin = document.getElementById('cashout-pin');
    const pinValue = pin.value;

    if (pinValue === '1234') {
        // 5-1. true:: show an alert > set the balance
        alert('Cashout Successful');
        currentBalance.innerText = newBalance;
    }
    else {
        // 5-2. true:: show an error alert > return
        alert('Invalid Pin');
        return;
    }
})