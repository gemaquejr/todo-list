"use strict";
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
        render(tasks) {
            const tasksList = document.getElementById("tasksList");
            while (tasksList === null || tasksList === void 0 ? void 0 : tasksList.firstChild) {
                tasksList.removeChild(tasksList.firstChild);
            }
            tasks.forEach((task) => {
                const li = document.createElement("LI");
                const textNode = document.createTextNode(JSON.stringify(task));
                li.appendChild(textNode);
                tasksList === null || tasksList === void 0 ? void 0 : tasksList.appendChild(li);
            });
        },
    };
    const TaskController = (view) => {
        var _a;
        const tasks = [todoMock, reminderMock];
        const handlerEvent = (event) => {
            event.preventDefault();
            view.render(tasks);
        };
        (_a = document.getElementById("taskForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", handlerEvent);
    };
    TaskController(taskView);
})();
