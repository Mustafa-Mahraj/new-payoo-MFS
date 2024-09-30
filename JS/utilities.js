function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue);
    return inputValueNumber;
}

function getTextFieldById(id){
    const textFieldValue = document.getElementById(id).innerText;
    const textFieldValueNumber = parseFloat(textFieldValue);
    return textFieldValueNumber;
}

function showSectionById (id){
    // first step hide all section
    document.getElementById('add-money-form').classList.add('hidden')
    document.getElementById('cash-out-form').classList.add('hidden')
    document.getElementById('transaction-history').classList.add('hidden')
    // second step only show the called id section
    document.getElementById(id).classList.remove('hidden');
}