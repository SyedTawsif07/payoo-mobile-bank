document.getElementById('send-money-btn').addEventListener('click', () => {
    // 1. get the agent number and validate
    const transferAccNumber = getValueFromInput('transfer-acc-number');
    if (transferAccNumber.length != 11) {
        alert('Invalid Account Number');
    }

    // 2. get the amount, validate, convert to number
    const transferAmount = getValueFromInput('transfer-amount');
    // 4. calculate balance
    const currentBalance = getBalance();
    const newBalance = currentBalance - Number(transferAmount);
    if (newBalance < 0) {
        alert('Invalid Amount');
        return;
    }
    // 5. get the pin and verify
    const pin = getValueFromInput('transfer-pin');
    if (pin === '1234') {
        alert('Transfer Money Successful')
        setBalance(newBalance);

        // 1. History container ke anbo
        const historyContainer = document.getElementById('history')
        // 2. New div banabo
        const newDiv = document.createElement('div')
        // 3. New div a innerHTML add korbo
        newDiv.innerHTML = `
        <div class="transaction-card p-5 bg-base-100">
        <p>Transfer money successful ${transferAmount} TAKA at ${new Date()}</P>
        </div>`
        // 4.History container a new div append korbo.
        historyContainer.appendChild(newDiv)
    }
    else {
        alert('Invalid Pin')
        return;
    }
})