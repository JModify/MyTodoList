class Todo {
    constructor(id, title, description, isDone = false, isDetailHidden = false) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.isDone = isDone;
        this.isDetailHidden = isDetailHidden;
    }

    toggleDone() {
        this.isDone = !this.isDone;
    }
}

export default Todo;