import {StyleSheet, View, Text} from 'react-native';

export default function AddTodo({navigation}) {

    return (
        <View style={styles.container}>
            <View style={styles.mainDisplay}>

            </View>
            <View style={styles.footer}>

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

    // Main display containing all todo items. 
    mainDisplay: {
        margin: 10, 
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        flex: 1,
        flexDirection: 'column',
    },

    // Footer display containing Todo creation button.
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});