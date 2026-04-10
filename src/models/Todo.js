class Todo {
    constructor(title, description, isDone = false) {
        this.title = title;
        this.description = description;
        this.isDone = isDone;
    }

    toggleDone() {
        this.isDone = !this.isDone;
    }
}

export default Todo;