const InputBox = document.getElementById("input-box");
const ListBox = document.getElementById("list-box");

function addtasks() {
    if(InputBox.value === ''){
        alert("Please add a task")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = InputBox.value;
        ListBox.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    InputBox.value = "";
}

ListBox.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        SaveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        SaveData();
    }
}, false);

function SaveData(){
    localStorage.setItem("data", ListBox.innerHTML);
}

function ShowTask(){
    ListBox.innerHTML = localStorage.getItem("data");
}

ShowTask();