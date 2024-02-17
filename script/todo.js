
function fetchTodoList() {
    return new Promise((resolve, reject) => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((data) => {
                resolve(data);
            })
            .catch((error) => reject(error));
    });
}

function displayTodoList(todos) {
    const todoList = document.getElementById("todo");
    todoList.innerHTML = "";

    todos.forEach((todo) => {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = todo.id;
        checkbox.id = `todo-${todo.id}`;

        const label = document.createElement("label");
        label.htmlFor = `todo-${todo.id}`;
        label.textContent = todo.title;

        const todoItem = document.createElement("li");
        todoItem.appendChild(checkbox);
        todoItem.appendChild(label);

        todoList.appendChild(todoItem);

        checkbox.addEventListener("change", () => {
            const checkedOnes = document.querySelectorAll("input:checked");

            if (checkedOnes.length % 5 === 0) {
                alert("Congratulations!! 5 Tasks have been Successfully Completed.");
                disableCompletedCheckboxes();
            }
        });
    });
}

function disableCompletedCheckboxes() {
    const checkboxes = document.querySelectorAll("input:checked");
    checkboxes.forEach((checkbox) => {
        checkbox.disabled = true;
    });
}

function logout() {
    window.location.href = 'login.html';
}
// Fetch and display the todo list on page load
fetchTodoList()
    .then((todos) => displayTodoList(todos))
    .catch((error) => console.error("Error fetching todo list:", error));
