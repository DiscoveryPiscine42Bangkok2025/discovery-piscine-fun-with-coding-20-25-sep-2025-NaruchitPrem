const ftList = document.getElementById('ft_list');
const newButton = document.getElementById('new-button');

function loadTodos() {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        const parts = cookie.trim().split('=');
        if (parts[0] === 'todos') {
            const todos = JSON.parse(parts[1]);
            for (let i = todos.length - 1; i >= 0; i--) {
                createTodoElement(todos[i]);
            }
            break;
        }
    }
}

function saveTodos() {
    const todoItems = [];
    document.querySelectorAll('.todo-item').forEach(item => {
        todoItems.push(item.textContent);
    });
    document.cookie = `todos=${JSON.stringify(todoItems)}; max-age=31536000; path=/`;
}

function createTodoElement(text) {
    const newTodo = document.createElement('div');
    newTodo.className = 'todo-item';
    newTodo.textContent = text;

    newTodo.addEventListener('click', function() {
        if (confirm('Do you want to remove this TO DO?')) {
            this.remove();
            saveTodos();
        }
    });

    ftList.prepend(newTodo);
}

newButton.addEventListener('click', function() {
    const todoText = prompt('Enter a new TO DO:');

    if (todoText && todoText.trim() !== '') {
        createTodoElement(todoText.trim());
        saveTodos();
    }
});

window.onload = loadTodos;