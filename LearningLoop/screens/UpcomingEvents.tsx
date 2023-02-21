import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

import imageSource1 from '../assets/dog.jpg';
import imageSource2 from '../assets/favicon.png';
import UpcomingEventsCard from '../components/UpcomingEventsCard';


const UpcomingEventsScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>UpcomingEvents Screen</Text>
            <UpcomingEventsCard photo={imageSource1} title='Test' description='smtg smtgsmtg smtgsmtg smtasdfsadfijhiuhgsmtg smtgsmtg smtgsmtg smtgsmtg smtgsmtg smtgsmtg smtgsmtg smtgsmtg smtg' 
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
        flex: 1,
    },
})

export default UpcomingEventsScreen;