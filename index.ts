#! /usr/bin/env node
import inquirer from "inquirer";

let myPin = 1234;
let myBalance = 10000;//dollar
console.log("**** Bank Balance Detail ****\n" );

let pinAns = await inquirer.prompt(
    [{
    name :"pin",
    message:"please enter your pin code",
    type:"number",
    },
]);
if(pinAns.pin == myPin)
{
    console.log("***your pin code is correct ***");
    
    let operatorAns = await inquirer.prompt(
        [{
            name:"operation",
            message:"what do you want please select option",
            type:"list",
            choices:["widthraw","check balance","fast cash"],
        },
    ]);
    if(operatorAns.operation === "widthraw")
    {
        let amountAns = await inquirer.prompt(
        [{
            name:"amount",
            message:" please enter your amount to widthraw ",
            type:"number",
        },
        ]);
        if(amountAns.amount <= myBalance){
             myBalance -= amountAns.amount

             console.log(`your remaining balance is : ${myBalance}`);
            }else{
            console.log(`Sorry ! You have insufficient balance`);  
    };
    }else if(operatorAns.operation === "check balance"){
    console.log(`***Check Balance:*** \n  Your current Balance is: ${myBalance}`);
   
    }else if(operatorAns.operation === "fast cash"){
        let amountFast = await inquirer.prompt(
            [{
                name :"fast",
                message:"please select option",
                type:"list",
                choices:[1000,2000,5000,10000,15000],
            },
        ]);
        
            if(amountFast.fast <= myBalance)
            {
                myBalance -= amountFast.fast
            console.log(`your remaining balance is : ${myBalance}`);
            }else{
            console.log(`Sorry ! You have insufficient balance`);  
            };
        
}    
}else{
    console.log(`Invalid pin code`);

};