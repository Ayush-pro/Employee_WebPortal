document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('employee-form');
    const employeeList = document.getElementById('employee-list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const position = document.getElementById('position').value;
        const department = document.getElementById('department').value;

        // Create new list item
        const li = document.createElement('li');
        li.textContent = `Name: ${name}, Position: ${position}, Department: ${department}`;

        // Add delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';
        deleteButton.addEventListener('click', () => {
            li.remove();
        });

        li.appendChild(deleteButton);
        employeeList.appendChild(li);

        // Clear form
        form.reset();
    });
});