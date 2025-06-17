let str="hello world"
console.log(str.at(-2))
let text="helloworld"
let replaced=text.replace("hello", "world")
console.log(replaced)
let str2=replaced.replace("world", "abc")

const arr=[1,2,3,4,5];
const newArr=arr.map((data, index, arr)=>{
    return data*2
})
console.log(newArr)
const filteredArray=arr.filter((data)=>{
    return data%2==0;
})
console.log(filteredArray)

const reduced=arr.reduce((initial, data, index)=>{
    console.log(initial)
    return initial+data;
},0)
console.log("reduce",reduced)

function mainFunction(str, callBack){
    let a=10;
    console.log(str)
    callBack(a)
}
function callBack(a){
    console.log("calculated value",a)
}

mainFunction("hello", callBack)

let state=false;
const promise = new Promise((resolve, reject)=>{
        if(state)
        {
            resolve("data fetched")
        }
        else
        {
            reject("error in fetching")
        }
    })


promise
.then((whenResolved)=>{
        console.log("first then",whenResolved)
    })
.catch((error)=>{
    console.log(error)
})

let flag=false
async function func(){
    await new Promise((resolve, reject)=>{
            setTimeout(()=>{
            flag=true
            console.log("flag updated")
            resolve("successful")
        },2000)
    })
    return new Promise((resolve, reject)=>{
        if(flag)
        {
            resolve("Fetched data")
        }
        else
        {
            reject("Not fetched data")
        }
    })
}

func().then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.error("error",error)
})

const obj = {
    name:"john",
    getName:function(str){
        return str + this.name;
    }
}
const person1={
    name:"kenny"
}
console.log(obj.getName.call(person1, "hello "))


