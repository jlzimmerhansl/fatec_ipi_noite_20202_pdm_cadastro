import React, { useState } from 'react';
import { View, Button, Image, Text, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Colors from '../constants/Colors';

// import { Container } from './styles';

const TakePhoto = (props) => {
  const [imageUri, setImageUri] = useState(props.contact.imageUri);

  const takePhoto = async () => {
    const photo = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });
    //console.log(photo);
    setImageUri(photo.uri);
    //console.log(imageUri);
    props.onPhotoTaked(photo.uri);
  };

  return (
    <View style={styles.main}>
      <View style={styles.imagePreview}>
        {!imageUri ? (
          <Text>Nenhuma foto.</Text>
        ) : (
          <Image style={styles.image} source={{ uri: imageUri }} />
        )}
      </View>
      <Button title="Tirar foto" color={Colors.primary} onPress={takePhoto} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    marginBottom: 15,
  },
  imagePreview: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderColor: '#CCC',
    borderWidth: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default TakePhoto;
