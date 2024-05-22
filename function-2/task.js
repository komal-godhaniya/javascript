    // task-1

let first = document.getElementById("in1").value  
let second = document.getElementById("in2").value 

sum = (first,second)=>{
    let total = +first + +second
    return total
}
document.getElementById("ans1").innerHTML="SUM OF 2 VALUE :- " +sum(first,second)

    // task-2

let length = document.getElementById("in3").value  
let width = document.getElementById("in4").value 
    
Rectangle = (length,width)=>{
    let area = +length * +width
    return area
}
document.getElementById("ans2").innerHTML="AREA OF RECTANGLE :- " +Rectangle(length,width)
    
    // task-3

let f_string = document.getElementById("in5").value  
let s_string = document.getElementById("in6").value 
    
Concatenates = (f_string,s_string)=>{
    let concat = f_string + s_string
    return concat
}
document.getElementById("ans3").innerHTML="CONCATENATES TWO STRING :- " +Concatenates(f_string,s_string)
 
    // task-4

let side = document.getElementById("in7").value  
        
s_area = (side)=>{
    let area_square = +side * +side 
    return area_square
}
document.getElementById("ans4").innerHTML="AREA OF SQUARE :- " +s_area(side)
 
    // task-5

let s_length = document.getElementById("in8").value  
        
s_area = (s_length)=>{
    return s_length.length
}
document.getElementById("ans5").innerHTML="LENGTH OF A STRING :- " +s_area(s_length)
    
// task-5

let string = document.getElementById("in9").value  
        
s_function = (string)=>{
    if (string[0] === "A" && string[string.length-1] === "A") {
        return "OUR STRING HAVE 'A' IN START AND END"
    }
    else if (string[0] === "a" && string[string.length-1] === "a") {
        return "OUR STRING HAVE 'A' IN START AND END"
    }
    else if (string[0] === "a" && string[string.length-1] === "A") {
        return "OUR STRING HAVE 'A' IN START AND END"
    }
    else if (string[0] === "a" || string[0] === "A") {
        return "OUR STRING IS START FROM 'A'"
    }
    else if (string[string.length-1] === "a" || string[string.length-1] === "A") {
        return "OUR STRING IS END FROM 'A'"
    }
    else{
        return "OUR STRING HAVE NO 'A'"
    }

}
document.getElementById("ans6").innerHTML = s_function(string) 
      
    // task-7

let celsius =document.getElementById("in10").value  

fahrenheit = (celsius)=>
    {
        return(celsius*9/5) + 32
    }
document.getElementById("ans7").innerHTML="CELSIUS TO FAHRENHEIT :- "+fahrenheit(celsius)+" Degrees..."    
