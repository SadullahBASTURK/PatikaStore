import React from "react";
import {
    SafeAreaView, 
    View, 
    Text, 
    Image, 
    ScrollView, 
    TextInput,
    StyleSheet,
    FlatList,
    } from "react-native";

import Patika_Store_Data from './Patika_Store_data.json';

function App () {

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.itemImage}
                source={{ uri: item.imgURL }}
              />
            </View>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
            <Text style={styles.itemStock}>
              {item.inStock ? "Stokta Var" : "Stokta Yok"}
            </Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header_text}>PATIKASTORE</Text>

            <View>
                <FlatList
                    ListHeaderComponent={() => (
                        <TextInput style={styles.text_input} placeholder="Ara..." placeholderTextColor={'#8a8a96'} />
                    )}
                    data={Patika_Store_Data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal={false}
                    numColumns={2}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 5,
    },
    header_text: {
        color: '#ec4473',
        fontWeight: 'bold',
        fontSize: 30,
        margin: 12,
    },
    text_input: {
        backgroundColor: '#ebebfb',
        color: '#000',
        margin: 12,
        borderRadius: 10,
        paddingLeft: 10,
    },
    itemContainer: {
        flex: 1,
        margin: 12,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#ebebfb',
    },
    imageContainer: {
      alignItems: 'center',
    },
    itemImage: {
      width: '100%',
      height: 160,
      borderRadius: 5,
      marginBottom: 10,
      objectFit: 'contain',
    },
    itemTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#000',
    },
    itemPrice: {
      fontSize: 14,
      color: 'gray',
      marginTop: 5,
    },
    itemStock: {
      fontSize: 12,
      color: 'red',
      marginTop: 5,
    },
})


export default App;