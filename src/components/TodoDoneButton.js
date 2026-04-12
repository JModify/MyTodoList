import { Pressable, StyleSheet } from "react-native";

// Using @Expo import since running SDK 54
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TodoDoneButton({onPress}) {

    // Retrieve button style based on "pressed" status.
    const getButtonStyle = ({ pressed }) =>
        pressed ? [styles.icon, styles.iconPressed] : styles.icon;

    return (
        <Pressable style={getButtonStyle} onPress={() => onPress()}>
            <Ionicons name='cloud-done' style={styles.icon}/>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        alignContent: 'center',
        justifyContent: 'center'
    },

    icon: {
        fontSize: 26,
        color: 'green'
    },

    iconPressed: {
        opacity: 0.5,
    }
});