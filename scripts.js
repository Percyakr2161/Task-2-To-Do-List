document.getElementById('todo-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var input = document.getElementById('todo-input');
    var task = input.value.trim();
    
    if (task !== '') {
        addTask(task);
        input.value = '';
    }
});

function addTask(taskText) {
    var list = document.getElementById('todo-list');
    var listItem = document.createElement('li');
    listItem.innerHTML = '<span>' + taskText + '</span><button class="delete-btn">Delete</button>';
    list.appendChild(listItem);
    
    listItem.querySelector('.delete-btn').addEventListener('click', function() {
        listItem.remove();
    });
}
