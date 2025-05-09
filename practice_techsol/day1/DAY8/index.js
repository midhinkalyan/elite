let prompt=require("prompt-sync")();
// 1------------Reverse a String

// Input: "hello" → Output: "olleh"

// let k="midhin"
// console.log(reverseNumber(k))
// function reverseNumber(k){
//     return k.split("").reverse().join("");
// }

//2---------Check for Palindrome
//Input: "madam" → Output: true
//  let text="madam"
//  console.log(`${text}`,palindromeNumber(text))
//  function palindromeNumber(n){
  
//     return n==n.split("").reverse().join("");
//  }

//3-------Count Vowels in a String
// Input: "hello world" → Output: 3

// let text=prompt()
// console.log(`${text}`,numberOfVowels(text))
// function numberOfVowels(text){
//     let vowels=['a','e','i','o','u']
//     let c=0
//    for (let i=0;i<text.length;i++){
//     //  approach--1   let k=vowels.find((Element)=> Element==text[i])
//     //    if(k!=undefined){
//     //     c++;
//     //    }
//     if (vowels.includes(text[i].toLowerCase())){
//         c++;
//     }
//     }

//  return c;
// }

//4---------Check if Two Strings are Anagrams
// Input: "listen", "silent" → Output: true
// let a=prompt("enter a first word ")
// let b=prompt("enter a second word")
// console.log(`${a} and ${b} are anagram`,anagram(a,b))
// function anagram(a,b){
//     b=b.split("")
//     for (let i=0;i<a.length;i++){
//       if(b.includes(a[i])){
//       let index=  b.indexOf(a[i]);
//       if (index!==-1){
//         b.splice(index,1);
//       }
//       else{
//         return false;
//       }
//       }
//     }
//     return b.length==0;
// }

//5---Find the First Non-Repeating Character
//Input: "aabbcdde" → Output: 'c'
// a=prompt("enter a string")
// console.log("non repeating character is ",nonRepeat(a))
// function nonRepeat(a){
//     let d={}
//     for(let i=0;i<a.length;i++){
//         if (a[i] in d){
//             d[a[i]]+=1
//         }
//         else{
//             d[a[i]]=1
//         }
//     }
//     let k=Object.keys(d).filter((elem)=>d[elem]==1);
//     return k;
// }

//6-------Character Frequency Counter
//Input: "aabbbbcc" → Output: { a: 2, b: 4, c: 2 }

// a=prompt("enter a string")
// console.log("Character frequency counter is ",nonRepeat(a))
// function nonRepeat(a){
//     let d={}
//     for(let i=0;i<a.length;i++){
//         if (a[i] in d){
//             d[a[i]]+=1
//         }
//         else{
//             d[a[i]]=1
//         }
//     }
//     return d;
// }

// 7-- Remove Duplicates from a String

// // Input: "banana" → Output: "ban"
//  let text=prompt("enter a string  ")
//  console.log(text,"String after removing duplicates",duplicateRemover(text))
//  function duplicateRemover(text){
//     text=text.split("")
//     let k=new Set([...text])
//     nonRepeat =[...k].join("")
//     return nonRepeat;
//  }

//8----Capitalize First Letter of Each Word

// Input: "hello world" → Output: "Hello World"

// let text=prompt("")
// console.log(captalizeText(text))
// function captalizeText(text){
//     let l=text.split(" ")
//   ----approach1  let k=l.filter((elem)=>elem).map(elem => elem[0].toUpperCase() + elem.slice(1))


// //2-- let c="";
// // for(let i=0;i<elem.length;i++){
// //     if(i==0){
// //         c+=elem[i].toUpperCase()
// //     }
// //     else c+=elem[i];
// // }
// // return c;
// // });
//      return k.join(" ");
// }

// 9-----
// Find the Longest Word in a Sentence

// Input: "The quick brown fox" → Output: "quick"
// let text=prompt("enter a string ")
// console.log(largestString(text))
// function largestString(text){
//     let max=-Infinity
//     let l=text.split(" ")
//     let word=""
//     l.forEach((elem)=>{
//         if( elem.length>max){
//             max=elem.length;
//             word =elem;
//         }
//     })
//     return word;
// }

//10-----       Check if a String is a Rotation of Another
//Input: "abcde", "cdeab" → Output: true
// function isRotation(A, B) {
//     if (A.length !== B.length) {
//         return false;
//     }
//     return (A + A).includes(B);
// }

// let A = "abcde";
// let B = "cdeab";
0000000000// console.log(isRotation(A, B));
