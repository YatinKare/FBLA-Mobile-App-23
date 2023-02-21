import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import PhotoCard from '../components/PhotoCard';

import imageSource1 from '../assets/Photo1.webp';
import imageSource2 from '../assets/photo2.jpg';


const PhotosScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>Photos Screen</Text>
            <PhotoCard photo={imageSource1} title='Photo1' description='smtg smtgsmtg smtgsmtg smtasdfsadfijhiuhgsmtg smtgsmtg smtgsmtg smtgsmtg smtgsmtg smtgsmtg smtgsmtg smtgsmtg smtg' 
            style={styles.photoCard}/>
            <PhotoCard photo={imageSource2} title='Photo2' description='https://www.pexels.com/photo/two-girls-doing-school-works-1720186/ ' 
            style={styles.photoCard}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    photoCard: {
        width: '90%',
        alignSelf: 'center',
    },
})

export default PhotosScreen;