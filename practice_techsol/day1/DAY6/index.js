const prompt=require("prompt-sync")();

let a=prompt()
weekDay(parseInt(a))
// let rev=0
// let n=num
// while(num>0){
//     let k=num%10
//     rev=rev*10+k
//     num=Math.floor(num/10)
// }
// console.log(rev)
// if (n===rev)
// {
//     console.log("palin")
// }
// else{
//     console.log("not a pallin")
// }
// addition 
// function add(a,b){
//     return(parseInt(a)+parseInt(b))
// }
///odd number
// function odd(a,b){
//     for(let i=a;i<=b;i++)
//     {
//         if(i%2!=0 )
//         {
//             if (i>=70){
//                 break;
//             }
//             process.stdout.write(` ${i}`);
            
//         }
       
//     }
// }
function weekDay(a){
    switch(a){
        case 0:console.log("sunday");
        break;
        case 1:console.log("monday");
        break;
        case 2:console.log("tuesday");
        break;
        case 3:console.log("wednesday");
        break;
        case 4:console.log("thursday");
        break;
        case 5:console.log("friday");
        break;
        case 6:console.log("saturday");
        break;
        default: console.log("enter the valid number 0-6");
        break;

    }
}