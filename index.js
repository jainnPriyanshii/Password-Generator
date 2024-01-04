// #CODE1
// const Onclick = document.querySelector(".container")

// const passcode [
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnoqrstuvwxyz1234567890!@##$^&*()"
    
// ]

// function generate(){
//   let password ='';
//     let randomNumber = Math.floor(Math.random()*(passcode.length));
//     document.getElementById('displaypassword').innerHTML=password;
// }

// Onclick.addEventListener("click", generate);

// #CODE 2

// class Password {
//     constructor() {
//       console.log("Welcome to Password Generator")
//       this.pass = ""
//     }
//     generatePassword(len) {
//       let chars = "abcdefghijklmnopqrstuvwxyz"
//       let numbers = "1234567890"
//       let special = "!@#$%^&*()"
//       if (len < 3) {
//         console.log("Your password should be atleast 3 characters long")
//       }
//       else {
//         let i = 0
//         while (i < len) {
//           this.pass += chars[Math.floor(Math.random() * chars.length)]
//           this.pass += numbers[Math.floor(Math.random() * numbers.length)]
//           this.pass += special[Math.floor(Math.random() * special.length)]
//           i += 3
//         }
//         this.pass = this.pass.substr(0, len)
//         return this.pass
//       }
//     }
//   }
  
// //   let p = new Password()
// //   console.log(p.generatePassword(1))
// Onclick.addEventListener("click", generate);


// #CODE 3


const onClick = document.querySelector(".container");

const characters = [
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    'abcdefghijklmnopqrstuvwxyz',
    '1234567890',
    '!@##$^&*()'
].join('');

function generate() {
    let password = '';
    for (let i = 0; i < 10; i++) { 
        let randomNumber = Math.floor(Math.random() * characters.length);
        password += characters[randomNumber];
    }
    document.getElementById('displaypassword').innerHTML = password;
}

onClick.addEventListener("click", generate);


// CODE4

// const Onclick = document.querySelector(".container")

// const passcode = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnoqrstuvwxyz1234567890!@##$^&*"
// let password="";

// function generate() {
//     for (let i = 0; i < 8; i++) {
//         let randomNumber = Math.floor(Math.random() * (passcode.length));
//         password+=passcode[randomNumber];
//     }
//     document.getElementById('displaypassword').innerHTML = password;
// }
// Onclick.addEventListener("click", generate);
// console.log(password);