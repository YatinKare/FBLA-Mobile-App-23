// Importing necessary components from react-native library
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Defining the props for AbsenceCard component
interface AbsenceCardProps {
  name: string;
  reason: string;
  signature: string;
}

// Creating a functional component named AbsenceCard which accepts props and returns JSX
const AbsenceCard: React.FC<AbsenceCardProps> = ({ name, reason, signature }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.reason}>{reason}</Text>
        <Text style={styles.signature}>{signature}</Text>
      </View>
    </View>
  );
}

// Creating styles object using StyleSheet
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    borderRadius: 10,
    marginHorizontal: 16,
    marginVertical: 8,
    overflow: 'hidden',
    flexDirection: 'row',
    width: '90%',
    alignSelf: "center",
  },
  textContainer: {
    flex: 1,
    padding: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'white',
  },
  reason: {
    fontSize: 16,
    color: "white",
  },
  signature: {
    fontSize: 16,
    color: "white",
  }
});

// Exporting AbsenceCard component as default
export default AbsenceCard;