document.querySelector('#push').onclick = function () {
    if (document.querySelector('#newtask input').value.length == 0){
        alert("Please enter a task")
    }
    else {
        let tasks = document.querySelector('#tasks')
        let newTask = document.createElement("div")
        newTask.innerHTML = `
    <div class="task">
    <input id="taskname" disabled value="${document.querySelector('#newtask input').value}">
    <button class="edit"
    <p>Edit</p>
    </button>
 <button class ='delete'>
    <i class="far fa-trash-alt"></i>
    </button>
    </div>
    `;
        let input = newTask.firstElementChild.firstElementChild
        let deleteButton = newTask.firstElementChild.lastElementChild
        let editButton = newTask.firstElementChild.querySelector(".edit")
        deleteButton.onclick = function (event) {
            newTask.remove()
        }
        editButton.onclick = function (params) {
            input.disabled = !input.disabled;
        }
        tasks.appendChild(newTask)
        document.querySelector("#newtask input").value = "";
    }
}