import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require('../img/1.png')}
                    style={styles.image}
                />
                <Text style={styles.headerText}>CAFFE SHOP</Text>
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Get started</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5CCA0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 0,
    },
    image: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
        paddingBottom: 1,
    },
    headerText: {
        color: '#000000',
        fontSize: 30,
        paddingBottom: 230,
    },
    button: {
        width: 211,
        height: 53,
        backgroundColor: '#6B240C',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        paddingStart: 30,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 20,
    },
});

export default Home;
