console.log("hello");
const show = document.getElementById('output')
const numbers=Array.from(document.getElementsByClassName('number'))
const Clear=document.getElementById('clear')
const Delete=document.getElementById('del')
const Operation=Array.from(document.getElementsByClassName('operation'))
const Equal=document.getElementById('equal')
const Dot=document.getElementById('dot')
console.log(show)
console.log(numbers)
for(let i=0;i<show.innerText.length;i++){
    console.log(show.innerText[i])
}

numbers.map( button =>{
    button.addEventListener('click',(e)=>{
        // console.log(e.target.innerText)
        // switch(e.target.innerText){
        //     case'AC':
        //         show.innerText="";
        //         break
        //     case'DEL':
        //         if(show.innerText){
        //             show.innerText=show.innerText.slice(0, -1)
        //         }
        //         break
        //     case'=':
        //         try{
        //             show.innerText=eval(show.innerText)
        //         }
        //         catch{
        //             show.innerText='invalid';
        //         }
        //         break
        //     default:{
        //              if(show.innerText){
        //                 if(show.innerText.endsWith("+")|| show.innerText.endsWith("-")||show.innerText.endsWith("*")||show.innerText.endsWith("/")){
        //                     // const last=show.innerText.charAt(show.innerText.endsWith)
        //                     //  console.log(last)
        //                 show.innerText+=""
        //                 }
                        
        //         }else
        //          show.innerText += e.target.innerText
        //     }
                
        // }
        if(show.innerText=="0"){
             show.innerText=e.target.innerText
        }
        else if(show.innerText!="0"){
            show.innerText+=e.target.innerText
        }
    })
})

Operation.forEach(button=>{
    button.addEventListener('click',(e)=>{
        if(show.innerText=="0"|| show.innerText.endsWith("+")||show.innerText.endsWith("-")||
            show.innerText.endsWith("*")||show.innerText.endsWith("/")||show.innerText.endsWith("%")){
            show.innerText=show.innerText
            }
            else{
                show.innerText+= e.target.innerText
            }
    })
})
Clear.addEventListener('click',()=>{
    if(show.innerText)
    show.innerText=""
})

Delete.addEventListener('click',(button)=>{
    if(show.innerText){
                    show.innerText=show.innerText.slice(0, -1)
                }
})

Equal.addEventListener('click',button=>{
    show.innerText=eval(show.innerText)
})

Dot.addEventListener('click',(e)=>{
    for(let i=0;i<show.innerText.length;i++){
        if(show.innerText[0]=='.'){
             show.innerText=show.innerText
        }
        else if(show.innerText.endsWith(".")){
            show.innerText=show.innerText
            }
        else{
            show.innerText+= e.target.innerText
                }
    }
})

