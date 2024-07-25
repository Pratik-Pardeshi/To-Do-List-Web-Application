document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task');
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    // Function to create a new task element with enhanced 3D effect
    function createTaskElement(taskText) {
        const li = document.createElement('li');
        li.classList.add('task-item');
        
        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove');
        removeButton.addEventListener('click', () => {
            li.classList.add('fade-out');
            setTimeout(() => taskList.removeChild(li), 300);
        });

        li.appendChild(taskContent);
        li.appendChild(removeButton);

        // Enhanced 3D effect on hover
        li.addEventListener('mouseover', () => {
            li.style.transform = 'rotateX(10deg) rotateY(10deg) scale(1.05)';
        });

        li.addEventListener('mouseout', () => {
            li.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
        });

        return li;
    }

    // Function to handle adding a new task
    function addTask() {
        const taskText = newTaskInput.value.trim();
        if (taskText) {
            const taskElement = createTaskElement(taskText);
            taskList.appendChild(taskElement);
            newTaskInput.value = '';
            newTaskInput.focus();
        }
    }

    // Event listeners
    addButton.addEventListener('click', addTask);

    newTaskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
