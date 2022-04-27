// Iteration 1: Names and Input
let hacker1 = 'Alan'
let hacker2 = `Alex`
console.log(`the driver name is ${hacker1}`)
console.log(`the navigator name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length>hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
  } else if (hacker1.length<hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
  } else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!.`)
  }

// Iteration 3: loop
const hacker = hacker1.toUpperCase()
let result = ""
let result2 = ""


for(let i = 0;i<=hacker.length-1;i++) {
 result += hacker[i]+" ";
}
console.log(result)

for (let j =hacker.length-1 ; j >= 0;j--) {
   result2 += hacker1[j]
}
console.log(result2)
let k = 0
while (hacker1[k]!=hacker2[k]) {
  k++;
}
 let search =hacker1[k].localeCompare(hacker2[k])
 if (search = 1) {
   console.log("The driver's name goes first.")
 }
else if (search = -1){
  console.log("Yo, the navigator goes first definitely.")
}else {
  console.log("What?! You both have the same name?")
}
