let tasks = [
  { id: 1, description: 'Aprender JavaScript', completed: false },
  { id: 2, description: 'Leer un libro', completed: false },
  { id: 3, description: 'Hacer ejercicio', completed: false }
];

function updateTaskList() {
  const taskList = document.getElementById('task-list');
  taskList.innerHTML = `
      <li class="task-header">
          <span class="id">ID</span>
          <span class="description">Tarea</span>
      </li>
  `;
  tasks.forEach(task => {
      const taskItem = document.createElement('li');
      taskItem.className = task.completed ? 'completed' : '';
      taskItem.innerHTML = `
          <span class="task-item">
              <span class="id">${task.id}</span>
              <span class="description">${task.description}</span>
              <span class="actions">
                  <input type="checkbox" ${task.completed ? 'checked' : ''} onclick="toggleTask(${task.id})">
                  <span class="delete-button" onclick="deleteTask(${task.id})">&times;</span>
              </span>
          </span>
      `;
      taskList.appendChild(taskItem);
  });

  document.getElementById('total-tasks').innerText = tasks.length;
  document.getElementById('completed-tasks').innerText = tasks.filter(task => task.completed).length;
}

function addTask() {
  const newTaskInput = document.getElementById('new-task');
  const newTaskDescription = newTaskInput.value.trim();
  if (newTaskDescription !== '') {
      const newTask = {
          id: Date.now(),
          description: newTaskDescription,
          completed: false
      };
      tasks.push(newTask);
      newTaskInput.value = '';
      updateTaskList();
  }
}

function deleteTask(taskId) {
  tasks = tasks.filter(task => task.id !== taskId);
  updateTaskList();
}

function toggleTask(taskId) {
  const task = tasks.find(task => task.id === taskId);
  if (task) {
      task.completed = !task.completed;
      updateTaskList();
  }
}

// Inicializar lista de tareas
updateTaskList();
