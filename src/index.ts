(() => {
    const todoMock = {
        description: "todo",
        done: false,
    };

    const reminderMock = {
        description: "reminder",
        date: "04.01.2023",
    };

    const taskView = {
        render(tasks: Array<Object>) {
            const tasksList = document.getElementById("tasksList")
            while (tasksList?.firstChild) {
                tasksList.removeChild(tasksList.firstChild);
            }

            tasks.forEach((task) => {
                const li = document.createElement("LI");
                const textNode = document.createTextNode(JSON.stringify(task));
                li.appendChild(textNode);
                tasksList?.appendChild(li);
            });
        },
    };

    const TaskController = (view: typeof taskView) => {
        const tasks: Array<Object> = [todoMock, reminderMock];

        const handlerEvent = (event: Event) => {
            event.preventDefault();
            view.render(tasks);
        };

        document.getElementById("taskForm")?.addEventListener("submit", handlerEvent);
    };

    TaskController(taskView);
})();