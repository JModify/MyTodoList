class Todo {
    constructor(id, title, description, done = false, collapsed = true) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.done = done;
        this.collapsed = collapsed;
    }
}

export default Todo;