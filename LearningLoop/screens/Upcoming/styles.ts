import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 40,
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
    description: {
        marginTop: 10,
        textAlign: 'center'
    },
    date: {
      fontSize: 14,
      fontStyle: "italic",
    },
    eventContainer: {
        flexDirection: 'row',
        padding: 20,
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        alignItems: 'center',
      },
    icon: {
        marginRight: 20,
        color: "white"
      },
    header: {
        fontSize: 18,
        fontWeight: "bold",
      },
    borderLine: {
        marginVertical: 20,
        height: 2,
        width: '100%',
        borderBottomColor: 'white',
        borderBottomWidth: 2,
      },
      pageDescription: {
        marginTop: 10,
        textAlign: 'center',
        fontSize: 16
      },
  });

export default styles;