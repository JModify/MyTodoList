import {StyleSheet, View, Text, TextInput, Keyboard, Pressable} from 'react-native';
import SaveButton from '../components/SaveButton';
import CancelButton from '../components/CancelButton';

export default function AddTodo({navigation}) {

    const titlePlaceholder = 'My new todo title';
    const descriptionPlaceholder = 'This is the description of my new todo.\nIt supports multi-line input.\n...'

    return (
        // Ensures tapping anywhere on screen closes/dismisses keyboard
        <Pressable style={styles.container} onPress={Keyboard.dismiss}>
            <View style={styles.body}>
                <View style={styles.title}>
                    <Text style={styles.titleLabel}>Title</Text>
                    <TextInput placeholder={titlePlaceholder}
                        style={styles.titleField}

                        // Replaces return character with "done" character.
                        returnKeyType='done'

                        // Tapping "done" character closes/dismisses keyboard.
                        onSubmitEditing={Keyboard.dismiss}/>
                </View>

                <View style={styles.description}>
                    <Text style={styles.descriptionLabel}>Description</Text>
                    <TextInput placeholder={descriptionPlaceholder}
                        style={styles.descriptionField}
                        multiline={true}

                        // Avoids android centering text vertically
                        textAlignVertical='top'
                        />
                </View>
            </View>
            <View style={styles.footer}>
                <CancelButton navigation={navigation}/>
                <SaveButton navigation={navigation}/>
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