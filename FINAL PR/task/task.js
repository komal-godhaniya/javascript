
    document.getElementById("submit").addEventListener("click", function(event) {
        event.preventDefault()
    
        let task = document.getElementById("task").value
        let pr = document.getElementById("priority").value
        let duration = document.getElementById("duration").value
    
        let taskObj = {
            task: task,
            priority: pr,
            duration: duration
        }
    
        let tasks = JSON.parse(localStorage.getItem("tasks")) || []
    
        tasks.push(taskObj)
    
        localStorage.setItem("tasks", JSON.stringify(tasks))
    
        addTaskToTable(taskObj)
    
        document.getElementById("task_form").reset()
    })
    
    function addTaskToTable(taskObj) {
        let tr = document.createElement("tr")
    
        let td1 = document.createElement("td")
        td1.innerHTML = taskObj.task
    
        let td2 = document.createElement("td")
        td2.innerHTML = taskObj.priority
    
        let td3 = document.createElement("td")
        td3.innerHTML = taskObj.duration
    
        let td4 = document.createElement("td")
    
        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete"
        deleteBtn.setAttribute("class", "delete-btn")
    
        deleteBtn.addEventListener("click", function() {
            tr.remove()
    
            removefromls(taskObj)
        })
    
        let editBtn = document.createElement("button")
        editBtn.innerText = "Edit"
        editBtn.style.marginLeft = "15px"
        editBtn.setAttribute("class", "edit-btn")
    
        editBtn.addEventListener("click", function() {
            document.getElementById("task").value = taskObj.task;
            document.getElementById("priority").value = taskObj.priority;
            document.getElementById("duration").value = taskObj.duration;
    
            document.getElementById("update").style.display = "inline"
            document.getElementById("submit").style.display = "none"
    
            document.getElementById("update").addEventListener("click", function() {

                updateinls(taskObj, {
                    task: document.getElementById("task").value,
                    priority: document.getElementById("priority").value,
                    duration: document.getElementById("duration").value
                })
    
                td1.innerHTML = document.getElementById("task").value
                td2.innerHTML = document.getElementById("priority").value
                td3.innerHTML = document.getElementById("duration").value
    
                document.getElementById("update").style.display = "none"
                document.getElementById("submit").style.display = "inline"
    
                document.getElementById("task_form").reset()
            })
        })
    
        td4.append(deleteBtn)
        td4.append(editBtn)
    
        tr.append(td1, td2, td3, td4)
        document.querySelector("tbody").append(tr)
    }
    
    function removefromls(taskObj) {
        let tasks = JSON.parse(localStorage.getItem("tasks")) || []
    
        let index = tasks.findIndex(function(task) {
            return task.task === taskObj.task && 
                   task.priority === taskObj.priority && 
                   task.duration === taskObj.duration
        });
    
        if (index !== -1) {
            tasks.splice(index, 1)

            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
    }
    
    function updateinls(oldTaskObj, newTaskObj) {
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    
        let index = tasks.findIndex(function(task) {
            return task.task === oldTaskObj.task && 
                   task.priority === oldTaskObj.priority && 
                   task.duration === oldTaskObj.duration
        });
    
        if (index !== -1) {
            tasks[index] = newTaskObj
    
            localStorage.setItem("tasks", JSON.stringify(tasks))
        }
    }
    
    window.onload = function() {
        let tasks = JSON.parse(localStorage.getItem("tasks")) || []
    
        tasks.forEach(function(taskObj) {
            addTaskToTable(taskObj)
        })
    };
    