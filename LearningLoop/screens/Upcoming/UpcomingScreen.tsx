import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';

import { FlatList } from 'react-native';

import styles from "../Upcoming/styles"

import eventsData from "../../assets/data/upcoming.json"
import Icon from 'react-native-vector-icons/MaterialIcons';

interface EventProps {
    title: string;
    description: string;
    date: string;
}

const Event: React.FC<EventProps> = ({ title, description, date }) => {
    let iconName = 'event';
    switch (title) {
        case 'Arts & Crafts Day':
          iconName = 'palette';
          break;
        case 'Story Time with Mrs. Smith':
          iconName = 'library-books';
          break;
        case 'Outdoor Play':
          iconName = 'nature';
          break;
        case 'Music & Movement Class':
          iconName = 'music-note';
          break;
        case 'Science Experiment Day':
          iconName = 'flask';
          break;
        case 'Preschool Field Trip to the Zoo':
          iconName = 'map';
          break;
        case 'Preschool Picnic':
          iconName = 'local-dining';
          break;
        case 'Music & Movement Class':
          iconName = 'child-friendly';
          break;
        case 'Sports Day':
          iconName = 'directions-run';
          break;
        case 'Halloween Party':
          iconName = 'movie';
          break;
        default:
          iconName = 'event';
      }
    return (
        <View style={styles.eventContainer}>
            <Icon name={iconName} size={30} color="black" style={styles.icon} />
            <View>
                <Text style={styles.header}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.date}>{date}</Text>
            </View>
      </View>
    );
};

export default function UpcomingScreen(
  
  { navigation }: RootTabScreenProps<'Upcoming'>
  
  ) {
  
    return (
    <View style={styles.container}>
      <Text style={styles.title}>Upcoming Events</Text>
      <Text style={styles.pageDescription}>Check out our events that are happening!</Text>
      <View style={styles.borderLine} />
      <FlatList
        data={eventsData.events}
        renderItem={({ item }) => <Event title={item.title} description={item.description} date={item.date} />}
        keyExtractor={(item) => item.title}
      />
       
    </View>
  );
}

