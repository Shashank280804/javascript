const user = {
    username: "shashank",
    price: 1000,

    welcomeMessage: function() {
        //console.log(`${this.username} , welcome to website`);
        //console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "shashank"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "shashank"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))

