document.getElementById('cashout-btn').addEventListener('click', () => {
    // 1. get the agent number and validate
    const cashoutNumber = getValueFromInput('cashout-number');
    console.log(cashoutNumber);
    if (cashoutNumber.length != 11) {
        alert('Invalid Agent Number');
    }

    // 2. get the amount, validate, convert to number
    const cashoutAmount = getValueFromInput('cashout-amount');
    console.log(cashoutAmount);

    const currentBalance = getBalance();
    // 4. calculate balance
    const newBalance = currentBalance - Number(cashoutAmount);
    console.log(newBalance);
    if (newBalance < 0) {
        alert('Invalid Amount')
        return;
    }

    // 5. get the pin and verify
    const pin = getValueFromInput('cashout-pin');
    if (pin === '1234') {
        // 5-1. true:: show an alert > set the balance
        alert('Cashout Successful');
        setBalance(newBalance);

        // 1.History container ke dhore niye ashbo.
        const historyContainer = document.getElementById('history');
        // 2.Ekta new div create korbo.
        const newDiv = document.createElement('div');
        // 3.New div a innerHTML add korbo.
        newDiv.innerHTML = `
        <div class="transaction-card p-5 bg-base-100">
        <p>Cashout successful ${cashoutAmount} TAKA to ${cashoutNumber} at ${new Date()}</P>
        </div>`;
        // 4.History container a new div append korbo.
        historyContainer.appendChild(newDiv);
    }
    else {
        // 5-2. true:: show an error alert > return
        alert('Invalid Pin');
    }
})






// document.getElementById('cashout-btn').addEventListener('click', () => {
//     // 1. get the agent number and validate
//     const cashoutNumInput = document.getElementById('cashout-number');
//     const agentValue = cashoutNumInput.value;
//     console.log(agentValue);
//     if (agentValue.length != 11) {
//         alert('Invalid Agent Number');
//         return;
//     }

//     // 2. get the amount, validate, convert to number
//     const cashoutAmount = document.getElementById('cashout-amount');
//     const cashoutValue = cashoutAmount.value;
//     console.log(cashoutValue);

//     // 3. get the Current balance, validate, convert to number
//     const currentBalance = document.getElementById('balance')
//     const balanceValue = currentBalance.innerText;
//     console.log(balanceValue);

//     // 4. calculate balance
//     const newBalance = Number(balanceValue) - Number(cashoutValue);
//     if (newBalance < 0) {
//         alert('Invalid Amount')
//         return;
//     }
//     console.log(newBalance);

//     // 5. get the pin and verify
//     const pin = document.getElementById('cashout-pin');
//     const pinValue = pin.value;

//     if (pinValue === '1234') {
//         // 5-1. true:: show an alert > set the balance
//         alert('Cashout Successful');
//         currentBalance.innerText = newBalance;
//     }
//     else {
//         // 5-2. true:: show an error alert > return
//         alert('Invalid Pin');
//         return;
//     }
// })