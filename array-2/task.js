    // task-1

let num1 = [1,2,3,4,5]

let size_1 = document.getElementById("in1").value
let arr_1 =[]

for(let i=1;i<=size_1; i++){
    let num = prompt("Enter Number :- ")
    document.getElementById("ans1").innerHTML+= i+"NUMBER IS :- " +num+"<br>"
    arr_1.push(num)
}
document.getElementById("ans1").innerHTML += "DOUBLE OF NUMBER IS :- "

let fun_1 = arr_1.map((el)=>{
    return el*2
})
document.getElementById("ans1").innerHTML += fun_1

    // task-2

let num2 = [10,20,15,5,19]

let ans2 = num2.filter((age)=>{
    return age>18
})
console.log(ans2)
document.getElementById("ans2").innerHTML += "AGE GREATER THAN 18 :- " + ans2
    
    // task-3

let ans3 = ['Mango','Apple','Grapes']

console.log(ans3.indexOf('Apple'))
document.getElementById("ans3").innerHTML = ans3 + "<br>"
document.getElementById("ans3").innerHTML += "INDEX OF 'Apple' IS :- " + ans3.indexOf('Apple')
    
    // task-4

let ans4 = ['red','green','blue']

console.log(ans4.includes('green'))
document.getElementById("ans4").innerHTML = ans4 + "<br>"
document.getElementById("ans4").innerHTML += " 'green' :- " + ans4.includes('green')
    
    // task-5

let value = [80,70,300,90]

function check(el){
    return el>=60
}
console.log(value.every(check)); 
document.getElementById("ans5").innerHTML = value + "<br>"
document.getElementById("ans5").innerHTML += "ALL SCORE IS >60 OR NOT :- " + value.every(check)

    // task-6

let temp = [120,85,80,60]

function check(el){
    return el>100
}
console.log(temp.some(check)); 
document.getElementById("ans6").innerHTML = temp + "<br>"
document.getElementById("ans6").innerHTML += "TEMPERATURE IS ABOVE 100 DG :- " + temp.some(check)

   // task-7

let add = [1,2,3,4]
let ans7 = add.map((el)=>{
       return el+1
   })
console.log(ans7)
document.getElementById("ans7").innerHTML = add + "<br>"
document.getElementById("ans7").innerHTML += "AFTER ADD +1 :- " + ans7

    // task-8
   
let even = [1,2,3,4]
let ans8 = even.filter((el)=>{
    return el % 2 == 0  
})
console.log(ans8)
document.getElementById("ans8").innerHTML = even + "<br>"
document.getElementById("ans8").innerHTML += "EVEN :- " + ans8
        
    // task-9

let odd = [1,2,3,4]
let ans9 = even.filter((el)=>{
    return el % 2 != 0  
})
console.log(ans9)
document.getElementById("ans9").innerHTML = odd + "<br>"
document.getElementById("ans9").innerHTML += "ODD :- " + ans9
    