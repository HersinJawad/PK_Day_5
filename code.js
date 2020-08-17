const filterworld = [
    "javascript",
    "crud",
    "react native",
    "camelcase",
    "veriabel",
    "express",
]

const longitword = filterworld.filter((kata) => kata.length > 6)
console.log(longitword)

// Map
let array = [1, 2, 3, 4, 5]
const newarray = array.map((x) => {
    // console.log(x)
    return x * 2
})
console.log(newarray)

// find
let number = [5, 12, 8, 130, 44]
let numberfound = number.find((number) => number > 10)
console.log(numberfound)

// foreach
let numbersword = ["none", "Two", "three",]
let text = ""

numbersword.forEach((number) => { text += number + "," })
console.log("text is:", numbersword)


let stringZealBatam = "Zeal Batam Indonesia"
let resultCharAt = stringZealBatam.charAt(0)
console.log("result charAt :", resultCharAt)

let resultCharAt2 = stringZealBatam.charAt(1)
console.log("result charAt:", resultCharAt2)

let resultCharAt3 = stringZealBatam.charAt(8)
console.log("result charAt:", resultCharAt3)

let resultlenght = stringZealBatam.length
console.log(resultlenght)

let resultToUpperCase = stringZealBatam.toUpperCase()
console.log(resultToUpperCase)

let resultToLowerCase = stringZealBatam.toLocaleLowerCase()
console.log(resultToLowerCase)

let resultSplit = stringZealBatam.split(" ")
console.log(resultSplit)
resultSplit = stringZealBatam.split(" ", 2)
console.log(resultSplit)

let resultReplace = stringZealBatam.replace("Batam", "Kepulauan Riau")
console.log(resultReplace)

let resultSubstr = stringZealBatam.substr(0, 6)
console.log(resultSubstr)
resultSubstr = stringZealBatam.substr(0, 3)
console.log(resultSubstr)

// Array Methody
let ZealBatamArray = ["Zaal", "Batam", "Indonesia"]
let resultArrayLength = ZealBatamArray.length
console.log(`result ArrayLength is ${resultArrayLength}`)

let resultArrayIndexOf = ZealBatamArray.indexOf("indonesia")
console.log(resultArrayIndexOf)

ZealBatamArray.push("web")
console.log(ZealBatamArray)

ZealBatamArray.pop()
console.log(ZealBatamArray)

let resultArrayJoin = ZealBatamArray.join("--")
console.log(ZealBatamArray)

let resultArraySlice = ZealBatamArray.slice(1)
console.log(resultArraySlice)
resultArraySlice = ZealBatamArray.slice(1, 2)
console.log(resultArraySlice)

ZealBatamArray.sort()
console.log(ZealBatamArray)

ZealBatamArray.reverse()
console.log(ZealBatamArray)

// Math Method
let resultMathRandom = Math.random()
console.log(resultMathRandom)

let resultMathCeil = Math.ceil(2.5)
console.log(resultMathCeil)

let resultMathFloor = Math.floor(1.9)
console.log(resultMathFloor)

let resultMathFloorRound = Math.round(2.4)
console.log(resultMathFloorRound)
resultMathFloorRound = Math.round(2.5)
console.log(resultMathFloorRound)

// Object
let object1 = { fname: "Jhon" }
let object2 = { lname: "Doe" }
let object3 = { age: 30 }

let object4 = { ...object1, ...object2, ...object3 }
console.log(object4)

let object5 = { object1, object2, object3 }
console.log(object5)

let resultObjectKey = Object.keys(object5)
console.log(resultObjectKey)

//  timing Methods
// function firstFunction() {
// let count = 0
// setInterval(() => {
//         count++
//         alert(`this is setInternal & alredy show in ${count} time`)
//     }, 3000)
// }

// firstFunction()

// function secondFunction() {
//     setTimeout(() => {
//         alert("this is timeout")
//     }, 3000)
// }

// secondFunction()

// fetch
fetch("https://jsonplaceholder.typicode.com/posts",
    {
        mode: "cors",
        headers: {
            "Content-Type": " aplication/json",
        },
    })
    .then((response) => {
        console.log(response.json())
    })
    .catch((err) => {
        console.log(err)
    })