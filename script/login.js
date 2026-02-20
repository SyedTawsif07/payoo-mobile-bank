document.getElementById('form-btn').addEventListener('click', () => {
    // 1.get input number
    const inputNumber = document.getElementById('input-number');
    const inputValue = inputNumber.value;
    console.log(inputValue)

    // 2.get pin code
    const pin = document.getElementById('input-pin');
    const pinValue = pin.value;
    console.log(pinValue);

    // 3. Match both number and pin 
    if (inputValue == '01234567890' && pinValue == '1234') {
        alert('Successfully loged in')
        window.location.assign('./home.html')
    }
    else {
        alert('Invalid information')
        return;
    }
    // inputNumber.value = '';
    pin.value = '';
})