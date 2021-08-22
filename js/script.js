function getInputValue(fieldId) {
    const inputField = parseFloat(document.getElementById(fieldId).value)
    document.getElementById(fieldId).value = ''
    return inputField

}
function getInnerTextValue (fieldId){
    const fieldTag = document.getElementById(fieldId);
    const fieldValueInText = fieldTag.innerText
    const value = parseFloat(fieldValueInText);
    return value


}
function updateTotal (fieldId , amount){
    // const depositTotal = document.getElementById(FildId)
    // const depositTotalText = depositTotal.innerText
    // const previousTotal = parseFloat(depositTotalText)
    const previousTotal = getInnerTextValue(fieldId)
    const newTotal = previousTotal + amount
    document.getElementById(fieldId).innerText = newTotal
}
function updateBalance (amount , isadding ){
    // const balanceTotal = document.getElementById('balance-total')
    // const balanceTotalText = balanceTotal.innerText
    // const previousBalnce = parseFloat(balanceTotalText)
    const previousBalnce = getInnerTextValue('balance-total')
    let newBalance;
    if(isadding == true){
         newBalance = previousBalnce + amount
    }
    else{
         newBalance = previousBalnce - amount
    }
   
    document.getElementById('balance-total').innerText = newBalance
}



document.getElementById('deposit-button').addEventListener('click', function () {
    const amount = getInputValue('deposit-input')
   if(amount > 0){
    updateTotal('deposit-total', amount)
    updateBalance (amount ,  true)
    
   }

})
// handle withdraw
document.getElementById('withdraw-button').addEventListener('click', function(){
    const amount = getInputValue('withdraw-input')
    const balance =getInnerTextValue('balance-total')
   if(amount > 0 && amount <= balance){
    updateTotal ('withdraw-total', amount)
    updateBalance(amount ,  false)

   }
})