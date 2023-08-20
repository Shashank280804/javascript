// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Shashank",
    "full name": "shashank patil",
    [mySym]: "m9",
    age: 21,
    location: "pune",
    email: "shashank@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Sunday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])

JsUser.email = "shashank@mitaoe.ac.i"
// Object.freeze(JsUser)
JsUser.email = "shashank@mitaoe.com"
// console.log(JsUser);
/*
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
*/
//console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());