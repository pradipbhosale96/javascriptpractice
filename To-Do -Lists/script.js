
document.addEventListener("DOMContentLoaded", function () {
    const inputBox = document.getElementById("inputBox");
    const addBtn = document.getElementById("addBtn");
    const todoList = document.getElementById("todoList");


    const addTodo = () => {
       const inputText=inputBox.value.trim();
       if(inputText.length <=0){
        alert("You must write something in your To DO!")
       }
       const li=document.createElement("li");
       const p=document.createElement("p");
       p.innerHTML=inputText;
       li.appendChild(p);
       todoList.appendChild(li);
       inputBox.value="";

    }
    addBtn.addEventListener('click', addTodo);
});
