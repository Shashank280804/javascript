let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}





function one(){
    const username = "shashank"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}


if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}





//console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}