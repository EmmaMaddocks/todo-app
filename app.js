

            let todos = [];

            render();

            function addTodo() {
                const textbox = document.getElementById('todo-title');
                const title = textbox.value;
                const id = '' + new Date().getTime();
                todos.push({
                    title: title,
                    id: id
                });

                render();
                saveTodos();
            }

            todos.forEach(function (todoTitle) {
                // for each todo, create new div
                const element = document.createElement('div');
                        // set the inner text of the div to the to do item
            element.innerText = todoTitle;
                //append the div to the documents body
            document.body.appendChild(element); 
            });


            function deleteTodo() {
                const deleteButton = event.target;
                const idToDelete = deleteButton.id;


                todos = todos.filter(function (todo) {
                    // if id of this to do matches idToDelete, return false
                    //for everything else, return true

                    if (todo.id === idToDelete) {
                        return false;
                     } else {
                            return true;
                        }
                    });

                    render ();
                    saveTodos();
                }

                function saveTodos () {
                    localStorage.setItem('todos', JSON.stringify(todos))
                }
            

function render(){ 
    document.getElementById('todolist').innerHTML = '';


    todos.forEach(function (todo) {
            const element = document.createElement('div');

            element.innerText = todo.title;
            element.id = 'todoitem';

            const deleteButton = document.createElement('button');
            deleteButton.innerText = '✔';
            deleteButton.style = 'margin-left: 12px;';
            deleteButton.onclick = deleteTodo;
            deleteButton.id = todo.id;

            element.appendChild(deleteButton);

            const todoList = document.getElementById('todolist');
            todolist.appendChild(element); 
            });

}
