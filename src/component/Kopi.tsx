import { View, StyleSheet, TextInput, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';

const Kopi = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.searchContainer}>
                <View style={styles.searchInputContainer}>
                    <TextInput
                        placeholder="Search"
                        style={styles.searchInput}
                        placeholderTextColor="#000"
                    />
                    <Ionic name="search-outline" size={25} color="#000" style={styles.searchIcon} />
                </View>
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.brewingText}>Brewing Coffee</Text>
            </View>
            <ScrollView style={styles.productsContainerVertical}>
                <View style={styles.productsRow}>
                    {renderProduct(require('../img/3.png'), 'Coffee Name', '$4.99')}
                    {renderProduct(require('../img/3.png'), 'Coffee Name', '$4.99')}
                </View>
                <View style={styles.productsRow}>
                    {renderProduct(require('../img/3.png'), 'Coffee Name', '$4.99')}
                    {renderProduct(require('../img/3.png'), 'Coffee Name', '$4.99')}
                </View>
                <View style={styles.productsRow}>
                    {renderProduct(require('../img/3.png'), 'Coffee Name', '$4.99')}
                    {renderProduct(require('../img/3.png'), 'Coffee Name', '$4.99')}
                </View>
            </ScrollView>

            <View style={styles.iconContainer}>
                <View style={styles.leftIcons}>
                    <Ionic name="person-outline" size={40} color="#F6F1E9" />
                </View>
                <View style={styles.rightIcons}>
                    <Ionic name="notifications-outline" size={40} color="#F6F1E9" />
                </View>
            </View>
        </ScrollView>
    );
};

const renderProduct = (imageSource, name, price) => {
    return (
        <View style={styles.productContainer}>
            <View style={styles.productImageContainer}>
                <Image source={imageSource} style={styles.productImage} resizeMode="cover" />
            </View>
            <View style={styles.productDetails}>
                <Text style={styles.productName}>{name}</Text>
                <Text style={styles.productPrice}>{price}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#6B240C',
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchContainer: {
        position: 'absolute',
        top: 70,
        width: '100%',
        alignItems: 'center',
    },
    searchInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        width: 345,
        height: 41,
        backgroundColor: '#F5CCA0',
        borderRadius: 8,
        paddingLeft: 10,
        marginBottom: 20,
        marginTop: 30,
    },
    searchInput: {
        flex: 1,
        fontSize: 12,
        color: '#000',
    },
    searchIcon: {
        marginLeft: 10,
    },
    textContainer: {
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 200,
        marginLeft: -200,
    },
    brewingText: {
        color: '#FFF',
        fontSize: 20,
        marginBottom: 20,
    },
    productsContainer: {
        maxHeight: 250,
    },
    productsContainerVertical: {
        maxHeight: 400,
    },
    productsRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 10,
        marginEnd: -35,
    },
    productContainer: {
        width: 150,
        height: 200,
        backgroundColor: '#F5CCA0',
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: 10,
    },
    productImageContainer: {
        flex: 1,
    },
    productImage: {
        width: '100%',
        height: '100%',
    },
    productDetails: {
        padding: 10,
    },
    productName: {
        fontSize: 16,
        color: '#000',
    },
    productPrice: {
        fontSize: 14,
        color: '#000',
        marginTop: 5,
    },
    iconContainer: {
        flexDirection: 'row',
        position: 'absolute',
        top: 10,
        right: 10,
        left: 10,
    },
    leftIcons: {
        marginRight: 'auto',
    },
    rightIcons: {
        marginLeft: 'auto',
    },
});

export default Kopi;
