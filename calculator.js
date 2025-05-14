// const amountPurchase = document.getElementById('amountPurchase');
// const tipAmount = document.getElementById('tipAmount');
// const billTotal = document.getElementById('billAmount');
// const increasePeople = document.getElementById('increment'); // make sure HTML id is correct
// const decreasePeople = document.getElementById('decrement');
// const numberOfPeople = document.getElementById('numberOfPeople');

// function calculate() {
//     const initial = parseFloat(amountPurchase.value);
//     const finalist = parseFloat(tipAmount.value);

//     if (!isNaN(initial) && !isNaN(finalist)) {
//         const results = ((initial * finalist) / 100) + initial;
//         billTotal.value = results.toFixed(2); // Optional: format to 2 decimal places
//     } else {
//         billTotal.value = '';
//     }
// }

// amountPurchase.addEventListener('input', calculate);
// tipAmount.addEventListener('input', calculate);



const amountPurchase = document.getElementById('amountPurchase');
const tipAmount = document.getElementById('tipAmount');
const billTotal = document.getElementById('billAmount');

const increasePeople = document.getElementById('increment');
const decreasePeople = document.getElementById('decrement');
const numberOfPeople = document.getElementById('numberOfPeople');

// Initialize with 1 person
let peopleCount = 1;

// Update bill total per person
function calculate() {
  const initial = parseFloat(amountPurchase.value);
  const tipPercent = parseFloat(tipAmount.value);

  if (!isNaN(initial) && !isNaN(tipPercent)) {
    const totalTip = ((initial * tipPercent) / 100) + initial;
    const totalPerPerson = totalTip / peopleCount;

    billTotal.value = totalPerPerson.toFixed(2); // e.g. 2.34
  } else {
    billTotal.value = '';
  }
}

// Increase people
increasePeople.addEventListener('click', () => {
  peopleCount++;
  numberOfPeople.textContent = peopleCount;
  calculate(); // Recalculate for new person count
});

// Decrease people (min 1)
decreasePeople.addEventListener('click', () => {
  if (peopleCount > 1) {
    peopleCount--;
    numberOfPeople.textContent = peopleCount;
    calculate();
  }
});

// Trigger calculation when inputs change
amountPurchase.addEventListener('input', calculate);
tipAmount.addEventListener('input', calculate);
