import { useLayoutEffect } from 'react';
import {StyleSheet, View } from 'react-native';
import TodoItem from '../components/TodoItem';
import TodoCreateButton from '../components/TodoCreateButton';

export default function Home({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <TodoItem text={"Buy Eggs"}/>
                <TodoItem text={"Buy Apples"}/>
                <TodoItem text={"Buy Milk"}/>
                <TodoItem text={"Buy Olive Oil"}/>
                <TodoItem text={"Buy Oranges"}/>
            </View>
            <View style={styles.footer}>
                <TodoCreateButton navigation={navigation}/>           
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    // Outer wrapping container which flexes to take as much available
    // space as possible in the specified direction (column).  
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    // body display containing all todo items. 
    body: {
        margin: 10, 
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        flex: 1,
        flexDirection: 'column',
    },

    // Footer display containing Todo creation button.
    footer: {
        borderTopWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});