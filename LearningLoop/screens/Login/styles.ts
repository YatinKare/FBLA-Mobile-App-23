import { StyleSheet } from 'react-native';

import { Dimensions } from 'react-native';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: "white",
        marginBottom: 10,
        justifyContent: 'center'
    },
    /*inputView: {
        width: "80%",
        backgroundColor: "#3AB4BA",
        borderRadius: 25,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 20
    },*/
    inputText: {
        width: screenWidth * 0.8,
        height: 50,
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5,
        color: "white"
    },
    space: {
        height: 600,
    },
    button: {
        width: screenWidth * 0.8,
        height: 50,
        padding: 10,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue',
        borderRadius: 5,
    },
    description: {
        fontSize: 20,
        fontWeight: '',
        color: "white",
        marginBottom: 60,
        justifyContent: 'center',
        fontStyle: 'italic'
    }
    
})

export default styles;