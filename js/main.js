//спроба 1

const number = '123456789';

console.log(number);
let money = number;

for (let i = 0; i < number.length - 3; i++) {
    let money = number[i];

        money = number.substr(-3);
        let money1 = ',' + money;
        console.log(money1);
    
        let money2 = number.substr(-6, 3);
        money2 = ',' + money2 + money1;
        console.log(money2);

        let money3 = number.substr(-9, 3);
        money3 = money3 + money2;
        console.log(money3);
}

// спроба 2

// for (let i = 0; i < number.length - 3; i++) {
//     let money = number;
    
//     if (money > 3) {
//         money = number.substr(-3);
//         money = ',' + money;
//         money = number.charAt(i) + money;
//     }
//     console.log(money);
// }



// спроба 3

// const number = 123456789;
// console.log(number);
// let money = number.toLocaleString();
// console.log(money);
// console.log(money.split(','));

    
   
