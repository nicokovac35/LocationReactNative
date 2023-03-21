import * as React  from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker, Polyline} from "react-native-maps";

export default function App() {



  const [ origin, setOrigin ] = React.useState({
    latitude: -33.43697412635504, 
    longitude: -70.63442101351201
});


  const [ destination, setDestination ] = React.useState({  
    latitude: -33.440596029787095,
    longitude:-70.64386740211937,
  })




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
      
        >
        <Marker 
          draggable
          coordinate={origin}
          onDragEnd={(direction) => setOrigin(direction.nativeEvent.coordinate)}        
          />
        <Marker
          draggable
          coordinate={destination}
          onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)}
        />

        <Polyline
          coordinates={[origin, destination]}
          strokeColor= "green"
          strokeWidth={5}
        />
    </MapView>

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




// Notas
//Dragggable : Para mover el pin de localizcion inicial.
// // -33.440596029787095, -70.64386740211937  destinacion
// polyline es para hacer la linea y se puedee modificar color y ancho

