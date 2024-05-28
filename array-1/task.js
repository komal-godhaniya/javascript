    // task-1

let start = document.getElementById("in1").value 
let end = document.getElementById("in2").value 
let arr_1 = []

for(let i=start; i<=end; i++){
    arr_1.push(i)
}
document.getElementById("ans1").innerHTML= arr_1

    // task-2

let arr_2 = [1,2,3,4,5]    

document.getElementById("ans2").innerHTML = "elements in array "+ arr_2 

for(let i=arr_2.length-1; i>=0; i--){
    arr_2.pop(i)
}
document.getElementById("ans2").innerHTML += "<br> all elements are remove"

    // task-3

let arr_3 = ["red","green","blue"]    

document.getElementById("ans3").innerHTML = "elements in array "+ arr_3
    
for(let i=arr_3.length-1; i>=0; i--){
    arr_3.shift(i)
}
document.getElementById("ans3").innerHTML += "<br> all elements are remove"

    // task-4
    
let arr_4 = ['lion', 'tiger', 'elephant']    

document.getElementById("ans4").innerHTML = "elements in array :- "+ arr_4 
        
    arr_4.unshift("giraffe")
    arr_4.unshift("zebra")

document.getElementById("ans4").innerHTML += "<br> all elements in array :- " + arr_4
    
    // task-5

let arr_5 = ['a', 'b', 'c', 'd', 'e']    

document.getElementById("ans5").innerHTML = "elements in array "+ arr_5
    
for(let i=arr_5.length-1; i>=0; i--){
    arr_5.pop(i)
}
document.getElementById("ans5").innerHTML += "<br> all alphabet are remove"
  
    // task-6

let arr_6 = [1,2,3,4,5]   

document.getElementById("ans6").innerHTML = "elements in array "+ arr_6

    arr_6.reverse()

document.getElementById("ans6").innerHTML += "<br> Reverse element :- " + arr_6

    // task-7

let arr_7 = [8,9,2,1,6]   

document.getElementById("ans7").innerHTML = "elements in array "+ arr_7
    
    arr_7.sort()
    
document.getElementById("ans7").innerHTML += "<br> sort element :- " + arr_7
  
    // task-8

let arr_8 = new Date

document.getElementById("ans8").innerHTML += "Today's date is ...."+ arr_8

    // task-9

let str_1 = document.getElementById("in3").value
let str_2 = document.getElementById("in4").value
let arr_9 = str_1.concat(" ",str_2)

document.getElementById("ans9").innerHTML += "concat a string :- "+ arr_9

    // task-10
   
let upper = document.getElementById("in5").value

let arr_10 = upper.toUpperCase()

document.getElementById("ans10").innerHTML += "Uppercase :- " + arr_10

    // task-11
   
let lower = document.getElementById("in6").value

let arr_11 = lower.toLowerCase()
    
document.getElementById("ans11").innerHTML += "Lowercase :- " + arr_11

    // task-12

let str = document.getElementById("in7").value 

    for(let i=0; str[i]; i++)
    {
        if(str[i] == "a" || str[i] == "A" ||
           str[i] == "e" || str[i] == "E" ||
           str[i] == "i" || str[i] == "I" ||
           str[i] == "o" || str[i] == "O" ||
           str[i] == "u" || str[i] == "U")
        {
            console.log(str[i]+" is Vowel")
            document.getElementById("ans12").innerHTML += str[i]+" is Vowel...<br>"
            str.charAt(str[i])
        }
        else
        {
            console.log(str[i])
            document.getElementById("ans12").innerHTML += str[i]+"<br>"
        }
    
    }

    // task-13

let arr_13 = [1,2]    

document.getElementById("ans13").innerHTML = "elements in array :- "+ arr_13
            
    arr_13.unshift("3")
    arr_13.unshift("4")
    arr_13.unshift("5")
    arr_13.unshift("6")
    arr_13.unshift("7")
    
document.getElementById("ans13").innerHTML += "<br> all elements in array :- " + arr_13
    
    // task-14

let arr_14 = [1,2,3,4,5]    

document.getElementById("ans14").innerHTML = "elements in array "+ arr_14
        
    arr_14.shift()
    arr_14.shift()

document.getElementById("ans14").innerHTML += "<br>  After remove 2 element :- " + arr_14
    

    // task-15

let arr_15 = ["komal","bhakti","dhara"] 

arr_15.splice(2,1,"manu","aastha","harmi")

document.getElementById("ans15").innerHTML += "after splice :- " + arr_15