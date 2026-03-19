import { useLayoutEffect } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/colors';
import TodoItem from '../components/TodoItem';
import TodoCreateButton from '../components/TodoCreateButton';

let ct = 0;
export default function Home({navigation}) {

    // Function useLayoutEffect called after React has updated UI but just before
    // screen is painted to end user.
    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'My Todo List',
            headerStyle: styles.header,
            headerTintColor: 'black',
            headerTitleStyle: styles.headerText,
        })

    // Effect only runs if navigation reference changes.
    }, [navigation]);

    return (
        <View style={styles.container}>
            <View style={styles.mainDisplay}>
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
        flexDirection: 'column',
        backgroundColor: 'white',
    },

    // Header display containing application title.
    header: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        backgroundColor: 'white',
        height: 110,
    },

    // Header text / application title formatting.
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
    },

    // Main display containing all todo items. 
    mainDisplay: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
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