import { Pressable, StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/colors';
import { useState } from 'react';

// Using @Expo import since running SDK 54
import Ionicons from '@expo/vector-icons/Ionicons';
import { updateTodoItem } from '../utils/TodoDataStorage';

export default function TodoItemView({todo}) {
    // Create new useState hook with initial value being the collapsed state of the todo item.
    const [collapsed, setCollapsed] = useState(todo.collapsed);

    return (
        <View style={styles.item}>
            <View style={styles.itemTitle}>
                <Text style={styles.itemTitleText}>{todo.title}</Text>
                <Pressable onPress={async () => {
                    // Update the collapsed state in AsyncStorage.
                    // Props are supposed to be read-only so new todo object created.
                    const updatedTodo = {
                        id: todo.id,
                        title: todo.title,
                        description: todo.description,
                        isDone: todo.isDone,
                        collapsed: !collapsed,
                    }

                    await updateTodoItem(updatedTodo);

                    // Toggle collapsed state
                    setCollapsed(collapsed => !collapsed)
                }}>
                    <Ionicons 
                        name={collapsed ? 'caret-down-outline' : 'caret-up-outline'}
                        style={styles.itemTitleCollapsedIcon}
                    />
                </Pressable>
            </View>

            {!collapsed && (
                <View style={styles.itemDetails}>
                    <Text style={styles.itemDescription}>{"\n" + todo.description}</Text>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({

    // Style for todo item view wrapper.
    item: {
        margin: 5,
        padding: 5,
        backgroundColor: Colors.todoItem,
        borderRadius: 5,
    },

    // Style for title text
    itemTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    itemTitleText: {
        fontSize: 20,
    },

    itemTitleCollapsedIcon: {
        color: Colors.iconBlue,
        fontSize: 23,
    },

    // Style for details view
    itemDetails: {
        flexDirection: 'column',
        flex: 1,
    },

    itemDescription: {
        fontSize: 15,
        fontStyle: 'italic',
    }


});