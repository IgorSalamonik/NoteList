{
    const tasks = [
        {
            content: "nagrać lekcję",
            done: false,
        },
        {
            content: "zjeść pierogi",
            done: true,
        },
    ];
    // Wstawianie treści do HTMLa
    const render = () => {
        let htmlString = "";
        // Dodawane elementy to kolejne elementy listy
        for (const task of tasks) {
            htmlString += `
            <li${task.done ? " style=\"text-decoration: line-through\"" : ""}>
            ${task.content}
            </li>
            `;
        };

        document.querySelector(".js-tasks").innerHTML = htmlString;

    };

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });

        render();


    }
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