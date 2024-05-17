
    // task-1

let num1 =  document.getElementById("in1").value

let i=0, count=0
if (num1 === "") {
    document.getElementById("ans1").innerHTML="INVALID"
}
else{
    do{
        count++
        i++
    }while(num1[i])
    document.getElementById("ans1").innerHTML= count    
}

    // task-2

let num2 = document.getElementById("in2").value

let fact = 1 , i2=1

if (num2 === "") {
    document.getElementById("ans2").innerHTML="INVALID"
}
else{
    while (num2 >= i2) {

        fact *= num2
        num2--
    }
    document.getElementById("ans2").innerHTML = fact
}

    // task-3

let num3 = document.getElementById("in3").value

let rev = 0 , rem

if (num3 === "") {
    document.getElementById("ans3").innerHTML="INVALID"
}
else{
    while (num3 != 0)  {
        rem = num3 % 10
        rev = rev * 10 + rem
        num3 = Math.floor(num3 / 10)
    }
    document.getElementById("ans3").innerHTML = rev
    
}

    // task-4

let num4 = document.getElementById("in4").value
let num5 = document.getElementById("in5").value

let i4 = 1
let res = 1

if(num4 === "" && num5 === ""){
  document.getElementById("ans4").innerHTML="INVALID"
}
else{
    do{
        res *= num4
        i4++
    }while(i4 <= num5)
    
    document.getElementById("ans4").innerHTML=res    
}

    // task-5

let num6 = document.getElementById("in6").value
let num7 = document.getElementById("in7").value
let count1 = 0
let i5 = 1

if(num6 === "" && num7 === ""){
    document.getElementById("ans5").innerHTML="INVALID"
}
else{
    do{
       if(i5 %2==0){
        count1++
        document.getElementById("even").innerHTML += i5 + "&nbsp;&nbsp;&nbsp;"
       }
       i5++
    }while(i5 <= num7)
    
    document.getElementById("ans5").innerHTML= "TOTAL EVEN NUMBER ...  " +count1    
}

    // task-6

let num8 = document.getElementById("in8").value
let num9 = document.getElementById("in9").value
let count2 = 0
let i6 = 1

if(num8 === "" && num9 === ""){
    document.getElementById("ans6").innerHTML="INVALID"
}
else{
    do{
       if(i6 %2 !=0){
        count2++
        document.getElementById("odd").innerHTML += i6 + "&nbsp;&nbsp;&nbsp;"
       }
       i6++
    }while(i6 <= num9)
    
    document.getElementById("ans6").innerHTML= "TOTAL ODD NUMBER ...  " +count2   
}