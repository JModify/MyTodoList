import {StyleSheet, View } from 'react-native';
import TodoCreateButton from '../components/TodoCreateButton';
import { useState, useEffect } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import TodoItemView from '../components/TodoItemView';
import { clearTodoItems, loadTodoItems } from '../utils/TodoDataStorage';

export default function Home({navigation}) {
  const [todoData, setTodoData] = useState([]);
  
  useEffect( () => {
    const firstLoad = async () => {
      const data = await loadTodoItems();
      setTodoData(data);
    };
    // Used for debugging.
    //clearTodoItems();
    firstLoad();
  }, [])

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <FlatList
                    data={todoData}
                    renderItem={({item}) => <TodoItemView todo={item}/>}
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