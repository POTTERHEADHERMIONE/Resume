document.addEventListener("DOMContentLoaded", function () {
    const projectNameInput = document.getElementById("project-name");
    const projectDescriptionInput = document.getElementById("project-description");
    const addProjectButton = document.getElementById("add-project-btn");
    const projectList = document.getElementById("project-list-ul");
    const showFormButton = document.getElementById("show-add-project-form-btn");
    const projectForm = document.querySelector(".project-form");
    const goBackButton = document.getElementById("go-back-btn");

    // Function to add a new project to the list
    function addProject() {
        // Your existing addProject function code here
    }

    // Event listener for the "Add Project" button
    addProjectButton.addEventListener("click", addProject);

    // Event listener for the "Show Add Project Form" button
    showFormButton.addEventListener("click", function () {
        projectForm.style.display = "block"; // Show the form
    });

    // Event listener for the "Go Back" button
    goBackButton.addEventListener("click", function () {
        projectForm.style.display = "none"; // Hide the form
    });
});
