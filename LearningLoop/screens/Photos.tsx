import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import PhotoCard from '../components/PhotoCard';

import imageSource1 from '../assets/Photo1.webp';
import imageSource2 from '../assets/photo2.jpg';


const PhotosScreen = (props) => {
    const date = new Date();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Photos {date.getMonth() + "/" + date.getDay() + "/" + date.getFullYear()}</Text>
            <View style={styles.lineSeparator} />
            <View style={styles.photoCards}>
                <PhotoCard photo={imageSource1} title='Photo1' description='smtg smtgsmtg smtgsmtg smtasdfsadfijhiuhgsmtg smtgsmtg smtgsmtg smtgsmtg smtgsmtg smtgsmtg smtgsmtg smtgsmtg smtg'
                    style={styles.photoCard} />
                <PhotoCard photo={imageSource2} title='Photo2' description='https://www.pexels.com/photo/two-girls-doing-school-works-1720186/ '
                    style={styles.photoCard} />
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
    }
})

export default PhotosScreen;