import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, RefreshControl } from 'react-native';
import AbsenceCard from '../components/AbsenceCard';

import data from '../assets/absence';
import PhotoCard from '../components/PhotoCard';

const AbsenceScreen = (props) => {
    const date = new Date();
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
          setRefreshing(false);
        }, 2000);
      }, []);

    return (
        <View style={styles.container}>
             <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
            <Text style={styles.title}>Absence for {date.getMonth() + "/" + date.getDay() + "/" + date.getFullYear()}</Text>
            <View style={styles.lineSeparator} />
            <View style={styles.absenceCards}>
                {data.map((info, index) => (
                    <View key={index}>
                        <AbsenceCard name={info.name} reason={info.reason} signature={info.signature} style={styles.absenceCard}/>
                    </View>
                ))}
            </View>
            </ScrollView>
        </View>
    );
}

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