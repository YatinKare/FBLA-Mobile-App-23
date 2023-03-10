import React from 'react';
import { View, Text, StyleSheet, Image, ImageSourcePropType } from 'react-native';

// Define interface for props with type of image source prop and string values for title and description
interface Props {
  photo: ImageSourcePropType;
  title: string;
  description: string;
}

// Define functional component that accepts Props as parameter
const UpcomingEventsCard: React.FC<Props> = ({ photo, title, description }) => {

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={photo} style={styles.image} resizeMode="contain" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

// Define styles using StyleSheet
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
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  textContainer: {
    flex: 2,
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'white',
  },
  description: {
    fontSize: 16,
    color: "white",
  },
})

export default UpcomingEventsCard;