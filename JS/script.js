document.addEventListener('DOMContentLoaded', function () {
    // Recuperar as tarefas do Local Storage ao carregar a página
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Função para renderizar a lista de tarefas
    function renderTasks() {
        const taskList = document.querySelector('.app__section-task-list');
        taskList.innerHTML = '';

        tasks.forEach(function (task, index) {
            const listItem = document.createElement('li');
            listItem.textContent = task.description;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Excluir';
            deleteButton.addEventListener('click', function () {
                // Remover a tarefa da lista
                tasks.splice(index, 1);
                // Atualizar o Local Storage
                localStorage.setItem('tasks', JSON.stringify(tasks));
                // Renderizar novamente a lista
                renderTasks();
            });

            listItem.appendChild(deleteButton);
            taskList.appendChild(listItem);
        });
    }

    // Adicionar nova tarefa
    const addButton = document.querySelector('.app__button--add-task');
    addButton.addEventListener('click', function () {
        const newTask = prompt('Digite a nova tarefa:');
        if (newTask) {
            tasks.push({ description: newTask });
            localStorage.setItem('tasks', JSON.stringify(tasks));
            renderTasks();
        }
    });

    // Limpar todas as tarefas
    const clearAllButton = document.getElementById('btn-remover-todas');
    clearAllButton.addEventListener('click', function () {
        tasks = [];
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
    });

    // Limpar tarefas concluídas
    const clearCompletedButton = document.getElementById('btn-remover-concluidas');
    clearCompletedButton.addEventListener('click', function () {
        tasks = tasks.filter(task => !task.completed);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
    });

    // Inicializar a renderização das tarefas
    renderTasks();
});