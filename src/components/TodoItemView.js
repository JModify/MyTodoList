import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/colors';

export default function TodoItem({todo}) {
    return (
        <View style={styles.item}>
            <Text style={styles.itemText}>{todo}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    // Style for todo item.
    item: {
        margin: 5,
        padding: 5,
        backgroundColor: Colors.todoItem,
        borderRadius: 5,
    },

    // Style for text contained within todo item.
    itemText: {
        fontSize: 20,
    }
});