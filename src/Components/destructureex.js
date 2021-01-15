import React from'react'

function Destructureex(x,y){
const alphabet=['A','B','C','D','E','F']
const numbers=['1','2','3','4','5','6']

//const a=alphabet[0]
//const b=alphabet[1]
const [a,,c,...rest]=alphabet
const newarray=[...alphabet,...numbers]
console.log(a)
//console.log(b)
console.log(c)
console.log(rest)
console.log(newarray)
const personOne={
    name:'Divya',
    age:20,
    address:{
        city:'chennai',
        state:'Tamilnadu'
    }
}
const personTwo={
    name:'Sree',
    age:21,
    address:{
        city:'Vijayawada',
        state:'Andhra Pradesh'
    }
}
const {name:firstname='DivyaAppasani',age,address:{city},favfood='pizza'}=personOne
const {name:fullname='SreeAppasani',...last}=personTwo
console.log(firstname)
console.log(age)
console.log(city)
console.log(favfood)
console.log(last)
const personThree={...personOne,...personTwo}
console.log(personThree)
function printuser({name,age}){
    console.log('name is',{name} ,'Age is',{age})
}
printuser(personOne)
return(
    //[x+y,x*y]
        <h3>Destructuring example</h3> 

)
}
//const [sum,multiply,division='nodivision']=Destructureex(3,4)

export default Destructureex