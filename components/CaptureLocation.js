import React, { useState } from 'react';
import {
  View,
  Button,
  Text,
  ActivityIndicator,
  Alert,
  StyleSheet,
} from 'react-native';
import Colors from '../constants/Colors';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import MapPreview from '../components/MapPreview';

const CaptureLocation = (props) => {
  const [handleCapture, setHandleCapture] = useState(false);
  const [locationSelected, setLocationSelected] = useState();

  const verifyPermissions = async () => {
    const reult = await Permissions.askAsync(Permissions.LOCATION);

    if (reult.status !== 'granted') {
      Alert.alert(
        'Sem permissão para uso do mecanismo de localização',
        'É preciso liberar acesso ao mecanismo de localização',
        [{ text: 'Ok' }]
      );
      return false;
    }
    return true;
  };

  const locationCapture = async () => {
    const hasPermission = await verifyPermissions();

    if (hasPermission) {
      setHandleCapture(true);
      try {
        const location = await Location.getCurrentPositionAsync({
          timeout: 8000,
        });
        setLocationSelected({
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        });
      } catch (err) {
        Alert.alert(
          'Impossível obter localização',
          'Tente novamente mais tarde ou escolha uma no mapa',
          [{ text: 'Ok' }]
        );
      }
      setHandleCapture(false);
    }
  };

  return (
    <View style={styles.Location}>
      <MapPreview
        style={{ ...styles.mapPreview, ...props.style }}
        location={locationSelected}
      >
        {handleCapture ? (
          <ActivityIndicator size="large" color={Colors.primary} />
        ) : (
          <Text>Nenhuma Localização disponível.</Text>
        )}
      </MapPreview>
      <Button
        title="Obter localização"
        color={Colors.primary}
        onPress={locationCapture}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Location: {
    marginBottom: 15,
  },
  mapPreview: {
    marginBottom: 10,
    width: '100%',
    height: 150,
    borderColor: '#DDD',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CaptureLocation;
