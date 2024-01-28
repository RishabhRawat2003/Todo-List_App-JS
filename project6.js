let inputBox = document.querySelector("#inputBox")
let addBtn = document.querySelector("#Btn")
let allTask = document.querySelector(".allTasks")



let dataArray = localStorage.getItem('localData') ? JSON.parse(localStorage.getItem('localData')) : [];
dataArray.forEach(addTodo);

function addTodo(todo) {
    var newLi = document.createElement("li")
    newLi.innerText = todo;

    var closeBtn = document.createElement("i")
    closeBtn.setAttribute("class", "fa fa-close")
    newLi.appendChild(closeBtn);

    allTask.appendChild(newLi)


    closeBtn.addEventListener("click", function (e) {
        e.preventDefault()
        e.target.parentElement.remove()
        let boss = dataArray.indexOf(e.target.parentElement.innerText)
        dataArray.splice(boss, 1)
        localStorage.setItem('localData', JSON.stringify(dataArray));
    })
    newLi.addEventListener("click", function (e) {
        e.preventDefault()
        newLi.classList.toggle("litext")
    })

}

addBtn.addEventListener("click", function (e) {
    e.preventDefault()
    if (inputBox.value === "") {
        alert("Please Enter Some Content !!")
    }
    else if (inputBox.value.length >= 33) {
        alert("Content Should Be Under 33 Words")
        inputBox.value = ""
    }
    else {
        addTodo(inputBox.value);
        dataArray.push(inputBox.value);
        localStorage.setItem('localData', JSON.stringify(dataArray));
        inputBox.value = ""
    }
})


inputBox.addEventListener("keyup",function(e){
    if(e.key ==='Enter'){
        if (inputBox.value === "") {
            alert("Please Enter Some Content !!")
        }
        else if (inputBox.value.length >= 33) {
            alert("Content Should Be Under 33 Words")
            inputBox.value = ""
        }
        else {
            addTodo(inputBox.value);
            dataArray.push(inputBox.value);
            localStorage.setItem('localData', JSON.stringify(dataArray));
            inputBox.value = ""
        }
    }
})

