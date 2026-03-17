import { useLayoutEffect } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/colors';

let ct = 0;
export default function Home({navigation}) {

    // useLayoutEffect called after React has updated UI but just before
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
    
    // Not yet implemented
    const navToCreateItem = () => navigation.navigate('CreateTodo');

    // Retrieve button style based on "pressed" status.
    const getButtonStyle = ({pressed}) =>
        pressed ? [styles.pressed, styles.button] : [styles.button];

    return (
        <View style={styles.container}>
            <View style={styles.mainDisplay}>

            </View>
            <View style={styles.footer}>
                <Pressable
                    style={getButtonStyle}
                    onPress = {() => {
                    ct++;
                    navToCreateItem;  
                    }}
                >
                <Text style={styles.buttonText}>ADD NEW TODO</Text>
                </Pressable>               
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

    header: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        backgroundColor: 'white',
        height: 110,
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    // Main display containing all Todo items. 
    mainDisplay: {
        flex: 1,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
    },
    footer: {
        borderTopWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 25,
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: Colors.createTodoButton,
        borderRadius: 5,
        alignContent: 'center',
        justifyContent: 'center',
        boxShadow: `0 4px 8px 0 ${Colors.shadowBlack}`,
        flex: 1,
    },
    pressed: {
      opacity: 0.5,
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    }
});