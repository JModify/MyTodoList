import AsyncStorage from "@react-native-async-storage/async-storage";
import Todo from "../models/Todo";

const storage_key = 'todo-items'

export async function addTodoItem(todoItem) {
    try {
        const currentItems = await loadTodoItems();
        const updatedItems = [...currentItems, todoItem];
        await saveTodoItems(updatedItems);
        return updatedItems;
    } catch (e) {
        console.log(`Failed to add todo item using storage key "${storage_key}".`, e);
        return [];
    }
}

export async function loadTodoItems() {
    try {
        const jsonRaw = await AsyncStorage.getItem(storage_key);
        const jsonParsed = jsonRaw != null ? JSON.parse(jsonRaw) : [];
        return jsonParsed.map(item => new Todo(item.id, item.title, item.description, 
            item.isDone));
    } catch(e) {
        console.log(`Failed to read todo item data using storage key "${storage_key}".`, e);
        return [];
    }
}

export async function saveTodoItems(todoItems) {
    const jsonRaw = JSON.stringify(todoItems);
    try {
        await AsyncStorage.setItem(storage_key, jsonRaw);
    } catch(e) {
        console.log('Failed to write todo item data.', e);
    }
}

export async function clearTodoItems() {
    try {
        await AsyncStorage.removeItem(storage_key);
    } catch (e) {
        console.log(`Failed to clear todo item data using storage key "${storage_key}".`, e);
    }
}