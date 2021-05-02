import React from 'react';
import { StyleSheet, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

class BarajMap extends React.Component {

    barajlar = [{
        title: "Alibeykoy Baraji",
        coordinate: {
            latitude: 41.12393,
            longitude: 28.90814,
        },
        image: require('./assets/alibey.jpeg'),
        query: "Alibey",
    },
    {
        title: "Buyukcekmece Baraji",
        coordinate: {
            latitude: 41.02540,
            longitude: 28.56789,
        },
        image: require('./assets/buyukcekmece.jpeg'),
        query: "BCekmece",
    },

    {
        title: "Darlik Baraji",
        coordinate: {
            latitude: 41.09499,
            longitude: 29.57526,
        },
        image: require('./assets/darlik.jpeg'),
        query: "Darlik",
    },

    {
        title: "Elmali Baraji",
        coordinate: {
            latitude: 41.07064,
            longitude: 29.12202,
        },
        image: require('./assets/elmali.jpeg'),
        query: "Elmali",
    },

    {
        title: "Istrancalar Baraji",
        coordinate: {
            latitude: 41.81972,
            longitude: 27.11729,
        },
        image: require('./assets/istranca.jpeg'),
        query: "Istrancalar",
    },

    {
        title: "Kazandere Baraji",
        coordinate: {
            latitude: 41.61768,
            longitude: 28.05467,
        },
        image: require('./assets/kazandere.jpeg'),
        query: "Kazandere",
    },

    {
        title: "Omerli Baraji",
        coordinate: {
            latitude: 41.05585,
            longitude: 29.35744,
        },
        image: require('./assets/omerli.jpeg'),
        query: "Omerli",
    },

    {
        title: "Pabucdere Baraji",
        coordinate: {
            latitude: 41.61798,
            longitude: 28.05495,
        },
        image: require('./assets/pabucdere.jpeg'),
        query: "Pabucdere",
    },

    {
        title: "Sazlidere Baraji",
        coordinate: {
            latitude: 41.13667,
            longitude: 28.73815,
        },
        image: require('./assets/sazlidere.jpeg'),
        query: "Sazlidere",
    },

    {
        title: "Terkos Baraji",
        coordinate: {
            latitude: 41.33385,
            longitude: 28.56671,
        },
        image: require('./assets/terkos.jpeg'),
        query: "Terkos",
    },
    ]

    makerClick(maker: any) {
        this.props.navigation.navigate('Details', {
            baraj: maker
        });
    }

    render() {
        return (
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 41.0082,
                    longitude: 28.9784,
                    latitudeDelta: 10,
                    longitudeDelta: 5,
                }}
            >
                {this.barajlar.map((maker, index) => (
                    <Marker
                        key={index}
                        coordinate={maker.coordinate}
                        title={maker.title}
                        onPress={() => this.makerClick(maker)}
                    >
                        <Image
                            source={maker.image}
                            style={{
                                height: 40,
                                width: 40,
                                borderRadius: 20,
                            }}
                        />
                    </Marker>
                ))}
            </MapView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
});

export default BarajMap;