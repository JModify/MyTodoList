import { Pressable, StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/colors';
import { useState } from 'react';

// Using @Expo import since running SDK 54
import Ionicons from '@expo/vector-icons/Ionicons';
import { updateTodoItem } from '../utils/TodoDataStorage';
import TodoDoneButton from './TodoDoneButton';
import TodoDeleteButton from './TodoDeleteButton';

export default function TodoItemView({todo, deleteHandler}) {
    // Create new useState hook with initial value being the collapsed state of the todo item.
    const [collapsed, setCollapsed] = useState(todo.collapsed);
    const [done, setDone] = useState(todo.done);

    async function toggleField(fieldName, currentValue, setState) {
        // Props are supposed to be read-only so new todo object created.
        const updatedTodo = {
            ...todo,

            // Set field (done/collapsed) to inverse of passed value 
            [fieldName]: !currentValue
        }

        // Toggle state in persistent storage.
        await updateTodoItem(updatedTodo);

        // Toggle rendered state using passed setState function (setCollapsed / setDone).
        setState(value => !value);
    }

    return (
        <View style={styles.item}>
            <View style={styles.itemTitle}>
                <Text style={styles.itemTitleText}>{todo.title}</Text>
                <Pressable onPress={() => toggleField("collapsed", collapsed, setCollapsed)}>
                    <Ionicons 
                        name={collapsed ? 'caret-down-outline' : 'caret-up-outline'}
                        style={styles.itemTitleCollapsedIcon}
                    />
                </Pressable>
            </View>

            {!collapsed && (
                <View style={styles.itemDetails}>
                    <Text style={styles.itemDescription}>{"\n" + todo.description + "\n"}</Text>
                    <View style={styles.itemActionButtons}>

                        {!done && (
                            <TodoDoneButton onPress={() => toggleField("done", done, setDone)}/>
                        )}

                        <TodoDeleteButton onPress={async () => {deleteHandler(todo.id)}}/>
                    </View>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({

    // Style for component's wrapper container.
    item: {
        margin: 5,
        padding: 5,
        backgroundColor: Colors.todoItem,
        borderRadius: 5,
    },

    // Style for title wrapper container.
    itemTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    // Style for item title text.
    itemTitleText: {
        fontSize: 20,
    },

    // Collapse/uncollapse todo icon
    itemTitleCollapsedIcon: {
        color: Colors.iconBlue,
        fontSize: 23,
    },

    // Wrapper for all item details (description and action buttons)
    itemDetails: {
        flexDirection: 'column',
        flex: 1,
    },

    // Item description text.
    itemDescription: {
        fontSize: 15,
        fontStyle: 'italic',
    },

    // Wraper for "todo done" and "todo delete" icons
    itemActionButtons: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-evenly',
    },
});