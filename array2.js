const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]



const all_new_heros = [...marvel_heros, ...dc_heros]


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
//console.log(real_another_array);



//console.log(Array.isArray("shashank"))
//console.log(Array.from("shashank"))
//console.log(Array.from({name: "shashank"})) // interesting

let score1 = 900
let score2 = 700
let score3 = 500

console.log(Array.of(score1, score2, score3));