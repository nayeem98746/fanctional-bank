function getInputValue(fieldId) {
    const inputField =parseFloat( document.getElementById(fieldId).value)
    document.getElementById(fieldId).value = ''
    return inputField

}





document.getElementById('deposit-button').addEventListener('click', function () {
   const depositInput =  getInputValue('deposit-input')
  

})