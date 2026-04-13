import {Alert, StyleSheet, View } from 'react-native';
import TodoCreateButton from '../components/TodoCreateButton';
import { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import TodoItemView from '../components/TodoItemView';
import {loadTodoItems, deleteTodoItem, updateTodoItem} from '../utils/TodoDataStorage';


export default function Home({navigation}) {
    const [todoData, setTodoData] = useState([]);
  
    useEffect( () => {
        const loadData = async () => {
            const data = await loadTodoItems();
            setTodoData(data);
        };

        loadData();

        // Adds focus listener which loads data each time Home.js screen is in focus
        // Call back function is returned 'removeFocusListener' to be used in cleanup by RN later.
        const removeFocusListener = navigation.addListener('focus', loadData);

        // Cleanup for useEffect() function.
        return removeFocusListener;
    }, [navigation]);

    // Function which is passed down to TodoItemView to update screen on deletion.
    // Required since focus listener does not pick up the change since user is on same screen.
    async function todoDeleteHandler(itemId) {

        // Attempts to delete from file, otherwise displays popup with error.
        // Avoids screen and data file being out of sync.
        try {
            await deleteTodoItem(itemId);
        } catch {
            Alert.alert(
                "Error",
                "Failed to delete item from data file. Contact app developer!"
            );
            return;
        }

        setTodoData(currentTodoData => currentTodoData.filter(item => item.id !== itemId));
    }

    // Function is passed down to TodoItemView to ensure consistency
    // with Todo state changes on render and in data storage.
    async function todoUpdateHandler(item) {
        try {
            await updateTodoItem(item);
        } catch {
            Alert.alert(
                "Error",
                "Failed to update todo item in data file. Contact app developer!"
            );
            return;
        }

        setTodoData(currentTodoData => currentTodoData.map(i => i.id === item.id ? item : i));
    }

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <FlatList
                    data={todoData}
                    renderItem={({item}) => <TodoItemView todo={item} 
                                                updateHandler={todoUpdateHandler}
                                                deleteHandler={todoDeleteHandler}
                                            />}
                    keyExtractor={(item) => item.id}
                />
            </View>
            <View style={styles.footer}>
                <TodoCreateButton onPress={() => {
                    // Navigte to AddTodo screen on press
                    navigation.navigate('AddTodo');
                }}/>           
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