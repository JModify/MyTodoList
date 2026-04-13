import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/colors';
import { useState } from 'react';

// Using @Expo import since running SDK 54
import Ionicons from '@expo/vector-icons/Ionicons';
import TodoDoneButton from './TodoDoneButton';
import TodoDeleteButton from './TodoDeleteButton';

export default function TodoItemView({todo, updateHandler, deleteHandler}) {

    // Toggles collapsed / done fields within todo models.
    // Uses passed update handler to do so.
    async function toggleField(fieldName) {
        // Props are supposed to be read-only so new todo object created.
        const updatedTodo = {
            ...todo,

            // Set field (done/collapsed) to it's inversed value.
            [fieldName]: !todo[fieldName]
        }

        // Wait for update handler to update value.
        await updateHandler(updatedTodo);
    }

    return (
        <View style={styles.item}>
            <View style={styles.itemTitle}>
                <Text style={styles.itemTitleText}>{todo.title}</Text>
                <Pressable onPress={() => toggleField("collapsed")}>
                    <Ionicons 
                        name={todo.collapsed ? 'caret-down-outline' : 'caret-up-outline'}
                        style={styles.itemTitleCollapsedIcon}
                    />
                </Pressable>
            </View>

            {!todo.collapsed && (
                <View style={styles.itemDetails}>
                    <Text style={styles.itemDescription}>{todo.description}</Text>
                    <View style={styles.itemActionButtons}>

                        {!todo.done && (
                            <TodoDoneButton onPress={async () => {toggleField("done")}}/>
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
        // Avoids inputs which are too long overflowing
        //flexShrink: 1,
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
        marginVertical: 10,
    },

    // Wraper for "todo done" and "todo delete" icons
    itemActionButtons: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-evenly',
    },
});