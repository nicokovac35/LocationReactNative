import * as React  from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from "react-native-maps";

export default function App() {



  const [ origin, setOrigin ] = React.useState({
    latitude: -33.43697412635504, 
    longitude: -70.63442101351201
});





  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map}
        initialRegion={{
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04,
        }}
        />      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height : "100%",    
  }

});
