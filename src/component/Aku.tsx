import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

const Aku = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../img/3.png')}
                style={styles.image}
                resizeMode="cover"
            />
            <Text style={styles.description}>Deskripsi Produk</Text>
            <Text style={styles.price}>$99.99</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6B240C',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 350,
        height: 300,
        borderRadius: 8,
        marginBottom: 10,
    },
    description: {
        color: '#FFF',
        fontSize: 20,
        marginBottom: 10,
    },
    price: {
        color: '#FFF',
        fontSize: 16,
    },
});

export default Aku;
