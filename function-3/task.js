    // task-1
   
    let num1 = document.getElementById("in1").value 

    let fun_1 = function factorial(num1)
    {
        if (num1 <= 1) {
            return 1
        }
        else{
            return num1 * factorial(num1 - 1)
        }
    }
    document.getElementById("ans1").innerHTML= "FACTORIAL OF NUMBER IS :- " +fun_1(num1)

    // task-2

    let num2 = document.getElementById("in2").value

    fun_2 = (num2) =>
        {
            if (num2 <= 1) {
                return 1
            }
            else{
                return num2 * fun_2(num2 - 1)
            }
        }
        document.getElementById("ans2").innerHTML="FACTORIAL OF NUMBER :- " +fun_2(num2)


    // task-3

    let num3 = document.getElementById("in3").value

    document.getElementById("ans3").innerHTML="FACTORIAL OF NUMBER :- "+

    (function fun_3(num3)
    {
        if (num3<=1) {
            return 1
        }
        else{
            return num3 * fun_3(num3-1)
        }
    })(num3)

    // task-4

    let num4 = document.getElementById("in4").value

    function fun_4(num4)
    {
        if (num4 <= 1) {
            return 1
        }
        else{
            return num4 * fun_4(num4 - 1) 
        }
    }
    document.getElementById("ans4").innerHTML="FACTORIAL OF NUMBER :- " +fun_4(num4)