const Todolist = JSON.parse(localStorage.getItem("Todolistsaver")) || [
  { name: "", date: "" },
];
ViewToDoList();
function RunToDoList() {
  const inputName = document.querySelector(".input-name");
  const name = inputName.value;
  const inputDate = document.querySelector(".input-date");
  const date = inputDate.value;
  Todolist.push({ name: name, date: date });
  console.log(Todolist);
  inputName.value = "";
  ViewToDoList();
  SaveToDoStorage();
}
function ViewToDoList() {
  let ToDoListHtml = "";
  for (i = 1; i < Todolist.length; i++) {
    const ToDoObject = Todolist[i];
    const name = ToDoObject.name;
    const date = ToDoObject.date;
    const html = `
    <div class="to-do-list">
        <p class="name-class">${name}</p>
        <p class="date-class"> ${date}</p>
        <button
        onclick="
        Todolist.splice(${i},1);
        SaveToDoStorage();
        ViewToDoList();
        "
        class="delete-button"
        >Delete</button>
        </div>

        `;
    ToDoListHtml += html;
  }
  document.querySelector(".js-to-do").innerHTML = ToDoListHtml;
}
function SaveToDoStorage() {
  localStorage.setItem("Todolistsaver", JSON.stringify(Todolist));
}
function calculationWhenEnter(event) {
  if (event.key === "Enter") {
    addtodo2();
  }
}
