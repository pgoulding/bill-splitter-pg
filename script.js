//query all the inputs

var inputBillAmount = document.querySelector('.new-item-form--bill-amount');
var inputTipPercent = document.querySelector('.new-item-form--tip-percentage');
var inputNumPeople = document.querySelector('.new-item-form--people-dining');
var inputAll = document.querySelectorAll('input');
var myForm = document.querySelector('form');
//query the buttons

var btnSubmit = document.querySelector('.new-item-form--submit')

//query the ul list for output

var outputBill = document.querySelector('.bill-list')

// create event listener

btnSubmit.addEventListener('click', calculateBill);
inputBillAmount.addEventListener('input', toggleButton);
inputTipPercent.addEventListener('input', toggleButton);

function calculateBill(e){
  e.preventDefault();
  //multiply the bill by the tip percentage and divide by 100;
  var bill = parseInt(inputBillAmount.value);
  var tip = parseInt(inputTipPercent.value);
  var people = parseInt(inputNumPeople.value)||1;
  var tipPercent = bill * tip /100 || 0;
  var total = bill + tipPercent;
  var split = total / people;
  outputBill.innerHTML =  `<p>Bill: $${bill}</p>
                          <p>Tip: $${tipPercent}</p> 
                          <p>Total: $${total}</p>
                          <p>Split ${people} ways is $${split}</p>`;
  myForm.reset();
  toggleButton();
}

function toggleButton(){
  if(inputBillAmount.value !== '' && inputTipPercent.value !== ''){
    btnSubmit.disabled = false;
  }else{
    btnSubmit.disabled = true;
  }
}

// window.onload = toggleButton;
// console.log(calculateBill);