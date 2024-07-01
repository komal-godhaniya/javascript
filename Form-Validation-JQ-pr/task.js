
$(document).ready(function(){
    
    $("#form").submit(function(event){

        event.preventDefault()
        let isValid = true;

        // Username

        $("#err_1").text("")
        let user = $("#u_name").val()

        if(user === ""){

            isValid = false;
            $("#err_1").text("Please enter name !")
        }

        // Password

        $("#err_2").text("")
        let pass= $("#pass").val()
        let r_pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

        if(pass === ""){

            isValid = false;
            $("#err_2").text("Please enter password !")
        }
        else if(!r_pass.test(pass)){

            isValid = false;
            $("#err_2").text("Enter valid password...Komal123!")
        }


        if(isValid){
            location = "form.html";
        }
    })
})
