let text=document.getElementById("text")
let button=document.getElementById("button")

button.addEventListener('click', function(){
    this.innerText="clicked"
    text.innerHTML+='Hello user welcome to the page '
})
button.addEventListener('click',()=>{
    text.innerHTML+='from second function '
})
const mouseOverHandler=()=>{
    text.innerHTML+='mouse overed '
    removeHandler()
}
button.addEventListener('mouseover', mouseOverHandler)

function removeHandler(){
    button.removeEventListener('mouseover', mouseOverHandler)
}

let keyEvent=document.getElementById('key-event')
let submit=document.getElementById('submit-text')

document.addEventListener('keydown',(event)=>{
    if(event.altKey && (event.key==='k' || event.key==='K'))
    {
        console.log("key event")
        submit.innerHTML="Your action is submitted"
    }
})

//event loops

// queueMicrotask(()=>{
//     console.log("queue")
// })
// Promise.resolve().then(()=>{
//     console.log("promise")
// })