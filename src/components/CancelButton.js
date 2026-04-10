import { Pressable, StyleSheet, Text } from 'react-native';
import Colors from '../constants/colors';
 
// Using @Expo import since running SDK 54
import Ionicons from '@expo/vector-icons/Ionicons';

export default function CancelButton({onPress}) {

    // Retrieve button style based on "pressed" status.
    const getButtonStyle = ({ pressed }) =>
        pressed ? [styles.button, styles.pressed] : styles.button;

    return (
        <Pressable
            style={getButtonStyle}
            onPress={() => {
                // Navigate back to home page.
                //navigation.goBack();
                onPress();
            }}
        >
            <Text style={styles.buttonText}><Ionicons name='backspace' style={styles.iconStyle}/> Cancel</Text>
        </Pressable>
    );

}

const styles = StyleSheet.create({
    // Style for new todo cancel button.
    button: {
        padding: 10,
        marginBottom: 50,
        marginTop: 10,
        marginLeft: 20,
        marginRight: 50,
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

    // Style changing opacity for todo cancel button.
    pressed: {
      opacity: 0.5,
    },

    // Style for text contained within todo cancel button.
    buttonText: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },

    // Cancel icon style.
    iconStyle: {
        color: Colors.iconBlue,
        fontSize: 20,
    }
});