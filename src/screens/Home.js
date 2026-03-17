import { Pressable, StyleSheet, Text, View } from 'react-native';

let ct = 0;

export default function Home({navigation}) {
    const navToCreateItem = () => navigation.navigate('CreateTodo');

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
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    mainDisplay: {
        flex: 1,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
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
        backgroundColor: "#00a2ff",
        borderRadius: 5,
        alignContent: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 8px 0 #000000a0',
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