var addButton = document.getElementById('add');
var delButton = document.getElementById('del');
var inputTask = document.getElementById('new-task');
var inputData = document.getElementById('new-data');
var tasks = document.getElementById('tasks');

function createNewElement(task, data) {
    var listItem = document.createElement('li');
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.setAttribute("onclick", "end(this)");
    var label = document.createElement('label');
    label.innerText = task;
    var input = document.createElement('input');
    input.type = "text";
    var label1 = document.createElement('label');
    label1.innerText = data;
    var input1 = document.createElement('input');
    input1.type = "text";
    var deleteButton = document.createElement('button');
    deleteButton.className = "material-icons delete";
    deleteButton.innerHTML = "<i class='material-icons'>delete</i>";
    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(input);
    listItem.appendChild(label1);
    listItem.appendChild(input1);
    listItem.appendChild(deleteButton);

    return listItem;
}

function addTask() {
    if (inputTask.value && inputData.value) {
        var listItem = createNewElement(inputTask.value, inputData.value);
        tasks.appendChild(listItem);
        bindTaskEvents(listItem);
        inputTask.value = "";
        inputData.value = "";
    }
}
addButton.onclick = addTask;

function deleteTask () {
    var listItem = this.parentNode;
    var ul = listItem.parentNode;
    ul.removeChild(listItem);
}

function bindTaskEvents(listItem) {
    var deleteButton = listItem.querySelector('button.delete');
    deleteButton.onclick = deleteTask;

}

function Delete() {
        var sp = document.getElementById("tasks");
        sp.innerHTML = "";
}
delButton.onclick = Delete;

tasks.addEventListener("click", boxChecked);
function boxChecked(event) {
    const element = event.target;
    if(element.type === "checkbox") {
        element.nextSibling.style.textDecoration = "line-through";
    }
    else {
        element.nextSibling.style.textDecoration = "none";
    }
}