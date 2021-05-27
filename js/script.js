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
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;
    };

    // Funkcja 
    const init = () => {
        render();

        const form = document.querySelector(".js-form");
        form.addEventListener("submit", (event) => {
            event.preventDefault();

        });
    };

    // Inicjowanie 
    init()
}