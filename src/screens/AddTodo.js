import {StyleSheet, View, Text, TextInput, Keyboard, Pressable} from 'react-native';

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
    },

    title: {
        padding: 5,
        margin: 8,
    },

    titleLabel: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 8,
        paddingBottom: 8,
    },

    titleField: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'lightgray',
        padding: 8,
    },

    description: {
        padding: 5,
        margin: 8,
    },

    descriptionLabel: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 8,
        paddingBottom: 8,
    },

    descriptionField: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'lightgray',
        padding: 8,
    },
});