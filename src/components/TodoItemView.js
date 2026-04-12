import { Pressable, StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/colors';
import { useState } from 'react';

// Using @Expo import since running SDK 54
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TodoItemView({todo}) {
    const [collapsed, setCollapsed] = useState(true);

    return (
        <View style={styles.item}>
            <View style={styles.itemTitle}>
                <Text style={styles.itemTitleText}>{todo.title}</Text>
                <Pressable onPress={() => {
                    // Toggle collapsed state
                    setCollapsed(collapsed => !collapsed)
                }}>
                    <Ionicons 
                        name={collapsed ? 'caret-down-outline' : 'caret-up-outline'}
                        style={styles.itemTitleCollapsedIcon}
                    />
                </Pressable>
            </View>

            {collapsed && (
                <View style={styles.itemDetails}>
                    <Text style={styles.itemDescription}>{"\n" + todo.description}</Text>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({

    // Style for todo item view wrapper.
    item: {
        margin: 5,
        padding: 5,
        backgroundColor: Colors.todoItem,
        borderRadius: 5,
    },

    // Style for title text
    itemTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    itemTitleText: {
        fontSize: 20,
    },

    itemTitleCollapsedIcon: {
        color: Colors.iconBlue,
        fontSize: 23,
    },

    // Style for details view
    itemDetails: {
        flexDirection: 'column',
        flex: 1,
    },

    itemDescription: {
        fontSize: 15
    }


});