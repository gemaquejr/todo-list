"use strict";
(() => {
    let NotificationPlatform;
    (function (NotificationPlatform) {
        NotificationPlatform["SMS"] = "SMS";
        NotificationPlatform["EMAIL"] = "EMAIL";
        NotificationPlatform["PUSH_NOTIFICATION"] = "PUSH_NOTIFICATION";
    })(NotificationPlatform || (NotificationPlatform = {}));
    const UUID = () => {
        return Math.random().toString(32).substring(2, 9);
    };
    const DateUtils = {
        tomorrow() {
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            return tomorrow;
        },
        today() {
            return new Date();
        },
        formatDate(date) {
            return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
        }
    };
    class Reminder {
        constructor(description, date, notifications) {
            this.id = UUID();
            this.dateCreated = DateUtils.today();
            this.dateUpdated = DateUtils.today();
            this.description = "";
            this.date = DateUtils.tomorrow();
            this.notifications = [NotificationPlatform.EMAIL];
            this.description = description;
            this.date = date;
            this.notifications = notifications;
        }
        render() {
            return `
            ---> Reminder <---
            description: ${this.description}
            date: ${DateUtils.formatDate(this.date)}
            platform: ${this.notifications.join(",")}
            `;
        }
    }
    class Todo {
        constructor(description) {
            this.id = UUID();
            this.dateCreated = DateUtils.today();
            this.dateUpdated = DateUtils.today();
            this.description = "";
            this.done = false;
            this.description = description;
        }
        render() {
            return `
            ---> TODO <---
            description: ${this.description}
            done: ${this.done}
            `;
        }
    }
    const todoMock = new Todo("Todo criado com a classe");
    const reminderMock = new Reminder("Reminder criado com a classe", new Date(), [NotificationPlatform.EMAIL]);
    const taskView = {
        render(tasks) {
            const tasksList = document.getElementById("tasksList");
            while (tasksList === null || tasksList === void 0 ? void 0 : tasksList.firstChild) {
                tasksList.removeChild(tasksList.firstChild);
            }
            tasks.forEach((task) => {
                const li = document.createElement("LI");
                const textNode = document.createTextNode(task.render());
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
