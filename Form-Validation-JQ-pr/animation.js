
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

        // e-mail

        $("#err_3").text("")
        let mail = $("#mail").val()
        let r_mail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

        if(mail === ""){
            $("#err_3").text("Please enter email !")
        }
        else if(!r_mail.test(mail)){
            $("#err_3").text("Enter valid email...xyz@gmail.com")

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

        // confirm password

        let cpw = $("#c_pass").val()
        $("#err_4").text("")

        if(cpw === ""){

            isValid = false;
            $("#err_4").text("Please enter password !")
        }

        else if(cpw !== pass){

            isValid = false;
            $("#err_4").text("Password will not match...")
        }



        if(isValid){
            location = "thanks.html";
        }
    })
})
