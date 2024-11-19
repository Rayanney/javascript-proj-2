//write a function that reverses a string
//string functions
function reversedString(str){
    
return str.split('').reverse().join('');
}
console.log(reversedString('RAYAN'));

//create a function that counts the number of characters in a string
function countNumOfStrings(word){
 return word.length;
}
console.log(countNumOfStrings('football'));
//implement a function that capitalizes each first letter in a sentence
function capitalizeFirst(letter){
return letter.split('').map(word => word.charAt(0).toUpperCase()+word.slice(1).toLowerCase()).join('');
} 
console.log(capitalizeFirst('give me my textbook'));
//     array functions
//write a function to find the maximum and minimum values in an array of numbers
function maxMin(array){
let max = Math.max(...array);
let min = Math.min(...array);
return { max, min};
} 
const array1=[2,4,6,140,16,18];
const result =maxMin(array1);
console.log(result);
//create a function that returns the sum of all elements in an array
function sumOfElements(array){
let total=0;
for(let num of array){
  total+=num;
} 
return total;
}


const array2=[2,4,6,8,10];
const result1=sumOfElements(array2);
console.log(result1);

//implement a function that filters elements based on an array given a condition
function filterArray(num){
return num%2===0;;
}   
const array5=[2,4,6,8,10];
const resultFour=array5.filter(filterArray);
console.log(resultFour)
//    MATHEMATICAL FUNCTIONS
//write a function to calculate the factorial of a given number
function calcFactor(num){
 let answer=3;
 for(let i=1;i<=num;i++){
  answer *=i;
 }
 return answer;
} 
console.log(calcFactor(5))
//create a function to check if a number is prime number or not
function primeNum(num){
for(let i=0;i<=Math.sqrt(num);i++){
  if(num%2===0){
    return false
  }else{
    return true;
  }
}
} console.log(primeNum(29))

//implement a function to generate the fibonacci sequence upto a given number of terms
function fibonaSeq(num){
if(num<=1)return num;
return fibonaSeq(num-1)+ fibonaSeq(num-2);
} 
const array6=[2,3,4,4,6,7]
const resulter=(fibonaSeq(array6));
console.log(resulter);

