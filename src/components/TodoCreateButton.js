import { Pressable, StyleSheet, Text } from 'react-native';
import Colors from '../constants/colors';

// Using @Expo import since running SDK 54
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TodoCreateButton({onPress}) {

    // Retrieve button style based on "pressed" status.
    const getButtonStyle = ({ pressed }) =>
        pressed ? [styles.button, styles.pressed] : styles.button;

    return (
        <Pressable
            style={getButtonStyle}
            onPress={() => {

                // Navigate to todo creation screen.
                onPress()
            }}
        >
            <Text style={styles.buttonText}><Ionicons name='add-circle' style={styles.iconStyle}/> ADD NEW TODO</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    // Style for todo creation button.
    button: {
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 60,
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: Colors.deepBlue,
        borderRadius: 5,
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 4,
        flex: 1,
    },

    // Style changing opacity for todo creation button with 
    // pressed status being true.
    pressed: {
      opacity: 0.5,
    },

    // Style for text contained within todo creation button.
    buttonText: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },

    // Icon style for add todo icon.
    iconStyle: {
        color: Colors.iconBlue,
        fontSize: 20,
    }
});