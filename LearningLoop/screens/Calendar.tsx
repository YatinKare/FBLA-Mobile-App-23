/*import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import CalendarCard from '../components/CalendarCard';

function CalendarScreen(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Calendar</Text>
            <View style={styles.lineSeparator} />
            <View style={styles.calendarCards}>
                <CalendarCard style={styles.calendarCard}/>
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
    calendarCard: {
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
    calendarCards: {
        backgroundColor: 'rgb(192, 192, 192, 0.7)',
    }

})


export default CalendarScreen;*/
/*
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DAYS_IN_WEEK = 7;

const CalendarScreen = () => {
  const currentDate = new Date();
  const currentDayOfWeek = currentDate.getDay();
  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const dates = [];
  for (let i = 0; i < DAYS_IN_WEEK; i++) {
    const date = new Date(currentDate);
    const diff = i - currentDayOfWeek;
    date.setDate(date.getDate() + diff);
    dates.push(date.getDate());
  }

  const dayOfWeekElements = daysOfWeek.map((dayOfWeek, index) => (
    <View style={styles.dayOfWeekContainer} key={dayOfWeek}>
      <Text style={styles.dayOfWeekText}>{dayOfWeek}</Text>
      <Text style={[styles.dateText, dates[index] === currentDate.getDate() && styles.currentDateText]}>{dates[index]}</Text>
    </View>
  ));

  return (
    <View style={styles.container}>
      <View style={styles.daysOfWeekContainer}>{dayOfWeekElements}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  daysOfWeekContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dayOfWeekContainer: {
    alignItems: 'center',
  },
  dayOfWeekText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
  },
  dateText: {
    fontSize: 20,
    color: '#555',
    marginTop: 8,
  },
  currentDateText: {
    color: '#fff',
    backgroundColor: '#0080ff',
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
});

export default CalendarScreen;
*/
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import CalendarCard from '../components/CalendarCard';
import data from '../assets/calendar.json';
let myMap = new Map(Object.entries(data));
console.log(myMap.get("Sunday")?.title);

const CalendarScreen = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(currentDate);

  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const dayInMillis = 86400000;
  const weekStart = new Date(selectedDate);
  weekStart.setDate(weekStart.getDate() - weekStart.getDay());
  const weekEnd = new Date(selectedDate);
  weekEnd.setDate(weekEnd.getDate() + (6 - weekEnd.getDay()));
  const dates = [];
  let dateIter = new Date(weekStart);
  while (dateIter <= weekEnd) {
    dates.push(dateIter);
    dateIter = new Date(dateIter.getTime() + dayInMillis);
  }

  const handlePrevWeek = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() - 7);
    setSelectedDate(newDate);
  };

  const handleNextWeek = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + 7);
    setSelectedDate(newDate);
  };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Calendar </Text>
        <View style={styles.lineSeparator} />
      <View style={styles.weekContainer}>
        {daysOfWeek.map((day, index) => (
          <Text key={index} style={styles.weekDay}>
            {day}
          </Text>
        ))}
      </View>
      <View style={styles.dateContainer}>
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
      <View style={styles.lineSeparator} />

      <ScrollView horizontal>
              <View style={styles.week}>
                  {dates.map((day) => (
                      <View style={styles.dayContainer} key={day.toLocaleDateString('en-US', { weekday: 'long' })}>
                          <Text style={styles.dayText}>{day.toLocaleDateString('en-US', {
                              weekday: 'long',
                              month: 'long',
                              day: 'numeric',
                              year: 'numeric',
                          })}</Text>
                          {data.map((day) => {
                            console.log(day);
                          })}
                          <CalendarCard bannerColor="blue" title="Field Trip to the Zoo!" time="10:00 AM - 2:30 PM" />
                          <CalendarCard bannerColor="green" title="Team Meeting" time="3:00 PM - 4:30 PM" />
                      </View>
                  ))}
              </View>
          </ScrollView>


      {/*<View style={styles.calendarCard}>
        <CalendarCard title='dATE WITH ASAH' time='SOMEDAY IN THE FUTURE' bannerColor='blue'/>
        </View>*/}
    </View>
  );
};

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

export default CalendarScreen;