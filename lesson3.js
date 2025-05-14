

// const sumArray = (number) =>{
//     sum = number[0];
//     for(m of number){
//         if(m>sum){
//             sum = m;
//         }
//     }
//     return {sum};
// }
// let num =[1,3,4,56,78,56,4,56,89,67]
// console.log(sumArray(num));

const freq = (phrase)=>{
      let frequency = {};
    for(m of phrase){
        if(m in frequency){
            frequency[m]+=1;
        } else{
            frequency[m]=1;
        }
    }
    return frequency
}

const wordfreq = (phrase)=>{
   const words = phrase.split(' ');
   return freq(words);
}


