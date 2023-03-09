import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import PhotoCard from '../components/PhotoCard';

import data from '../assets/photos.tsx';

const PhotosScreen = (props) => {
    const date = new Date();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Photos {date.getMonth() + "/" + date.getDay() + "/" + date.getFullYear()}</Text>
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