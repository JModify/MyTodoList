import { Pressable, StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/colors';

export default function TodoCreateButton({navigation}) {
    // Not yet implemented
    //const navToCreateItem = () => navigation.navigate('CreateTodo');

    // Retrieve button style based on "pressed" status.
    const getButtonStyle = ({ pressed }) =>
        pressed ? [styles.button, styles.pressed] : styles.button;

    return (
        <Pressable
            style={getButtonStyle}
            onPress={() => {
                //navToCreateItem();
            }}
        >
            <Text style={styles.buttonText}>ADD NEW TODO</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
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
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
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