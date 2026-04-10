import AsyncStorage from "@react-native-async-storage/async-storage";
import Todo from "../models/Todo";

const storage_key = 'todo-items'

export async function loadData() {
    try {
        jsonRaw = await AsyncStorage.getItem(key);
        jsonParsed = jsonValue != null ? JSON.parse(jsonRaw) : [];
        return jsonParsed.map(item => new Todo(item.title, item.description, 
            item.isDone));
    } catch(e) {
        console.log(`Failed to read todo item data using storage key "${storage_key}".`, e);
        return [];
    }
}

export async function saveData(todoItems) {
    const jsonRaw = JSON.stringify(todoItems);
    try {
        await AsyncStorage.setItem(storage_key, jsonRaw);
    } catch(e) {
        console.log('Failed to write todo item data.', e);
    }
}