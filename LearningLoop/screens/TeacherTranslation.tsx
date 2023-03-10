// Importing required libraries and components
import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, RefreshControl } from 'react-native';

// Defining a functional component named TeacherTranslationScreen
const TeacherTranslationScreen = (props) => {
  // Getting current date
  const date = new Date();
  // Setting initial refreshing state to false
  const [refreshing, setRefreshing] = useState(false);

  // Function to handle refresh
  const onRefresh = useCallback(() => {
    // Setting refreshing state to true
    setRefreshing(true);
    // Simulating refreshing for 2 seconds
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  // Returning JSX
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        <Text style={styles.title}>Messages for {date.getMonth() + "/" + date.getDay() + "/" + date.getFullYear()}</Text>
        <View style={styles.lineSeparator} />
        <View style={styles.absenceCards}>
          <View style={styles.containerTwo}>
            <View style={styles.textContainer}>
              <Text style={styles.recipeint}>Yatin</Text>
              <Text style={styles.message}>Hola Jennifer. ¿Cómo estás?</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

// Defining styles for the component
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
  },


  containerTwo: {
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
  recipeint: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'white',
  },
  message: {
    fontSize: 16,
    color: "white",
  },



});
export default TeacherTranslationScreen;