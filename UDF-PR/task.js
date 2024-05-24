    // task-1

let vowel = document.getElementById("in1").value 
let count = 0

function charcount(vowel){
    document.getElementById("ans1").innerHTML="VOWEL IN STRING :- "
    for(let i=0; i<=vowel.length; i++){

        if 
        (vowel[i] === 'a' || vowel[i] === 'A' ||
        vowel[i] === 'e' || vowel[i] === 'E' ||
        vowel[i] === 'i' || vowel[i] === 'I' ||
        vowel[i] === 'o' || vowel[i] === 'O' ||
        vowel[i] === 'u' || vowel[i] === 'U' ) 
        {
             count++
        }
        document.getElementById("ans1").innerHTML = count
    }
}

charcount(vowel)

    // task-2

    let principle = document.getElementById("in2").value
    let rate = document.getElementById("in3").value
    let time = document.getElementById("in4").value
    
    function simple_principle(principle) 
    {
        function simple_rate(rate) 
        {
            function simple_time(time) 
            {
                document.getElementById("ans2").innerHTML="SIMPLE INTREST IS :- " + ((+principle * +rate * +time)/100)
            }
            simple_time(time) 
        }
        simple_rate(rate) 
    }
    simple_principle(principle)   
    
    // task-3

    km_to_m = document.getElementById("in5").value
    function km(){
        let conv_fac = 0.621371

        let miles = km_to_m * conv_fac

        document.getElementById("ans").innerHTML = miles
    }
    km()


    // task-4


    let num = document.getElementById("in6").value
    let empty1 = ""
    let empty2 = ""

    if(num === "")
    {
        document.getElementById("ans4").innerHTML = "Invalid Number"
    }
    else
    {
        function isPalindrome(num)
        {
            for(let i=0; num[i]; i++)
            {
                empty1 += num[i]
            }
            for(let i=num.length-1; i>=0; i--)
            {
                empty2 += num[i]
            }
            if(empty1 === empty2)
            {
                document.getElementById("ans4").innerHTML = "Number is Palindrome"
            }
            else
            {
                document.getElementById("ans4").innerHTML = "Number is Not Palindrome"
            }
        }
        isPalindrome(num)  
    }