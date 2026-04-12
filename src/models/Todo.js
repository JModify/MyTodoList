class Todo {
    constructor(id, title, description, isDone = false, collapsed = true) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.isDone = isDone;
        this.collapsed = collapsed;
    }

    toggleDone() {
        this.isDone = !this.isDone;
    }
}

export default Todo;