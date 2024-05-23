    // task-1

let num1 = document.getElementById("in1").value
let num2 = document.getElementById("in2").value
let num3 = document.getElementById("in3").value

function sum_num1(num1) 
{
    function sum_num2(num2) 
    {
        function sum_num3(num3) 
        {
            document.getElementById("ans1").innerText = "Sum Of "+num1+" , "+num2+" and "+num3+" is : "+ (+num1 + +num2 + +num3)
        }
        sum_num3(num3) 
    }
    sum_num2(num2) 
}
sum_num1(num1)   

    // task-2

let user_name = document.getElementById("in4").value

function message(user_name){
    document.getElementById("ans2").innerHTML="Hello ! " +user_name + "&nbsp;&nbsp;"
    function msg(){
        document.getElementById("ans2").innerHTML += "GOOD MORNING ⛅"
    }
    msg()
}
message(user_name)

    // task-3

    let fact1 = document.getElementById("in5").value
    let fact2 = document.getElementById("in6").value

    function factor_1(fact1){
        function factor_2(fact2){
            let product =  fact1 * fact2
            document.getElementById("ans3").innerHTML="product of " +fact1+ " and " +fact2+ " is : " +product+ " <br> Factor Of &nbsp; " +product+ " is : "
        
            for(let i=1; i<=product; i++)
                {
                    if(product%i == 0)
                        {
                            document.getElementById("ans3").innerHTML += i +" &nbsp;&nbsp;&nbsp;&nbsp;"
                        }
                }
        }
        factor_2(fact2)
    }
    factor_1(fact1)

    // task-4

let str = document.getElementById("in7").value
let empty1 = ""
let empty2 = ""

    for(let i=0; str[i]; i++)
    {
        empty1 +=str[i]
    }
    for(let i=str.length-1; i>=0; i--)
    {
        empty2 +=str[i]
    }
    if(empty1 === empty2)
    {
        document.getElementById("ans4").innerHTML = "String is Palindrome"
    }
    else
    {
        document.getElementById("ans4").innerHTML = "String is Not Palindrome"
    }
   




