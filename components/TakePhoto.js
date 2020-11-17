import React, { useState } from 'react';
import { View, Button, Image, Text, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Colors from '../constants/Colors';

// import { Container } from './styles';

const TakePhoto = (props) => {
  const [imageUri, setImageUri] = useState(props.contact.imageUri);

  const takePhoto = async () => {
    Alert.alert(
      'Camera ou Galeria?',
      'Deseja tirar a foto pela câmenra ou selecionar na galeria?',
      [
        {
          text: 'Galeria',
          onPress: () => {
            const photo = ImagePicker.launchImageLibraryAsync({
              allowsEditing: true,
              aspect: [4, 4],
              quality: 1,
            });
            //console.log(photo);
            setImageUri(photo.uri);
            //console.log(imageUri);
            props.onPhotoTaked(photo.uri);
          },
        },
        {
          text: 'Camera',
          onPress: () => {
            const photo = ImagePicker.launchCameraAsync({
              allowsEditing: true,
              aspect: [4, 4],
              quality: 1,
            });
            //console.log(photo);
            setImageUri(photo.uri);
            //console.log(imageUri);
            props.onPhotoTaked(photo.uri);
          },
        },
      ]
    );
  };

  const removerLembrete = (chave) => {
    Alert.alert('Apagar?', 'Quer mesmo apagar esse lembete?', [
      { text: 'Cancelar' },
      {
        text: 'Confimar',
        onPress: () => {
          db.collection('lembretes').doc(chave).delete();
        },
      },
    ]);
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
