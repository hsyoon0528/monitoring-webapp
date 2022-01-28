const tall = e => e.height >= 180
const friends = [
    {"name" : "kim", "height" : 173},
    {"name" : "park", "height" : 183},
    {"name" : "lee", "height" : 163},
    {"name" : "choi", "height" : 190},
]

const tallGuy = friends.find(tall)
const tallGuyAll = friends.filter(tall)
//findIndex : get index
//includes : boolean (some)
//find는 가장 빠른 단 하나의 값만 찾음
console.log(tallGuy)
console.log(tallGuyAll)
const func2 = e => e.name
const func3 = e => e.height
const func4 = (e,index) => { 
    console.log(`${index+1} friend name : ${func2(e)}, heihgt : ${func3(e)}`)
}

const intro = friends.forEach(func4)


console.log(intro)

//ES6 구문생략
const cli_name  = "렝가"
const age = "3"
const position = "client"
const data_used_ES6 = {cli_name, age, position}

console.log(data_used_ES6)

//spread ... 
const spread_a = (b,...rest) => {
    console.log(rest)
}
spread_a(1,2,3)
const b = [1,2,3]
const spread_a2 = (a,b,c) => console.log(a,b,c)
spread_a2(...b)
const spread_a3 = [1,2,3,4,5]
const [he,...ato] = spread_a3
console.log(he,ato)

const en1 = [1,2,3]
const en2 = [4,5,6]
const en = [...en2,...en1]
console.log(en)
console.log(Math.max(...en))

/*
swap
let a = 1
leb b = 2
[a,b] = [b,a]
const d = () => [1,2,3,4]
const [a,b,c] = d()
console.log(a,b,c) //1,2,3

same type
const d = () => {return {"name": "rengar", "age": 3}}
const d = () => ( {"name": "rengar", "age": 3} )
const {name, age} = d
console.log(name,age) //rengar ,3
*/

