import {StyleSheet, View, Text, TextInput, Keyboard, Pressable} from 'react-native';
import SaveButton from '../components/SaveButton';
import CancelButton from '../components/CancelButton';

import {useState} from 'react';
import Todo from '../models/Todo';
import { addTodoItem } from '../utils/TodoDataStorage';

export default function AddTodo({navigation}) {

    const titlePlaceholder = 'My new todo title';
    const descriptionPlaceholder = 'This is the description of my new todo.\nIt supports multi-line input.\n...'

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState(``);

    return (
        // Ensures tapping anywhere on screen closes/dismisses keyboard
        <Pressable style={styles.container} onPress={Keyboard.dismiss}>
            <View style={styles.body}>
                <View style={styles.title}>
                    <Text style={styles.titleLabel}>Title</Text>
                    <TextInput 
                        // Placeholder text for empty title TextInput field.
                        placeholder={titlePlaceholder}

                        // Sets the style for the title field.
                        style={styles.titleField}

                        // Replaces return character with "done" character.
                        returnKeyType='done'

                        // Tapping "done" character closes/dismisses keyboard.
                        onSubmitEditing={Keyboard.dismiss}

                        // Currently stored title text.
                        value={title}

                        // Use setTitle callback function to update title text variable.
                        onChangeText={setTitle}
                    />
                </View>

                <View style={styles.description}>
                    <Text style={styles.descriptionLabel}>Description</Text>
                    <TextInput
                        // Placeholder text for empty description TextInput field.
                        placeholder={descriptionPlaceholder}

                        // Sets the style for the description field.
                        style={styles.descriptionField}

                        // Ensures multiline is permitted for field.
                        multiline={true}

                        // Currently stored description text.
                        value={description}

                        // Use setDescription callback function to update description text variable.
                        onChangeText={setDescription}
                        />
                </View>
            </View>
            <View style={styles.footer}>
                <CancelButton onPress={() => navigation.goBack()}/>
                <SaveButton onPress={async () => {
                    // Create new Todo model using provided fields.
                    // isDone set to false by default since item has just been created.
                    // Item ID set to current time in milliseconds
                    const todoItem = new Todo(Date.now().toString(), title, description, false);

                    // Await todo item being added asynchronously before navigating to home screen.
                    await addTodoItem(todoItem);

                    // Navigate back to home page.
                    navigation.goBack()
                }}/>
            </View>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    // Container wrapping both body and footer
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    // Main display containing neccessary todo creation fields.
    body: {
        margin: 10, 
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        flex: 1,
        flexDirection: 'column',
    },

    // Footer display containing save and cancel button.
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 50,
    },

    // View which wraps title label and text field.
    title: {
        padding: 5,
        margin: 8,
    },

    // Title label style.
    titleLabel: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 8,
        paddingBottom: 8,
    },

    // Title field style.
    titleField: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'lightgray',
        padding: 8,
    },

    // View which wraps description label and text field.
    description: {
        padding: 5,
        margin: 8,
    },

    // Description label style.
    descriptionLabel: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 8,
        paddingBottom: 8,
    },

    // Description field style.
    descriptionField: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'lightgray',
        padding: 8,
    },
});