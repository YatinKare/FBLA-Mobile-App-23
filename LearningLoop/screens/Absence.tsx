import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, RefreshControl } from 'react-native';
import AbsenceCard from '../components/AbsenceCard';

import data from '../assets/absence'; // import absence data from file
import PhotoCard from '../components/PhotoCard';

const AbsenceScreen = (props) => {
    const date = new Date();
    const [refreshing, setRefreshing] = useState(false); // state for RefreshControl

    const onRefresh = useCallback(() => { // function to handle RefreshControl
        setRefreshing(true); // set refreshing state to true
        setTimeout(() => {
          setRefreshing(false); // set refreshing state to false after 2 seconds
        }, 2000);
      }, []);

    return (
        <View style={styles.container}>
             <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} /> // RefreshControl component
        }>
            <Text style={styles.title}>Absence for {date.getMonth() + "/" + date.getDay() + "/" + date.getFullYear()}</Text>
            <View style={styles.lineSeparator} /> // horizontal line separator
            <View style={styles.absenceCards}>
                {data.map((info, index) => ( // mapping through absence data and rendering AbsenceCard components
                    <View key={index}>
                        <AbsenceCard name={info.name} reason={info.reason} signature={info.signature} style={styles.absenceCard}/>
                    </View>
                ))}
            </View>
            </ScrollView>
        </View>
    );
}

// Display Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#26bf84',
        alignItems: 'center',
        
    },
    absenceCard: {
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
    absenceCards: {
        backgroundColor: 'rgb(192, 192, 192, 0.7)',
    }
})

export default AbsenceScreen;