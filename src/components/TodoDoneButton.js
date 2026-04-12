import { View, Pressable, StyleSheet } from "react-native";

// Using @Expo import since running SDK 54
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TodoDoneButton({onPress}) {
    return (
        <Pressable style={styles.wrapper} onPress={() => onPress()}>
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
    }
});