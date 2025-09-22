$(document).ready(function() {
    const ftList = $('#ft_list');
    const newButton = $('#new-button');

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
        $('.todo-item').each(function() {
            todoItems.push($(this).text());
        });
        document.cookie = `todos=${JSON.stringify(todoItems)}; max-age=31536000; path=/`;
    }

    function createTodoElement(text) {
        const newTodo = $('<div></div>')
            .addClass('todo-item')
            .text(text)
            .on('click', function() {
                if (confirm('Do you want to remove this TO DO?')) {
                    $(this).remove(); // ใช้ .remove() ของ jQuery
                    saveTodos();
                }
            });

        ftList.prepend(newTodo);
    }

    newButton.on('click', function() {
        const todoText = prompt('Enter a new TO DO:');
        if (todoText && todoText.trim() !== '') {
            createTodoElement(todoText.trim());
            saveTodos();
        }
    });

    loadTodos();
});