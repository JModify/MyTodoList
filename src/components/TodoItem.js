import { Pressable, StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/colors';

export default function TodoItem({text}) {
    return (
        <View style={styles.item}>
            <Text style={styles.itemText}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 5,
        marginRight: 5,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: Colors.todoItem,
        borderRadius: 5,
    },
    itemText: {
        fontSize: 20,
    }
});