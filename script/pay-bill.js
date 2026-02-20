document.getElementById('pay-btn').addEventListener('click', () => {
    //1. Get the bill
    const billName = getValueFromInput('pay-money-bill');
    if (billName === 'Select back') {
        alert('Please select the bill');
        return;
    }
    //2. Get the biller number
    const billerNumber = getValueFromInput('biller-number');
    if (billerNumber.length != 11) {
        alert('Invalid Number');
        return;
    }

    //3. Get the bill amount
    const billAmount = getValueFromInput('pay-amount');
    const currentBalance = getBalance();

    //4. calculate the amount
    const newBalance = currentBalance - Number(billAmount);
    if (newBalance < 0) {
        alert('Invalid Amount')
        return;
    }

    //5. Verify the pin
    const pin = getValueFromInput('pay-amount-pin');
    if (pin === '1234') {
        alert('Bill Paid')
        setBalance(newBalance);

        // 1.History container ke dhore niye ashbo.
        const history = document.getElementById('history');
        // 2.Ekta new div create korbo.
        const newDiv = document.createElement('div');
        // 3.New div a innerHTML add korbo.
        newDiv.innerHTML = `
        <div class="transaction-card p-5 bg-base-100">
        <p>${billName} bill paid successfully ${billAmount} TAKA from ${billerNumber} at ${new Date()}</p>
        </div>`
        // 4.History container a new div append korbo.
        history.appendChild(newDiv);
    }
    else {
        alert('Invalid Pin');
        return;
    }
})