document.getElementById("sub").addEventListener("click", function() 
{
    let city_name = document.getElementById("nation").value
    let url = `https://api.weatherapi.com/v1/current.json?key=a63d7350a40848589b191537243007&q=${city_name}`

    fetch(url)
    .then(res => res.json())
    .then(json => 
    {
        console.clear()
        console.log(json)
        displayData(json)
    })
    .catch(error => 
    {
        console.log('Error Fetching The Weather Data:', error)
    })
})

function displayData(json) 
{
    let div = document.createElement("div")
    document.getElementById("main").innerHTML = ""
    
    // let task = document.createElement("div")
    // task.setAttribute("id" , "task")

    let city = document.createElement("p")
    city.innerHTML = `<b>City : </b> ${json.location.name}`
    city.style.marginTop = "10px"

    let state = document.createElement("p");
    state.innerHTML = `<b>Region : </b> ${json.location.region}`
    state.style.marginTop = "10px"

    let country = document.createElement("p")
    country.innerHTML = `<b>Country : </b> ${json.location.country}`
    country.style.marginTop = "10px"

    let temp_c = document.createElement("p")
    temp_c.innerHTML = `<b>Temperature (C) : </b> ${json.current.temp_c}°C`
    temp_c.style.marginTop = "10px"

    let temp_f = document.createElement("p")
    temp_f.innerHTML = `<b>Temperature (F) : </b> ${json.current.temp_f}°F`
    temp_f.style.marginTop = "10px"

    let text = document.createElement("p")
    text.innerHTML = `<b>Text : </b> ${json.current.condition.text}`
    text.style.marginTop = "10px"

    let icon = document.createElement("img")
    // icon.setAttribute("src", json.current.condition.icon)
    icon.src = `${json.current.condition.icon}`
    icon.style.marginTop = "10px"

    div.append(city, state, country, temp_c, temp_f, text, icon)
    document.getElementById("main").append(div)
}