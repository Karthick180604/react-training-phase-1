console.log(x)
var x=10;


function myCounter(){
    let count=0;
    return function(){
        count++;
        return count;
    }
}
const add = myCounter()
console.log(add())
console.log(add());
console.log(add());

const obj={
    name:"john",
    getName:function(){
        return this.name;
    },
    getNestedName:function(){
        return function(){
            return this.name;
        }
    },
    getThroughArrow:()=>{
        return this.name;
    },
    getNestedArrow:function(){
        return () => {
            return this.name;
        }
    }
}
console.log(obj.getName())
const callFunction=obj.getNestedName();
console.log(callFunction())
console.log("Arrow",obj.getThroughArrow())
const callArrowFunction=obj.getNestedArrow();
console.log("nested arrow", callArrowFunction())

const array=[1,2,3,4,5]
const[one, two, ...rest]=array
console.log(one, two, rest)

function restOperator(...num){
    console.log(num)
}
restOperator(1,2,3,4,5)

const demo={
    name:"kenny",
    age:67
}
const {name, age}=demo
console.log(name, age)