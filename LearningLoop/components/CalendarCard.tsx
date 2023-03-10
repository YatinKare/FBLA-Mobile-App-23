// Importing necessary components and types from React and React Native
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Defining the interface for the props that the component is expected to receive
interface CalendarCardProps {
  title: string;
  time: string;
  bannerColor: string;
}

// Defining the functional component 'CalendarCard' using React.FC type and destructuring the props received
const CalendarCard: React.FC<CalendarCardProps> = ({ title, time, bannerColor }) => {
  // Returning the JSX for the calendar card
  return (
    <View style={styles.cardContainer}>
      <View style={[styles.banner, { backgroundColor: bannerColor }]} />
      <View style={styles.cardText}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardTime}>{time}</Text>
      </View>
    </View>
  );
};

// Defining the styles for the calendar card using StyleSheet.create()
const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center',
  },
  banner: {
    width: 8,
    height: '100%',
    marginRight: 8,
  },
  cardText: {
    flex: 1,
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  cardTime: {
    fontSize: 14,
    color: '#D3D3D3',
  },
});

export default CalendarCard;