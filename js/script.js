{
    const tasks = [
    ];

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });
        render();
    };

    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    };

    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    };

    const bindEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove")

        removeButtons.forEach((removeButton, taskIndex) => {  // Kto?
            removeButton.addEventListener("click", () => { // Co?
                tasks.splice(taskIndex, 1); // Jak?
                render();
            });
        });

        const toggleDoneButtons = document.querySelectorAll(".js-done")

        toggleDoneButtons.forEach((toggleDoneButton, taskIndex) => {  // Kto?
            toggleDoneButton.addEventListener("click", () => { // Co?
                toggleTaskDone(taskIndex);
                render();
            });
        });
    };

    // Wstawianie treści do HTMLa
    const render = () => {
        let htmlString = "";
        // Dodawane elementy to kolejne elementy listy
        for (const task of tasks) {
            htmlString += `
            <li class = "list__element">
            <button class="js-done list__button list__button--done">Zrobione</button>
            <span class="list__taskContent${task.done ? " list__taskContent--done" : ""}">${task.content}</span>
            <button class="js-remove list__button list__button--remove">Usuń</button>
            </li>
            `;
        };

        document.querySelector(".js-tasks").innerHTML = htmlString;

        bindEvents();
    };

    // Wypełnianie formularza 
    const onFormSubmit = (event) => {
        //Blokada automatycznego wysłania formularza 
        event.preventDefault();
        const newTaskContent = document.querySelector(".js-newTask").value.trim();
        console.log(newTaskContent)
        if (newTaskContent === "") {

            return;
        };

        addNewTask(newTaskContent);
    }


    // Funkcja init
    const init = () => {
        render();

        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);
    };

    // Inicjowanie 
    init();
}