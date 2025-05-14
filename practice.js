// console.log('What is in mind?');

// let name$ ="My name is Aziz karim and i'm from knust";
// console.log(name$.length);
// console.log(name$.toLowerCase());
// let num = 12.3844848;
// console.log(Math.ceil(num));
// console.log(Math.floor(Math.random()*100));

// baby weather app
// let weather =prompt('How is the weather?');

//  if(weather =='cloudy'){
//     console.log('Grab your sun glass');
//  } else {
//     console.log('Grab your umbrella');


//  }

//FUNCTIONS

function sayMyName2(name){
    console.log(name);
}

//sayMyName2('Abdul Karim');

function greeting(name){
    let greet =`Hi ${name}, nice to you`;
    console.log(greet);
}

// greeting('aziz');

const sum =(a,b) => a+b;
const sub = (a,b) => a-b;
const multiply = (a,b) => a*b;
const divide = (a,b) => a/b;
const modulus = (a,b) => a%b;
function calculator(a,b,op){
    console.log(sum(a,b));
}
 
// calculator(2,3,'add');




// const human = (name, assets, liabilities) =>{
//     const person = {
//         name :name,
//         assets : assets,
//         liabilities : liabilities,
//         networth : function(){
//             return this.assets - this.liabilities; 
//         }
//     }
//     let intro = `Hi, my name is ${person.name} and my networth is ${person.networth()}`;
//     return intro;
// } 

// console.log(human('Aziz Karim', 50000, 30000));

// const numbers = [1,2,3,4,5,6,7,8,9];
// const square =(numbers) =>{
//     let result = [];
//     for(number of numbers){
//         result.push(number**2)
//     }
//     return result;
// }

// console.log(square([1,3,4,5,6,7,9]));

let result = 0;
const howManyLetters = () =>{
    let phrase ="my name is azizi karim, im from ghana specifically the noethern part of ghana"

    for(letter in phrase){
        console.log(parseInt(letter)+1)
        result = parseInt(letter)+1
    }
    return {result: result}
}

// console.log(howManyLetters());

let sumArray =[1,2,3,4,5,6,7,89,];

const summation =()=>{
  let result =0;

  for (i of sumArray){
    result +=i;
  }
  return result;
}

// console.log(summation());

const freq = (phrase)=>{
  
    let frequency = {};
    for(letter of phrase){
        if(letter in frequency){
        frequency[letter]++;
        } else
        { 
        frequency[letter]=1;
        }
    }
    return frequency
}

let phrase ="hello world, my name is is si si azzi karim and im learning how to code";

// console.log(freq(phrase));  


const wordfrequency =(phrase)=>{
    words = phrase.split(" ");
   return freq(words);
}
// console.log(wordfrequency(phrase));

const map =(numbers)=>{
    return numbers.map(number => number**3);

}

// console.log(map([2,3,4,5,6,7,8,9]));
names = ['karim','amina','sule'];
const intialise =names.map(name => name[0].toUpperCase()+name.slice(1).toLowerCase());
// console.log(intialise);

const numbers = [10, 15, 23, 8, 42, 5];
const myFilter = numbers.filter(number => number > 10);

// console.log(myFilter);

const prices = [5, 10, 15];
const results= prices.reduce((prev, curr) => prev + curr, 0)

// console.log(results);

const items = [5, 12, 8, 130, 44];
const numbers1 =items.filter(num=> num>10);

const numbers2 = numbers1.map(num => num*2);

 const number3 = numbers2.reduce((prev, acurr) => prev +acurr, 0 );

// console.log(number3);

const cart = [
    { name: "Laptop", price: 1200, quantity: 1 },
    { name: "Mouse", price: 25, quantity: 2 },
    { name: "Keyboard", price: 75, quantity: 1 },
    { name: "Monitor", price: 300, quantity: 2 },
    { name: "USB Cable", price: 5, quantity: 5 }
  ];
  const product = cart.filter(item => item.price > 50);
  const product1 =product.map(item => item.price*item.quantity);
  const product2 = product1.reduce((prev, acurr)=> prev + acurr, 0);
//   console.log(product2);




console.log('hello world');


let title = document.getElementById('title');
let massage = 'Goodbye my lover!'

console.log(title.innerText);
title.innerText='Goodbye my lover!';

title.innerHTML = `<p>${massage}</p>`
title.style.color='red'

let redDiv = document.getElementById('red')
let yellowDiv = document.getElementById('yellow')
let greenDiv = document.getElementById('green')

// redDiv.onclick = ()=> console.log('red div clicked!')
// yellowDiv.onclick = ()=> console.log('yellow div clicked!') 
// greenDiv.onclick = ()=> console.log('green div clicked!')

const square = document.querySelectorAll('.colorSquare');
// console.log(square)

// console.log(square[0].value)
// console.log(square[1].value)
// console.log(square[2].value)

const times ={'red':0, 'yellow':0, 'green':0}

// square.forEach(squares=>{
//     squares.onclick=()=>{
//         times[squares.value]++

//         squares.innerText=times[squares.value]
//         // console.log(squares.value)
//     }
// })





// karim.append(' Karim');
//  const karim1 = document.createElement('h1');
//  karim1.textContent='Its me Karim';
//  karim.append(karim1);

//  const karim2 = document.querySelector('#name2');

//  karim2.append('karim1');

//  karim2.innerHTML=`<p>We are reopening <em>school</em> in less than one month</p>`
//  console.log(karim2.innerHTML)
const karim = document.getElementById('name');

 const fruitsbasket=document.createElement('div');
 fruitsbasket.innerHTML=`
 <p>Banana</p>
    <p>Apple</p>
    <p>Orange</p>
    <p>Grapes</p>
 `;
 karim.append(fruitsbasket);

 while (fruitsbasket.firstChild) {
    fruitsbasket.removeChild(fruitsbasket.firstChild);
  }

 // make sure this exists in HTML

  const spellList = document.createElement('ul');
  karim.append(spellList);
  
  // Function name is now different from variable
  function addSpell(spellName) {
    const spell = document.createElement('li');
    spell.textContent = spellName;
  
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = () => {
      spellList.removeChild(spell);
    };
  
    spell.appendChild(removeButton);
    spellList.appendChild(spell);
  }
  
  // Add some spells
  addSpell('Amida');
  addSpell('Abdul');
  addSpell('Karim');
  