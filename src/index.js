document.addEventListener('DOMContentLoaded', () => {
  const taskForm = document.getElementById('create-task-form'); // Select form element via ID
  
  // Adds an event listener for form submit event
  taskForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevents default form submission

    // Using event gather data into an object
    const taskDescription = event.target["new-task-description"].value.trim();

    // Calls the buildToDo function to pass task description
    buildToDo(taskDescription);
    
    // After submitting, the input is reset
    taskForm.reset();
  });
});

// Function for new to-do item
function buildToDo(task) {
  const taskList = document.getElementById('tasks');
  const li = document.createElement('li');
  
  li.textContent = task.trim();
  taskList.appendChild(li);
}
