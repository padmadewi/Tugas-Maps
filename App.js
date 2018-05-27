import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
export default class App extends Component {

  state = {
    region: {
      latitude: -8.149407,
      longitude: 115.216667,
      latitudeDelta: 0.8922,
      longitudeDelta: 0.8421,
    },
    markers : [
      {
        key:1,
        latlng: {
          latitude:-8.112363,
          longitude: 115.091379
        },
        title: 'kFC Singaraja Bali',
        subtitle: 'Jl. Ngurah Rai No. 78, Kelurahan Banjar Jawa, Kecamatan Buleleng, Banjar Jawa, Kec. Buleleng, Bali, 81115'
      },
      {
        key:2,
        latlng: {
          latitude:-8.636787, 
          longitude: 115.185078
        },
        title: 'Gatot Subroto Barat Bali',
        subtitle: 'JL. GATOT SUBROTO BARAT BANJAR LEPANG PADANGSAMBIAN'
      },
      {
        key:3,
        latlng: {
          latitude:-8.782776, 
          longitude: 115.185411
        },
        title: 'KFC Kentucky Fried Chicken',
        subtitle: 'Jl. By Pass Ngurah Rai, Jimbaran, Kuta Selatan, Kabupaten Badung, Bali, Indonesia'
      }
      ,
      {
        key:4,
        latlng: {
          latitude:-8.797264, 
          longitude: 115.225605
        },
        title: 'KFC Kentucky Fried Chicken',
        subtitle: 'Jl. By Pass Ngurah Rai, Nusa DuaKuta Selatan, Kabupaten Badung, Bali, Indonesia'
      }
   ]
  };

  render() {
    return (
      <View style={styles.contMain}>
        <View style={styles.contHeader}>
            <Text style={styles.textHeader}>
              Peta KFC di Bali
            </Text>
        </View>
        <View style={styles.contMaps}>
              <MapView
                style={styles.map}
                region={this.state.region}
              >
              {this.state.markers.map(mark => (
              <Marker
                  key = {mark.key}
                  coordinate={mark.latlng}
                  title={mark.title}
                  description={mark.subtitle}
                />
              ))}
              </MapView>
        </View>
        <View style={styles.contFooter}>
           <Text style={styles.textFooter}> Padma Dewi </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contMain: {
      flex : 1
  },
  contHeader: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  contMaps : {
    flex : 10
  },
  textHeader: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contFooter: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  textFooter: {
    fontSize: 16,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
export default class App extends Component {

  state = {
    region: {
      latitude: -8.149407,
      longitude: 115.216667,
      latitudeDelta: 0.8922,
      longitudeDelta: 0.8421,
    },
    markers : [
      {
        key:1,
        latlng: {
          latitude:-8.112363,
          longitude: 115.091379
        },
        title: 'kFC Singaraja Bali',
        subtitle: 'Jl. Ngurah Rai No. 78, Kelurahan Banjar Jawa, Kecamatan Buleleng, Banjar Jawa, Kec. Buleleng, Bali, 81115'
      },
      {
        key:2,
        latlng: {
          latitude:-8.636787, 
          longitude: 115.185078
        },
        title: 'Gatot Subroto Barat Bali',
        subtitle: 'JL. GATOT SUBROTO BARAT BANJAR LEPANG PADANGSAMBIAN'
      },
      {
        key:3,
        latlng: {
          latitude:-8.782776, 
          longitude: 115.185411
        },
        title: 'KFC Kentucky Fried Chicken',
        subtitle: 'Jl. By Pass Ngurah Rai, Jimbaran, Kuta Selatan, Kabupaten Badung, Bali, Indonesia'
      }
      ,
      {
        key:4,
        latlng: {
          latitude:-8.797264, 
          longitude: 115.225605
        },
        title: 'KFC Kentucky Fried Chicken',
        subtitle: 'Jl. By Pass Ngurah Rai, Nusa DuaKuta Selatan, Kabupaten Badung, Bali, Indonesia'
      }
   ]
  };

  render() {
    return (
      <View style={styles.contMain}>
        <View style={styles.contHeader}>
            <Text style={styles.textHeader}>
              Peta KFC di Bali
            </Text>
        </View>
        <View style={styles.contMaps}>
              <MapView
                style={styles.map}
                region={this.state.region}
              >
              {this.state.markers.map(mark => (
              <Marker
                  key = {mark.key}
                  coordinate={mark.latlng}
                  title={mark.title}
                  description={mark.subtitle}
                />
              ))}
              </MapView>
        </View>
        <View style={styles.contFooter}>
           <Text style={styles.textFooter}> Padma Dewi </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contMain: {
      flex : 1
  },
  contHeader: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  contMaps : {
    flex : 10
  },
  textHeader: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contFooter: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  textFooter: {
    fontSize: 16,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
