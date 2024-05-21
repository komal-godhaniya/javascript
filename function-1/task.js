    // task-1

let  product = document.getElementById("in1").value   
let digit = 1

let sum1 = function(){
    if (product === "") {
        document.getElementById("ans1").innerHTML = "INVALID"
    }
    else{
        for(let i=0; product[i];i++){
            digit *= product[i]
        }
        document.getElementById("ans1").innerHTML= " PRODUCT OF ALL DIGIT :- " + digit
    }
}
sum1()

    // task-2

let first = document.getElementById("in2").value    
let second = document.getElementById("in3").value    
let third = document.getElementById("in4").value    


function sum2(){
    if (first === "" && second === "" && third === "") {
        document.getElementById("ans2").innerHTML="INVALID"
    }
    else{
        let total = +first + +second + +third
        document.getElementById("ans2").innerHTML= total
    }
}
sum2()

    // task-3

let fact_no = document.getElementById("in5").value
let fact = 1

factorial=()=>
    {
        if (fact_no === "") {
            document.getElementById("ans3").innerHTML="INVALID"
        }
        else{
            for(let i=1; i<=fact_no;i++){
                fact *= i
            }
            document.getElementById("ans3").innerHTML= fact
        }
    }
factorial()    

    // task-4

let double_num = document.getElementById("in6").value

double=()=>
    {
        if (double_num === "") {
            document.getElementById("ans4").innerHTML="INVALID"
        }
        else{
            document.getElementById("ans4").innerHTML= (double_num*2)
        } 
    }
double()

    // task-5

let reverse_num = document.getElementById("in7").value

reverse=()=>
    {
        if (reverse_num === "") {
            document.getElementById("ans5").innerHTML="INVALID"
        }
        else{
            for(let i=reverse_num.length-1;i>=0;i--){
                document.getElementById("ans5").innerHTML += reverse_num[i]
            }
        } 
    }
reverse()

    // task-6

let start = document.getElementById("in8").value
let end = document.getElementById("in9").value

let a = function odd(){
    if (start === "" && end === "") {
        document.getElementById("ans6").innerHTML="INVALID"
    }
    else{
        for(let i=start; i<=end; i++){
            if (i%2 != 0) {
                document.getElementById("ans6").innerHTML += i +" &nbsp;&nbsp;"
            }
        }
    }
}
a()

    // task-6

let mode = document.getElementById("select").value

darkmode = () => {
    if (mode === "dark") {
        document.getElementById("ans7").innerHTML="DARKMODE IS ON"
    }
    else{
        document.getElementById("ans7").innerHTML="DARKMODE IS OFF"
    }
}
darkmode()
