//   check whether a number is prime or not  ---------1--------
//  let m=prompt("");
// k=0;
// for(let i=2;i<m;i++){
//    if (m%i==0){
//      k=k+1;
//    }
// }
// if (k==0){
//     console.log("is prime");

// }
// else{
//     console.log("not a prime")
// // //




// ----2-- 2. Find all prime numbers up to N.
// const prompt=require('prompt-sync')();
// let n=prompt("enter the number that you need to find the prime number upto");
// for(let i=2;i<=n;i++){
//     let j=0;
//     for(let k=2;k<i;k++){
//      if(i%k==0){
//         j=j+1;
//      }}
//      if (j==0)
//      {
//         console.log(i)
//      }
    
// }





// 3----3. Find the factorial of a number.
// const prompt=require('prompt-sync')();

// let n=prompt("enter a number ");
// console.log(factorial(n))
// function factorial(m){
//     if(m==1){
//         console.log(m)
//         return 1;
//     }
//     else{
//         console.log(m);
        
//         return m*factorial(m-1);
//     }
// }

//  ----4. Check if a number is a palindrome.
// palindrome =(m) => {
  
//         //  inbuilt method reverse() 
//         //  let str=m.toString();
//         //  let reversed=str.split("").reverse().join("");
//         //  return m==reversed;
//         let s=m;
//         let k=[]
//         while(m>0){
//             let ones=m%10;
//             k.push(ones);
//             m=Math.floor(m/10);
//         }
//         console.log(k)
//         return s==k.join("");
//   }

// const prompt=require('prompt-sync')();

// let n=prompt("enter a number ");
// console.log(palindrome(n));




//-------- 5. Find the greatest common divisor (GCD) of two numbers.

// const prompt=require('prompt-sync')();
// let n=prompt("enter a number ");
// let m=prompt("enter a number ");
// gcd(n,m)
// function gcd(n,m){
//     if (n>m){
//         k=m;
//     }
//     else{
//         k=n;
//     }
//     while(k>=1){
//         if(m%k==0 & n%k==0)
//         {
//             console.log(k)
//             break;
//         }
//         k=k-1;
//     }
// }

// ------6 . Find the least common multiple (LCM) of two numbers.

// const prompt=require('prompt-sync')();
// let a=prompt("enter a number ");
// let b=prompt("enter a number ");
// let n=parseInt(a);
// let m=parseInt(b);
// lcm(n,m)
// function lcm(n,m){
//     if (n>m){
//         k=n;
//     }
//     else{
//         k=m;
//     }
//     while(true){
//         if(k%m==0 & k%n==0)
//         {
//             console.log(k);
//             break;     
//         }
//         k=k+1;
//     }
// }


//-----7. Find the sum of digits of a number.
// function sum(m){
// let s=0;
// while(m>0){
//                 let ones=m%10;
//                 s=s+ones;
//                 m=Math.floor(m/10);
//     }
//     console.log(s);
// }
// const prompt=require('prompt-sync')();
// let a=prompt("enter a number ");
// sum(parseInt(a))

// 8---
// function product(m){
//     let s=1;
//     while(m>0){
//                     let ones=m%10;
//                     s=s*ones;
//                     m=Math.floor(m/10);
//         }
//         console.log(s);
//     }
// const prompt=require('prompt-sync')();
// let a=prompt("enter a number ");
// product(parseInt(a))



////9-----------
// function count(m){
//     let s=0;
//     while(m>0){
//                     let ones=m%10;
//                     s=s+1;
//                     m=Math.floor(m/10);
//         }
//         console.log(s);
//     }
// const prompt=require('prompt-sync')();
// let a=prompt("enter a number ");
// count(parseInt(a))

//-----10. Reverse the digits of a number.
//  function revers(m){
//         let s=0;
//         while(m>0){
//                         let ones=m%10;
//                         s=s*10+ones;
//                         m=Math.floor(m/10);
//             }
//             console.log(s);
//         }
//     const prompt=require('prompt-sync')();
//     let a=prompt("enter a number ");
//     revers(parseInt(a))


// -------11. Find the nth Fibonacci number.

// const prompt=require('prompt-sync')();
// let a=prompt("enter a number ");
// fibanocii(parseInt(a))
// function fibanocii(n){
//     let s=0;
//     if (n>=1){
//         console.log("0");
//     }
//     if(n>=2){
//         console.log("1");
//     }
//     if(1){
//         for(let i=2;i<n;i++){
//             s=s+1;
//             console.log(s);
//         }
//     }
        

// }


// --------12. Check if a number is an Armstrong number.
// 12------
// let a = 153;
// amstrong(a);
// function amstrong(a) {
//   let s = 0;
//   let f = a;
//   len=a.toString().length
//   while (a >=1) {
//     let k = a % 10;
//     s = s + (Math.pow(k,len));
//     console.log(s)
//     a = Math.floor(a / 10);
//   }
//   console.log(s)
//   if (f === s) {
//     console.log('isams');
//   } else {
//     console.log('notams');
//   }
// }


// 13 ---
// let a=3876
// for (let i=10;i<=a;i++){
//      let s = 0;
//      let f = i;
//      let len=i.toString().length
//   while (f >0) {
//     let k = f % 10;
//     s = s + (Math.pow(k,len));
//     f = Math.floor(f/10);
//   }

//   if (i == s) {
//     console.log('isams',i);
//   }


// }//14--- perfect number
// let a=60
// s=0
// for(let i=1;i<=a/2;i++)
// {
//     if (a%i==0){
//         s=s+i;
//     }
// }
// if(s==a){
//     console.log("is perfect",a)
// }

// 15. Find all divisors of a number.
// let a=10
// for(let i=1;i<=a/2;i++)
// {
//     if (a%i==0){
//         console.log(i)
//     }
// }

//16 ---sum of divisors
//console.log(sumOfDivisors(25))
// function sumOfDivisors(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) if (n % i === 0) sum += i;
//     return sum;
// }

//// --17 count divisors
//console.log(countDivisors(25))
// function countDivisors(n) {
//     let count = 0;
//     for (let i = 1; i <= n; i++) if (n % i === 0) count++;
//     return count;
// }

// 18---primefactors
// function primeFactors(n) {
//     let f = [];
//     for (let i = 2; i <= n; i++) {
//         while (n % i === 0) {
//             f.push(i);
//             n /= i;
//         }
//     }
//     return f;
// }
// console.log(primeFactors(72))


//--19largest prime factor
// function largestPrimeFactor(n) {
//     let max = -1;
//     for (let i = 2; i <= n; i++) {
//         while (n % i === 0) {
//             max = i;
//             n /= i;
//         }
//     }
//     return max;
// }
// console.log(largestPrimeFactor(54))

// --20---summ of n natural numbers
// let a=49
// sumOfNaturalNos(a)
// function sumOfNaturalNos(a){
//     let s=a*(a+1)/2;
//     console.log("sum is",s)
// }

// --21---summ of  squares of n natural numbers
// let a=49
// sumOfSquaresOfNaturalNos(a)
// function sumOfSquaresOfNaturalNos(a){
//     let s=((2*(a)+1)*a*(a+1))/6
//     console.log("sum is",s)
// }

// --22---summ of  cube of n natural numbers
// let a=49
// sumOfCubesOfNaturalNos(a)
// function sumOfCubesOfNaturalNos(a){
//     let s=a(a+1)/2;
//     console.log("sum is",Math.pow(s,2))
// }


//----23. Perform division without using /, *, %.

// function divide(a, b) {
//     let res = 0;
//     while (a >= b) {
//         a -= b;
//         res++;
//     }
//     return res;
// }
// console.log(divide(57,17))


// 24.Multiply two numbers without using *.
// function multiply(a, b) {
//     let res = 0;
//     for (let i = 0; i < b; i++) res += a;
//     return res;
// }
// console.log(multiply(5,6))

//25.    // 25.Find the minimum number of steps to reduce a number to 1.
//     function minStepsToOne(n) {
//         let steps = 0;
//         while (n > 1) {
//             if (n % 2 === 0) n /= 2;
//             else n--;
//             steps++;
//         }
//         return steps;
//     }
// console.log(minStepsToOne(87))
//---------------------------------
const prompt=require('prompt-sync')();

// 26 -------Find the largest digit in a number
// let a=prompt("enter a number ");
// console.log(largestNumber(a))
// function largestNumber(a){
//     max=-Infinity
//     while(a>0){
//         let n=a%10;
//         if (max<n){
//             max=n;
//         }
//         a=Math.floor(a/10);
//     }
//     return max;
// }

// 27---Find the smallest digit in a number

// let a=prompt("enter a number ");
// console.log(smallestNumber(a))
// function smallestNumber(a){
//     min=Infinity
//     while(a>0){
//         let n=a%10;
//         if (min>n){
//             min=n;
//         }
//         a=Math.floor(a/10);
//     }
//     return min;
// }

//28-------Check if a number is a Harshad number

// let a=prompt("enter a number ");
// console.log(harshadNumber(a))
// function harshadNumber(a){
//     let sum=0;
//     let k=a;
//     while(a>0){
//         let n=a%10;
//         sum=sum+n;
//         a=Math.floor(a/10);
//     }
// if(k%sum==0){
//     return("true")
// } else{
//         return("false")
//     }
// }

//29--------prime number after a given number 
// let m=prompt("");
// console.log(numberAfterPrime(parseInt(m)))
// function numberAfterPrime(m){
//     for(let j=m+1;;j++){  
//     let k=0
// for(let i=2;i<j;i++){
//    if (j%i==0){
//      k=k+1;
//    }
// }
// if (k==0){
//     return j;
// }

// }
// }

///-----------30  Check if a number is a magic number (recursive sum = 1)

// let a=prompt("enter a number")
// magicNumber(parseInt(a))
// function magicNumber(a){
//    if(a<10)
//     {
//         return a;
//     } 
//     else{
//         let sum=a;
//     while(sum>=10){
//         let s=0;
//         a=sum;
//         while(a>0){
//         let n=a%10;
//         s=s+n;
//         a=Math.floor(a/10);
//         }
//         sum=s;
//       }
//       if (sum==1){
//         console.log("magic number")
//       }
//       else{
//         console .log("not a magic number ")
//       }
     
// }
// }

//------31-- coversion from  decimal to binary
//  a=prompt("enter a number");
//  console.log(decimal2Binary(parseInt(a)))
//  function decimal2Binary(a){
//     return a.toString(2);
//  }

// --32 conversion from  binary to decimal

//  a=prompt("enter a number");
//  console.log(binary2decimal(parseInt(a)))
//  function binary2decimal(a){
//     return parseInt(a,2);
//  }

//-----33 --Find duplicate number in array

// let array =prompt().split(" ")
// findDuplicate(array)
// function findDuplicate(a){
//     outerLoop:for (let i=0;i<a.length;i++){
//         for (let j=i+1;j<a.length;j++){
//             if(a[i]==a[j]){
//                 console.log(a[i])
//                 break outerLoop;  
//             }
//         }
//     }
// }

//----- 34 --Find duplicate numbers in array
// let array =prompt().split(" ")
// findDuplicates(array)
// function findDuplicates(a){
//     outerLoop:for (let i=0;i<a.length;i++){
//         for (let j=i+1;j<a.length;j++){
//             if(a[i]==a[j]){
//                 console.log(a[i]);
 
//             }
//         }
//     }
// }

//-----35---Find unique number in array

// let array =prompt().split(" ")
// uniqueNumber(array)
// function uniqueNumber(a){
// for (let i=0;i<a.length;i++){
//     let k=0;
//         for (let j=0;j<a.length;j++){
//             if(a[i]==a[j]){
//                  k++;
//             }
            
//         }
//         if(k==1){
//             console.log(a[i])
//         }
//     }
// }


// 36-- add all elements in  array

// a=prompt().split(" ")
// sumOfArray(a)
// function sumOfArray(a){
//     let sum=0;
//     for (let i=0;i<a.length;i++){
//         sum+=parseInt(a[i])
//     }
//     console.log(sum);
// }

//37----Find max element  in array

// a=prompt().split(" ")
// maxOfArray(a)
// function maxOfArray(a){
//     let max=-Infinity;
//     for (let i=0;i<a.length;i++){
//         if(max<a[i]){
//             max=a[i];
//         }
//     }
//     console.log(max);
// }

//37----Find min element  in array

// a=prompt().split(" ")
// minOfArray(a)
// function minOfArray(a){
//     let min=Infinity;
//     for (let i=0;i<a.length;i++){
//         if(min>a[i]){
//             min=a[i];
//         }
//     }
//     console.log(min);
// }

// 38 --sum of even number in array

// a=prompt().split(" ")
// sumOfEvenInArray(a)
// function sumOfEvenInArray(a){
//     let sum=0;
//     for(let i=0;i<a.length;i++){
//         if (a[i]%2==0)
//         {
//             sum+=parseInt(a[i]);
//         }
//     }
//     console.log(sum)
// ;}

//39----sum of odd number in an array
// a=prompt().split(" ")
// sumOfOddInArray(a)
// function sumOfOddInArray(a){
//     let sum=0;
//     for(let i=0;i<a.length;i++){
//         if (a[i]%2!=0)
//         {
//             sum+=parseInt(a[i]);
//         }
//     }
//     console.log(sum)
// ;}

//--40 sorting an array ascending ordeer
  
// let a=prompt().split(" ")
// a.sort((s,p)=>s-p)
// console.log(a) 

//--41 sorting an array descending order
  
// let a=prompt().split(" ")
// a.sort((s,p)=>p-s)
// console.log(a) 

//42 ------Swap two numbers without a third variable

// a=parseInt(prompt("enter a first number"))
// b=parseInt(prompt("enter the second number"));
// a=a+b
// b=a-b
// a=a-b
// console.log(a,b)

//--43---Check if a number is divisible by another

// a=parseInt(prompt("enter a first number"))
// b=parseInt(prompt("enter the second number"));
// isDivisible(a,b)
// function isDivisible(a,b){
//     if (a%b==0)
//     {
//         console.log("divisible");
//     }
//     else{
//         console.log("not divisible");    
//     }
// }

// 44---intersection

// a=prompt().split(" ")
// b=prompt().split(" ")
// let inters=a.filter((elem)=>{
//   if(elem in b){
//     return elem;
//   }  
// })
// console.log(inters)

//45------union

// a=prompt().split(" ")
// b=prompt().split(" ")
// let union =new  Set([...a, ...b]);
// console.log("Union:", union)

//---46 convert celsicus to farehh

// function celsiusToFahrenheit(c) {
//     let f = (c * 9/5) + 32;
//     return f;
//   }
  
//   console.log(celsiusToFahrenheit(25)); n  
  
//47-----fahrenheit to celsius
//  function  fahrenheitToCelsius(f){
//    let c=(f-32)/(9/5);
//    return c;
//  }

//  console.log(fahrenheitToCelsius(77))

//48---------distance between two numbers

// function distanceBetween(a, b) {
//     return Math.abs(a - b);
//   }

// console.log(distanceBetween(20,5))

//49----perfect square  root number 

// console.log(perfectSquare(16))
// console.log(perfectSquare(17))
// function perfectSquare(a){
//     let sq=Math.sqrt(a);
//     return sq==Math.floor(sq);
// }

// 50--------power function 

// console.log(powerOfNumbers(5,5))

// console.log(powerOfNumbers(5,2))
// function powerOfNumbers(a,b){
//     return Math.pow(a,b);
// }