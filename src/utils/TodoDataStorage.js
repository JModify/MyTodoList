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
        return jsonParsed.map(item => new Todo(
            item.id, 
            item.title, 
            item.description, 
            item.done, 
            item.collapsed));
    } catch(e) {
        console.log(`Failed to read todo item data using storage key "${storage_key}".`, e);
        return [];
    }
}

export async function updateTodoItem(todoItem) {
    try {
        const currentItems = await loadTodoItems();

        // Map each item to itself UNLESS it is the target item (found by id),
        // In this case, map it to the new updated target item.
        const updatedItems = currentItems.map(item =>
            item.id === todoItem.id ? todoItem : item
        );
        await saveTodoItems(updatedItems);
        return updatedItems;
    } catch (e) {
        console.log(`Failed to add todo item using storage key "${storage_key}".`, e);
        return [];
    }
}

export async function deleteTodoItem(itemId) {
    try {
        const currentItems = await loadTodoItems();

        // Collect all other todo items which do not have the given unique id.
        const updatedItems = currentItems.filter(item => item.id !== itemId);

        await saveTodoItems(updatedItems);
        return updatedItems;
    } catch (e) {
        console.log(`Failed to clear todo item data using storage key "${storage_key}".`, e);
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