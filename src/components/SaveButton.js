import { Pressable, StyleSheet, Text } from 'react-native';
import Colors from '../constants/colors';

// Using @Expo import since running SDK 54
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SaveButton({onPress}) {
    // Not yet implemented
    const saveContent = undefined

    // Retrieve button style based on "pressed" status.
    const getButtonStyle = ({ pressed }) =>
        pressed ? [styles.button, styles.pressed] : styles.button;

    return (
        <Pressable
            style={getButtonStyle}
            onPress={() => {
                // Not yet implemented
                onPress()
            }}
        >
            <Text style={styles.buttonText}><Ionicons name='save' style={styles.iconStyle}/> Save</Text>
        </Pressable>
    );

}

const styles = StyleSheet.create({
    // Style for new todo save button
    button: {
        padding: 10,
        marginBottom: 50,
        marginTop: 10,
        marginLeft: 50,
        marginRight: 20,
        backgroundColor: Colors.deepBlue,
        borderRadius: 5,
        justifyContent: 'center',

        // Shadow properties.
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 4,
    },

    // Style changing opacity for todo save button when pressed.
    pressed: {
      opacity: 0.5,
    },

    // Style for text contained within todo save button.
    buttonText: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },

    // Save icon style.
    iconStyle: {
        color: Colors.iconBlue,
        fontSize: 20,
    }
});