class Todo {
    constructor(id, title, description, isDone = false) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.isDone = isDone;
    }

    toggleDone() {
        this.isDone = !this.isDone;
    }
}

export default Todo;