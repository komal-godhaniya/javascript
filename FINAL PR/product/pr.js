    document.getElementById("data_btn").addEventListener("click" , function()
    {
        let user_id = document.getElementById("user_id").value
        let display = document.getElementById("display")
        display.innerHTML = ""

        for(let i = 0; i < arr.length; i++){
            if(arr[i].id == user_id){

                let img = document.createElement("img")
                img.setAttribute("class" , "img-size")
                img.src = arr[i].image

                let category = document.createElement("p")
                category.setAttribute("id","text")
                category.innerHTML += "<span>CATEGORY :- </span>   " + arr[i].category

                let price = document.createElement("p")
                price.setAttribute("id","text")
                price.innerHTML += "<span>PRICE :- </span>  $" + arr[i].price
                
                let rate = document.createElement("p")
                rate.setAttribute("id","text")
                rate.innerHTML += "<span>RATE :- </span>" + arr[i].rating.rate

                let input = document.createElement("input") 
                input.placeholder= "Change rate !"
                input.style.width = "50%"
                input.style.marginInlineStart = "10px"
                input.style.display = "none"

                let update = document.createElement("button")
                update.innerText = "update"
                update.style.marginInlineStart = "10px"
                update.style.display = "none"


                let edit_btn = document.createElement("button")
                edit_btn.innerText = "Edit"

                edit_btn.addEventListener("click" , () =>{
                    input.style.display = "inline"
                    update.style.display = "inline"
                    edit_btn.style.display = "none"
                })

                update.addEventListener("click" , () =>{
                    rate.innerHTML = input.value
                    
                    input.style.display = "none"
                    update.style.display = "none"

                    edit_btn.style.display = "block"


                    alert("Congratulations! Your rating has been updated to " + input.value)
                })

                display.append(img , category , price , rate , edit_btn , input , update)
                
                storeinlocalstorage(arr)
                
                break;
            }
           
        }
    })


    function storeinlocalstorage(arr) {

        let productstore = []

        for (let i = 0; i < arr.length; i++) {

            let data = productstore.some(
                product => product.id == arr[i].id
            )
            
            if (!data) {
                storedProducts.push(arr[i])
            }
        }
    
        localStorage.setItem("products", JSON.stringify(productstore))
    }