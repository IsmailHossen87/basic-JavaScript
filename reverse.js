const sentence = " I am a web developer."
let reverse = ''
// for (const letter of sentence){
//     reverse = letter + reverse
// }
// console.log(reverse)

// use loop for reverse 
for(let i=0; i < sentence.length; i++){
    let letter =  sentence[i];
    reverse = letter + reverse;
}
// console.log(reverse)

const Sen = sentence.split(" ").reverse().join(" ")
console.log(Sen)