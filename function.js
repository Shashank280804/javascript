
function sayMyName(){
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("n");
    console.log("k");

}



function addTwoNumbers(number1, number2){

    
    return number1 + number2
}

const result = addTwoNumbers(3, 5)



function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}



function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "shashank",
    prices: 191
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "shashu",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
