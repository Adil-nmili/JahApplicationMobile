import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function ContactMaps() {
  return (
    <View style={styles.mapContainer}>
    / <MapView
  style={styles.map}
  initialRegion={{
    latitude: 31.59278,
    longitude: -8.05200,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  }}
  scrollEnabled={true}
  zoomEnabled={true}
>
  <Marker
    coordinate={{ latitude: 31.59278, longitude: -8.05200 }}
    title="Ecole JAH INFORMATIQUE"
    description="Lot al Houssna 2 N°697 Mhamid, Marrakech"
  />
</MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  mapContainer: {
    height: 300,
    borderRadius: 12,
    overflow: 'hidden',
    marginTop: 20,
    marginBottom: 40,
  },
  map: {
    flex: 1,
  },
});
