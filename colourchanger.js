let isClicked = false //let is mutable
//const isHovered= false //const is immutable
let currentColor
let unorderList = document.querySelectorAll("ul li")

unorderList.forEach(function(obj){
    let getCurrentColor = obj.style.background

    obj.addEventListener('click',function(){
        document.body.style.background = getCurrentColor
        currentColor = getCurrentColor
        isClicked = false //negates the value and returns true
        console.log("Click status: ", isClicked)
    })
    if(isClicked === true){
        console.log("Hover cannot be achieved as an element has been clicked")
    }else{
       obj.addEventListener('mouseover',function(){
        document.body.style.background = getCurrentColor
    }
    ) 
    }
    
})
        