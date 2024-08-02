document.getElementById("submit").addEventListener("click", function() 
{
    let nation = document.getElementById("nation").value

    fetch("https://data.covid19india.org/v4/min/data.min.json")
    .then(res => res.json())
    .then(json => 
    {
        console.clear()
        console.log(json)
        displayData(json , nation)
    })
    .catch(error => 
    {
        console.log('Error Fetching The Weather Data:', error)
    })
})


function displayData(json,nation) 
{
    let div = document.createElement("div")
    document.getElementById("data").innerHTML = ""

    let tested = document.createElement("p")
    tested.innerHTML = `<b>Tested : </b> ${json[nation].total.tested}`
    tested.style.marginTop = "30px"

    let confirmed = document.createElement("p")
    confirmed.innerHTML = `<b>Confirmed : </b> ${json[nation].total.confirmed}`
    confirmed.style.marginTop = "30px"

    let deceased = document.createElement("p")
    deceased.innerHTML = `<b>Deceased : </b> ${json[nation].total.deceased}`
    deceased.style.marginTop = "30px"

    let recovered = document.createElement("p")
    recovered.innerHTML = `<b>Recovered : </b> ${json[nation].total.recovered}`
    recovered.style.marginTop = "30px"


    div.append(tested,confirmed,deceased,recovered)
    document.getElementById("data").append(div)
}