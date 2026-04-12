import { View, Pressable, StyleSheet } from "react-native";

// Using @Expo import since running SDK 54
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TodoDoneButton({onPress}) {
    return (
        <View style={styles.wrapper}>
            <Pressable onPress={() => onPress()}>

                <Ionicons name='cloud-done' style={styles.icon}/>

            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        flex: '1',
        alignContent: 'center',
    },

    icon: {
        fontSize: 26,
        color: 'green'
    }
});