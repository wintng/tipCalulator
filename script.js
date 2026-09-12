const amountInput = document.getElementById('amount');
const tipInput = document.getElementById('tip')
const submit = document.getElementById('submit')
const form = document.getElementById("form")

const calculate = function(){
    const userInputAmount = amountInput.value;
    const userInputTip = tipInput.value;
    const total = userInputAmount * (1+userInputTip/100)
    console.log(total.toFixed(2))
    return total;
}

form.addEventListener('submit', function(event){
    event.preventDefault();

})

submit.addEventListener('click', calculate)