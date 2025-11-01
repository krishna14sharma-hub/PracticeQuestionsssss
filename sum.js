// // find the sum of all prime number less then or eaual to provided number 
// function sumOfPrimes(num){
//     if(num < 2 || !Number.isInteger(num)) return 0;
//     // initialize isPrime array
//     let primeSum = 0;
//     // create a boolean array "isPrime[0..num]" and initialize isPrime array 
//     const isPrime = new Array(num + 1).fill(true);
//     isPrime[0] = isPrime[1] = false; // 0 and 1 are not prime numbers

//     // iterates up to the square root of num
//     for(let i = 2; i*i <=num; i++){
//         // if isPRime [i] is true , then i is a prime number 
//         if(isPrime[i] === true){
//             // mark all multiples of i (starting from i*i) as not prime
//             // we start from i*i because all smalleer multiplees like (2*i , i*3)
//             // would have already been marked by smaller primes .

//             for(let multiple = i *i ; multiple<= num ; multiple += i){
//                 isPrime[multiple] = false ;
//             }
//         }
//     }

//     // calculates the sum of all prime number 
//     // iterates from 2 up to num sum all number marked as prime 
//     for(let i =2 ; i<= num ; i++){
//         if(isPrime[i] === true){
//             primeSum += i;
//         }
//     }
//     return primeSum ;
// }


// console.log(sumOfPrimes(10)); // Output: 17 (2 + 3 + 5 + 7 = 17)
// console.log(sumOfPrimes(20));   
// // Output: 77 (2 + 3 + 5 + 7 + 11 + 13 + 17 + 19 = 77)
// console.log(sumOfPrimes(1));



////////////////////////////////////////////////////////////////



// Real time character counter 

const textInput = document.getElementById('text-input');
const charCount = document.getElementById('char-count');
const LIMIT = 101;

/* 
      Update the charcter count display , handles the trimming of excess input ,
      and applies necessary styling  .
*/

function updateCounter(){
    let text = textInput.value;
    let currentLength = text.length ;

    // check for and enforce the character limit (javascript only solution)

    if(currentLength > LIMIT){
        // Trim the text to the exact limit 
        text = text.substring(0,LIMIT);
        textInput.value = text ;
        currentLength = LIMIT ;
    }

    // update the counter display text 

    charCount.textContent = `Character Conunt : ${currentLength} / ${LIMIT}`;

    // Apply styling based on character count 
    // clear existing color classes 
    charCount.classList.remove('text-gray-500', 'text-indigo-500', 'text-red-600', 'font-normal', 'font-bold')


    if(currentLength === LIMIT){
        // Apply red color and bold when limit is reached 
        charCount.classList.add('text-red-600', 'font-bold');
    }else if (currentLength > 0){
        // apply the primary color (indigo) for active counting 
        charCount.classList.add('text-indigo-500', 'font-normal');
    }else{
        // Default gray color when empty 
        charCount.classList.add('text-gray-500', 'font-normal');
    }
}

// add the input event listener for real- time updates
textInput.addEventListener('input', updateCounter);

// run the function once on load to set initial state correctly 
window.onload = updateCounter;

