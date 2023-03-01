import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

import imageSource1 from '../assets/dog.jpg';
import imageSource2 from '../assets/favicon.png';
import UpcomingEventsCard from '../components/UpcomingEventsCard';


const UpcomingEventsScreen = (props) => {
    const date = new Date();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Upcoming Events {date.getMonth() + "/" + date.getDay() + "/" + date.getFullYear()}</Text>
            <View style={styles.lineSeparator} />
            <View style={styles.upcomingEventsCard}>
                <UpcomingEventsCard photo={imageSource1} title='Test' description='smtg smtgsmtg smtgsmtg smtasdfsadfijhiuhgsmtg smtgsmtg smtgsmtg smtgsmtg smtgsmtg smtgsmtg smtgsmtg smtgsmtg smtg'
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
    upcomingEventsCard: {
        backgroundColor: 'rgb(192, 192, 192, 0.7)',
    },
})

export default UpcomingEventsScreen;