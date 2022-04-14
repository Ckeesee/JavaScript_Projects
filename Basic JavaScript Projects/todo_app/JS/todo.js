/* gets task from input*/
function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

/* adds the inputed tast to teh get todos fuction array*/
function add() {
    var task = document.getElementById('task').value;

    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();

    return false;
}

/* keeps the tasks permanetly displayed on the screen*/
function show(){
    var todos = get_todos();

    var html = '<ul>';
    for (var i=0; i<todos.length;i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    };
    html += '</ul>';
    document.getElementById('todos').innerHTML = html;

    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i<buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    }

}

/*removing a todo*/
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id,1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();

    return false;
}

document.getElementById('add').addEventListener('click', add);
show();
