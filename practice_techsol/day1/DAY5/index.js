
  let d= { "data": [
        {
            "id": 1,
            "name": "John Doe",
            "email": "john@gmail.com",
            "age": 25,
            "address": {
                "street": "123 Main St",
                "city": "New York",
                "state": "NY"
            },
            "phone": "555-1234",
            "isEmployed": true,
            "salary": 50000
        },
        {
            "id": 2,
            "name": "Jane Smith",
            "email": "jane.smith@yahoo.com",
            "age": 30,
            "address": {
                "street": "456 Oak Ave",
                "city": "Los Angeles",
                "state": "CA"
            },
            "phone": "555-5678",
            "isEmployed": false,
            "salary": 0
        },
        {
            "id": 3,
            "name": "Michael Johnson",
            "email": "mjohnson@gmail.com",
            "age": 28,
            "address": {
                "street": "789 Pine Rd",
                "city": "Chicago",
                "state": "IL"
            },
            "phone": "555-9101",
            "isEmployed": true,
            "salary": 60000
        },
        {
            "id": 4,
            "name": "Emily Davis",
            "email": "emily.davis@outlook.com",
            "age": 22,
            "address": {
                "street": "321 Elm St",
                "city": "Houston",
                "state": "TX"
            },
            "phone": "555-1213",
            "isEmployed": false,
            "salary": 0
        },
        {
            "id": 5,
            "name": "William Brown",
            "email": "wbrown@hotmail.com",
            "age": 35,
            "address": {
                "street": "654 Cedar Blvd",
                "city": "Phoenix",
                "state": "AZ"
            },
            "phone": "555-1415",
            "isEmployed": true,
            "salary": 70000
        },
        {
            "id": 6,
            "name": "Olivia Wilson",
            "email": "olivia.w@gmail.com",
            "age": 27,
            "address": {
                "street": "987 Maple Dr",
                "city": "Philadelphia",
                "state": "PA"
            },
            "phone": "555-1617",
            "isEmployed": false,
            "salary": 0
        },
        {
            "id": 7,
            "name": "James Taylor",
            "email": "jtaylor@aol.com",
            "age": 29,
            "address": {
                "street": "741 Spruce Ln",
                "city": "San Antonio",
                "state": "TX"
            },
            "phone": "555-1819",
            "isEmployed": true,
            "salary": 55000
        },
        {
            "id": 8,
            "name": "Sophia Martinez",
            "email": "smartinez@gmail.com",
            "age": 24,
            "address": {
                "street": "258 Birch Ct",
                "city": "San Diego",
                "state": "CA"
            },
            "phone": "555-2021",
            "isEmployed": false,
            "salary": 0
        },
        {
            "id": 9,
            "name": "Liam Anderson",
            "email": "liam.anderson@live.com",
            "age": 31,
            "address": {
                "street": "369 Walnut Ave",
                "city": "Dallas",
                "state": "TX"
            },
            "phone": "555-2223",
            "isEmployed": true,
            "salary": 65000
        },
        {
            "id": 10,
            "name": "Isabella Thomas",
            "email": "isabella.t@hotmail.com",
            "age": 26,
            "address": {
                "street": "147 Redwood St",
                "city": "San Jose",
                "state": "CA"
            },
            "phone": "555-2425",
            "isEmployed": false,
            "salary": 0
        },
        {
            "id": 11,
            "name": "Benjamin Jackson",
            "email": "ben.jackson@gmail.com",
            "age": 32,
            "address": {
                "street": "963 Aspen Dr",
                "city": "Austin",
                "state": "TX"
            },
            "phone": "555-2627",
            "isEmployed": true,
            "salary": 72000
        },
        {
            "id": 12,
            "name": "Mia White",
            "email": "mia.white@yahoo.com",
            "age": 23,
            "address": {
                "street": "852 Fir St",
                "city": "Jacksonville",
                "state": "FL"
            },
            "phone": "555-2829",
            "isEmployed": false,
            "salary": 0
        },
        {
            "id": 13,
            "name": "Noah Harris",
            "email": "noah.harris@protonmail.com",
            "age": 34,
            "address": {
                "street": "369 Cypress Ln",
                "city": "Fort Worth",
                "state": "TX"
            },
            "phone": "555-3031",
            "isEmployed": true,
            "salary": 75000
        },
        {
            "id": 14,
            "name": "Ava Martin",
            "email": "ava.martin@gmail.com",
            "age": 21,
            "address": {
                "street": "753 Chestnut Ave",
                "city": "Columbus",
                "state": "OH"
            },
            "phone": "555-3233",
            "isEmployed": false,
            "salary": 0
        },
        {
            "id": 15,
            "name": "Elijah Thompson",
            "email": "ethompson@icloud.com",
            "age": 36,
            "address": {
                "street": "147 Hemlock Rd",
                "city": "Charlotte",
                "state": "NC"
            },
            "phone": "555-3435",
            "isEmployed": true,
            "salary": 80000
        },
        {
            "id": 16,
            "name": "Charlotte Garcia",
            "email": "cgarcia@hotmail.com",
            "age": 28,
            "address": {
                "street": "951 Juniper Blvd",
                "city": "San Francisco",
                "state": "CA"
            },
            "phone": "555-3637",
            "isEmployed": false,
            "salary": 0
        }
    ]};
// {cs:4,nt:2}
//  d.data.forEach((employee)=> {
//     let sta=employee.address.state;
//     if (res[sta]){
//       res[sta]+=1;  
//     }
//     else{
//         res[sta]=1;
//     }
// })
// d.data.forEach((ele)=>{
//     let k=ele.address.state;
//     res.push(k)
// })
// let fres={}
// for(let i=0;i<d.data.length;i++){
//     if (res[i] in fres){
//         fres[res[i]]+=1
//     }
//     else{
//         fres[res[i]]=1
//     }
// }


// highest salarry 
//  let res={}
//  let max=0;
// let nam=""
// d.data.forEach((employee)=> {
//   if(employee.salary>max){
//     max=employee.salary;
//     nam=employee.name;
//   }
// })
// res[nam]=max
// console.log(res)
    

//lowest salary
// --lowestsalary
// let res={}
// let min=Infinity
// let nam=""
// d.data.find((employee)=> {
//       if(employee.salary<min){
//         min=employee.salary;
//         nam=employee.name;
//       }
//     })
// res[nam]=min
// console.log(res)

//3 sum----------------------
// let res={}
// let max=0;
// let nam=""
// d.data.forEach((employee)=> {
//   if(employee.salary>max){
//     max=employee.salary;
//     nam=employee.name;
//   }
// })
// for (let i=0;i<d.data.length;i++){
//     if (max==d.data[i].salary)
//     {
//         d.data[i].highestpaid="true";
//     }
//     else{
//         d.data[i].highestpaid="false"; 
//     }
// }
//     console.log(d)

// 4----sum 

// let len=d.data.length
// let sum=0
// d.data.forEach((elem)=>sum=sum+elem.s
// alary)
// console.log("average salary ",Math.floor(sum/len))

// 5=-----sum

let len=0
let sum=0
d.data.forEach((elem)=>
    {  if(elem.age<=30)
       {
        sum=sum+elem.salary;
        len++;
       } 
    }
    )
console.log("average salary whose age >30",Math.floor(sum/len))
