const myNums = [1, 2, 3]


const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

//console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 4999
    },
    {
        itemName: "cpp course",
        price: 1999
    },
    {
        itemName: "android studio course",
        price: 2999
    },
    {
        itemName: "cloud",
        price: 1299
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);