function clksub(){
    
    event.preventDefault()

    let task = document.getElementById("task").value
    let priority = document.getElementById("priority").value
    let favourite = document.getElementById("favourite").value

    let new_row = "<tr><td>" + task + "</td><td>" + priority + "</td><td>" + favourite + "</td></tr>"

    document.querySelector('#create_tr tbody').innerHTML += new_row;

    document.getElementById('form').reset();
}