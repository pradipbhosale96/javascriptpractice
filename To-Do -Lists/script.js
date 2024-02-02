
document.addEventListener("DOMContentLoaded", function () {
    const inputBox = document.getElementById("inputBox");
    const addBtn = document.getElementById("addBtn");
    const todoList = document.getElementById("todoList");
    let editTodo = null;
//function to add to do....
    const addTodo = () => {
        const inputText = inputBox.value.trim();
        if (inputText.length <= 0) {
            alert("You must write something in your To DO!");
            return false;
        }
        if (addBtn.value === "Edit") {
            editTodo.target.previousElementSibling.innerHTML = inputText;
            addBtn.value = "Add";
            inputBox.value = "";
        }
        else {


            //Creating P Tag
            const li = document.createElement("li");
            const p = document.createElement("p");
            p.innerHTML = inputText;
            li.appendChild(p);

            //Createing Edit button
            const editBtn = document.createElement("button");
            editBtn.innerText = "Edit";
            editBtn.classList.add("btn", "editbtn");
            li.appendChild(editBtn);


            //Createing Delete button
            const deleteBtn = document.createElement("button");
            deleteBtn.innerText = "Remove";
            deleteBtn.classList.add("btn", "deletebtn");
            li.appendChild(deleteBtn);




            todoList.appendChild(li);
            inputBox.value = "";
        }

    }
    //function to update to do.....
    const updateTodo = (e) => {
        if (e.target.innerHTML === "Remove") {
            todoList.removeChild(e.target.parentElement);
        }
        if (e.target.innerHTML === "Edit") {
            inputBox.value = e.target.previousElementSibling.innerHTML;
            inputBox.focus();
            addBtn.value = "Edit";
            editTodo = e;
        }

    }

    addBtn.addEventListener('click', addTodo);
    todoList.addEventListener('click', updateTodo);
});
