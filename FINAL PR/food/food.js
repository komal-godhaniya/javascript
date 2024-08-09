document.getElementById("submit").addEventListener("click", function() {
    let meal = document.getElementById("meal").value;

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
        .then(res => res.json())
        .then(json => {
            console.log(json);
            displayData(json);

            if (json.meals) {
                let obj = {
                    strMeal: json.meals[0].strMeal,
                    strCategory: json.meals[0].strCategory,
                    strArea: json.meals[0].strArea,
                    flavors: [] 
                }
                jsonData(obj)
            } else {
                console.log("No Meals Found");
            }
        })
        .catch(error => {
            console.log('Error Fetching The Meal Data:', error);
        });
});

function displayData(json) {
    let div = document.createElement("div");
    div.setAttribute("id", "mealDetails");
    
    document.getElementById("main").innerHTML = "";
    div.style.border = "1px dashed #4F7942";
    div.style.width = "fit-content";
    div.style.borderRadius = "5%";
    div.style.padding = "5px";
    div.style.overflow = "hidden";
    div.style.marginTop = "20px";

    let img = document.createElement("img");
    img.src = `${json.meals[0].strMealThumb}`;
    img.style.borderRadius = "5%";
    img.style.height = "300px";
    img.style.width = "300px";

    let name = document.createElement("p");
    name.innerHTML = `<b class="m-color">Food:</b> ${json.meals[0].strMeal}`;
    name.style.marginTop = "10px";

    let category = document.createElement("p");
    category.innerHTML = `<b class="m-color">Category:</b> ${json.meals[0].strCategory}`;
    category.style.marginTop = "10px";

    let area = document.createElement("p");
    area.innerHTML = `<b class="m-color">Food-Area:</b> ${json.meals[0].strArea}`;
    area.style.marginTop = "10px";

    let flavor = document.createElement("p");
    flavor.setAttribute("id", "flavor");
    flavor.style.display = "none"; // Initially hide flavor display

    let vid = document.createElement("button");
    vid.setAttribute("class", "video");
    vid.innerHTML = "Watch Video";
    vid.addEventListener("click", function() {
        location.href = json.meals[0].strYoutube;
    });

    let edit = document.createElement("button");
    edit.setAttribute("class", "edit");
    edit.innerHTML = "Edit";

    edit.addEventListener("click", function() {
        edit.style.display = "none"
        flavor.style.display = "none"
        flavor.innerText = ""

        let flavorInput = document.createElement("input")
        flavorInput.setAttribute("type", "text")
        flavorInput.setAttribute("id" , "flavorInput")
        
        flavorInput.setAttribute("placeholder", "Enter Flavor")

        let updateBtn = document.createElement("button");
        updateBtn.innerText = "Update";
        updateBtn.setAttribute("id" , "updateBtn")

        updateBtn.addEventListener("click", function() {
            let newFlavor = flavorInput.value;
            flavor.innerHTML = `<b class="m-color"> Flavor: </b> ${newFlavor}`;
            flavor.style.marginTop = "10px"
            flavor.style.display = "block"
            flavorInput.style.display = "none"
            updateBtn.style.display = "none"
            edit.style.display = "block"

            updateMeal(json.meals[0], newFlavor); // Update local storage with new flavor
        })

        div.appendChild(flavorInput)
        div.appendChild(updateBtn)
    })

    div.append(img, name, category, area, flavor, vid, edit);
    document.getElementById("main").appendChild(div);
}

function jsonData(meals) {
    let foods = JSON.parse(localStorage.getItem("Food")) || [];

    let exists = foods.some(food =>
        food.strMeal === meals.strMeal &&
        food.strArea === meals.strArea
    );

    if (!exists) {
        foods.push(meals);
        localStorage.setItem("Food", JSON.stringify(foods));
    }
}

function updateMeal(meal, newFlavor) {
    let foods = JSON.parse(localStorage.getItem("Food")) || [];
    
    let index = foods.findIndex(food =>
        food.strMeal === meal.strMeal &&
        food.strArea === meal.strArea
    )
    
    if (index !== -1) {
        if (!foods[index].flavors) {
            foods[index].flavors = [];
        }
        foods[index].flavors.push(newFlavor);

        localStorage.setItem("Food", JSON.stringify(foods));
    }
}
