document.getElementById('add-money-btn').addEventListener('click', () => {
    // 1. get bank name
    const bankAccName = getValueFromInput('add-money-bank');
    if (bankAccName === 'Select A Bank') {
        alert('Please select a bank');
        return;
    }
    // 2. get account number
    const accNo = getValueFromInput('add-money-number');
    if (accNo.length != 11) {
        alert('invalid account number');
        return;
    }
    // 3. get amount
    const amount = getValueFromInput('add-money-amount');
    const currentBalance = getBalance()
    const newBalance = currentBalance + Number(amount);
    console.log(newBalance);

    // 4. verify the pin
    const pin = getValueFromInput('add-money-pin');
    if (pin === '1234') {

        alert(`Add money successful from
             ${bankAccName} at 
             ${new Date()}`);
        setBalance(newBalance);

        // 1.History container ke dhore niye ashbo.
        const historyContainer = document.getElementById('history');
        // 2.Ekta new div create korbo.
        const newDiv = document.createElement('div');
        // 3.New div a innerHTML add korbo.
        newDiv.innerHTML = `
        <div class="transaction-card p-5 bg-base-100">
        <p>Add money successful ${amount} TAKA from ${bankAccName} account no. ${accNo} at ${new Date()}</P>
        </div>`;
        // 4.History container a new div append korbo.
        historyContainer.appendChild(newDiv);
    }
    else {
        alert('invalid pin')
        return;
    }
});