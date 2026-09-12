const amountInput = document.getElementById('amount');
const tipInput = document.getElementById('tip')
const submit = document.getElementById('submit')
const form = document.getElementById("form")

const calculate = function(){
    const userInputAmount = amountInput.value;
    const userInputTip = tipInput.value;
    console.log(userInputAmount,userInputTip)

    const tipPercentage = userInputTip/100
    console.log(`tipPercentage ${tipPercentage}`)
    const amountToTip = userInputTip*tipPercentage;
    console.log(`amountToTip ${amountToTip}`)

    const total = userInputAmount + amountToTip

}

form.addEventListener('submit', function(event){
    event.preventDefault();
})

submit.addEventListener('click', calculate)