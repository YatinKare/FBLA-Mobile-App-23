import React from 'react';
import { View, Text, StyleSheet, Image, ImageSourcePropType } from 'react-native';

// Define the types of the props that will be passed to the component
interface Props {
  photo: ImageSourcePropType;
  title: string;
  description: string;
}

// Define the component as a function component that receives the props as a destructured object
const PhotoCard: React.FC<Props> = ({ photo, title, description }) => {

  return (
    // Render the component's UI using JSX
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

// Define the component's styles using a StyleSheet object
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    borderRadius: 10,
    marginHorizontal: 16,
    marginVertical: 8,
    overflow: 'hidden',
    flexDirection: 'row',
    width: '500%',
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

export default PhotoCard;