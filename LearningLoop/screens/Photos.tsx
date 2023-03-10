// Importing necessary components from react native library
import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

// Importing custom PhotoCard component
import PhotoCard from '../components/PhotoCard';

// Importing photo data from assets
import data from '../assets/photos.tsx';

// Functional component for Photos screen
const PhotosScreen = (props) => {
    // Getting current date
    const date = new Date();
// Returning JSX for Photos screen
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Photos {/*date.getMonth() + "/" + date.getDay() + "/" + date.getFullYear()*/}</Text>
            <View style={styles.lineSeparator} />
            <View style={styles.photoCards}>
                {data.map((info, index) => (
                    <View key={index}>
                        <PhotoCard photo={info.photo} title={info.title} description={info.description} style={styles.photoCard}/>
                        <View style={styles.separate}/>
                    </View>
                ))}
            </View>
        </View>
    );
}

// Stylesheet for Photos screen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#26bf84',
        alignItems: 'center',
        
    },
    photoCard: {
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 32,
        marginBottom: 10,
        marginTop: 10
    },
    lineSeparator: {
        width: '90%',
        height: 1,
        backgroundColor: '#000',
        marginBottom: 20,
    },
    photoCards: {
        backgroundColor: 'rgb(192, 192, 192, 0.7)',
    },
})

export default PhotosScreen;