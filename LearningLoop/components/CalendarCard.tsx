import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface CalendarCardProps {
  title: string;
  time: string;
  bannerColor: string;
}

const CalendarCard: React.FC<CalendarCardProps> = ({ title, time, bannerColor }) => {
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