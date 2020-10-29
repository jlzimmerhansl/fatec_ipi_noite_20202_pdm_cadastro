import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import ENV from '../env';

// import { Container } from './styles';

const MapPreview = (props) => {
  let mapURL;

  if (props.location) {
    mapURL = `https://maps.googleapis.com/maps/api/staticmap?center=${props.location.lat},${props.location.lng}&zoom=13&size=400x200&maptype=roadmap
                        &markers=color:red%7Clabel:C%7C${props.location.lat},${props.location.lng}
                        &key=${ENV.apiKey}`;
  }
  return (
    <View style={styles.mapPreview}>
      {props.location ? (
        <Image style={mapPreview} source={(uri, mapURL)} />
      ) : (
        props.children
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mapPreview: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
});

export default MapPreview;
