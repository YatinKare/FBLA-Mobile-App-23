import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import CalendarCard from '../components/CalendarCard';

import newArr from '../assets/new_calendar.json';

// initialize a variable to track the current week number
let weekNum: number = 1;

const CalendarNewScreen = () => {
  const [currentDate, setCurrentDate] = useState(new Date());// use the useState hook to create a state variable for the current date
  const [selectedDate, setSelectedDate] = useState(currentDate); // use the useState hook to create a state variable for the currently selected date

  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const dayInMillis = 86400000;
  const weekStart = new Date(selectedDate);
  weekStart.setDate(weekStart.getDate() - weekStart.getDay());
  const weekEnd = new Date(selectedDate);
  weekEnd.setDate(weekEnd.getDate() + (6 - weekEnd.getDay()));
  const dates = [];
  let dateIter = new Date(weekStart);

  // create an array of dates for the current week
  while (dateIter <= weekEnd) {
    dates.push(dateIter);
    dateIter = new Date(dateIter.getTime() + dayInMillis);
  }

  let mainArr = [];

// create an array of objects to represent each day in the current week, with information from a JSON file
    for(let z = 0; z < dates.length; z++){
        mainArr.push({
      date: dates[z],
      day: newArr[weekNum][z].day,
      activities: [
        newArr[weekNum][z].activities
      ],
      color: newArr[weekNum][z].color
    });
    }

    // set the selected date to the previous week
  const handlePrevWeek = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() - 7);
    setSelectedDate(newDate);
    weekNum = weekNum - 1;
  };

  // set the selected date to the next week
  const handleNextWeek = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + 7);
    setSelectedDate(newDate);
    weekNum = weekNum + 1;
  };



  return (
    <View style={styles.container}>
        <Text style={styles.title}>Calendar </Text>
        <View style={styles.lineSeparator} />
      <View style={styles.weekContainer}>
        {/* display the days of the week */}
        {daysOfWeek.map((day, index) => (
          <Text key={index} style={styles.weekDay}>
            {day}
          </Text>
        ))}
      </View>
      <View style={styles.dateContainer}>
        {/* display the dates for the current week */}
        {dates.map((date, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.dateButton,
              date.getDate() === currentDate.getDate() &&
                date.getMonth() === currentDate.getMonth() &&
                date.getFullYear() === currentDate.getFullYear() &&
                styles.selectedDate,
            ]}
            onPress={() => setSelectedDate(date)}
          >
            <Text style={styles.dateText}>{date.getDate()}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Arrows to change the week and its events */}
      <View style={styles.arrowContainer}>
        <TouchableOpacity
          style={styles.arrowButton}
          onPress={handlePrevWeek}
        >
          <Text style={styles.arrowText}>{'<'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.arrowButton}
          onPress={handleNextWeek}
        >
          <Text style={styles.arrowText}>{'>'}</Text>
        </TouchableOpacity>
      </View>


      <ScrollView Verticle>
        <View style={styles.week}>
          {/* display the day of the week  */}
          {mainArr.map((day) => (
            <View style={styles.dayContainer} key={day.date.toLocaleDateString('en-US', { weekday: 'long' })}>
              <Text style={styles.dayText}>{day.date.toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })

              }</Text>
              {/* display the events for the day of the week using the CalendarCard component */}
              {day.activities.map((info, index) => (
                <View key={index}>
                  {
                    info.map((obj, index) => (
                      <View key={index}>
                      <CalendarCard bannerColor={day.color} title={obj.title} time={obj.timing}/>
                      </View>
                    ))}

                </View>
              ))}
            </View>
          ))}
        </View>
          </ScrollView>
    </View>
  );
};

// Define Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#26bf84'
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
  weekContainer: {
    flexDirection: 'row',
  },
  weekDay: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 19,
  },
  week: {
    width: '90%'
  },
  dateContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dateButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    margin: 5,
  },
  selectedDate: {
    backgroundColor: '#FFF',
    borderWidth: 2,
    borderColor: '#0A0',
  },
  dateText: {
    fontSize: 16,
  },
  arrowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  arrowButton: {
    width: 30,
    height: 30,
    backgroundColor: '#ddd',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowButtonText: {
    fontSize: 20,
    color: '#fff',
  },
  calendarCard: {
    width: '90%',
        alignSelf: 'center',
        justifyContent: 'center',
  },
});

export default CalendarNewScreen;