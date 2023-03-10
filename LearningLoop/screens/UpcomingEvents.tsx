// Import necessary components and assets
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import imageSource1 from '../assets/dog.jpg';
import imageSource2 from '../assets/favicon.png';
import UpcomingEventsCard from '../components/UpcomingEventsCard';
import imageSource3 from '../assets/bus.jpg';
// Define UpcomingEventsScreen component
const UpcomingEventsScreen = (props) => {
    // Get current date
    const date = new Date();
    // Return screen layout
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Upcoming Events {/*date.getMonth() + "/" + date.getDay() + "/" + date.getFullYear()*/}3/10/2023</Text>
            <View style={styles.lineSeparator} />
            <View style={styles.upcomingEventsCard}>
                {/* Pass in props to UpcomingEventsCard component */}
                <UpcomingEventsCard photo={imageSource3}
                    title='Feild Trip Drop Off'
                    description='We will be having our field trip to the zoo. Check the calendar for the drop off time.'
                    style={styles.photoCard} />
            </View>

        </View>
    );
}

// Define component styles
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