// This count veriable and 2 function are for adding and substracting quantity from card
let count = 0
let count1=document.getElementById("count")
function addition(){
    count += 1
    count1.innerHTML=count
}

function substraction(){
    count -= 1
    count1.innerHTML=count
}
// .