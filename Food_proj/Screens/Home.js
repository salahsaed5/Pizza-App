import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';
import categories from './Menue';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import BottomNavigator from '../BottomNavigationas/BottomNavigator';



const Home = ({ navigation }) => {
    const [currentSelected, setCurrentSelected] = useState([0]);

    const renderCategories = ({ item, index }) => {
        
        
        
        
        
        
        
        
        
        
        return (
            
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => setCurrentSelected(index)}>
                <View
                    style={{
                        width: 120,
                        height: 180,
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        backgroundColor:
                            currentSelected == index ? '#FFC231' : '#ffffff',
                        borderRadius: 20,
                        margin: 10,
                        elevation: 5,
                    }}>
                    <View style={{ width: 60, height: 60 }}>
                        <Image
                            source={item.image}
                            style={{
                                width: '100%',
                                height: '100%',
                                resizeMode: 'center',
                            }}
                        />
                    </View>
                    <Text
                        style={{
                            fontSize: 16,
                            color: '#000000',
                            fontWeight: '600',
                        }}>
                        {item.name}
                    </Text>

                    <View
                        style={{
                            width: 30,
                            height: 30,
                            borderRadius: 100,
                            backgroundColor:
                                currentSelected == index ? '#ffffff' : '#FB5D2E',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <FontAwesome
                            name="angle-right"
                            style={{
                                fontSize: 12,
                                color: currentSelected == index ? '#000000' : '#ffffff',
                            }}
                        />
                    </View>
                </View>
            </TouchableOpacity>
        );
    };



    const renderItems = (data, index) => {
        return (
            <TouchableOpacity
                key={index}
                activeOpacity={0.9}
                style={{
                    width: '100%',
                    height: 180,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                onPress={() =>
                    navigation.push('Profaile', {
                        name: data.name,
                        price: data.price,
                        image: data.image,
                        size: data.size,
                        crust: data.crust,
                        delivery: data.delivery,
                        ingredients: data.ingredients,
                        navigation: navigation,
                    })
                }>
                <View
                    style={{
                        width: '90%',
                        height: 160,
                        backgroundColor: '#ffffff',
                        borderRadius: 20,
                        elevation: 4,
                        position: 'relative',
                        padding: 15,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                    <View style={{ marginBottom: 50 }}>

                        <Text
                            style={{
                                fontSize: 22,
                                color: '#000000',
                                fontWeight: 'bold',
                                paddingTop: 10,
                            }}>
                            {data.name}
                        </Text>
                        <Text
                            style={{
                                fontSize: 12,
                                color: '#000000',
                                opacity: 0.5,
                            }}>
                            {data.weight}
                        </Text>
                    </View>
                    <View style={{ width: 150, height: 150, marginRight: -45 }}>
                        <Image
                            source={data.image}
                            style={{
                                width: '100%',
                                height: '100%',
                                resizeMode: 'contain',
                            }}
                        />
                    </View>
                    <View
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                        <View
                            style={{
                                width: 85,
                                height: 50,
                                backgroundColor: '#FFC231',
                                borderTopRightRadius: 20,
                                borderBottomLeftRadius: 20,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Entypo
                                name="plus"
                                style={{ fontSize: 18, color: '#000000' }}
                            />
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginLeft: 20,
                            }}>
                            <AntDesign
                                name="star"
                                style={{ fontSize: 12, color: '#000000', paddingRight: 5 }}
                            />
                            <Text
                                style={{
                                    fontSize: 15,
                                    color: '#000000',
                                    fontWeight: 'bold',
                                }}>
                                {data.rating}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };






    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.ViewScroll} >
                    <View style={{ padding: 20 }}>
                        <Text style={styles.pizza}>   PIZZA </Text>
                        <Text style={styles.Delivary}> Delivery</Text>
                    </View>


                    <View style={styles.Search} >
                        <Ionicons
                            name="search"
                            style={{ fontSize: 20, color: '#000000', opacity: 0.8 }} />
                        <TextInput style={styles.TextSearch} placeholder="Search..." />
                    </View>


                    <Text style={styles.Categories} > Categories</Text>
                    <FlatList
                        horizontal={true}
                        data={categories}
                        renderItem={renderCategories}
                        showsHorizontalScrollIndicator={false}
                    />
                    <Text style={styles.Popular} > Popular </Text>

                    {categories[currentSelected].items.map(renderItems)}

                    <TouchableOpacity style={styles.TouchLoadMore} >
                        <Text style={styles.LoadMore} >  Load more </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};




const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
    },
    ViewScroll: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
        position: 'relative',
    },

    pizza: {
        fontSize: 16,
        color: '#000000',
        opacity: 0.5,
        fontWeight: '400',
    },
    Delivary: {
        fontSize: 40,
        color: '#000000',
        fontWeight: '600',
        letterSpacing: 2,
    },
    Search: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    TextSearch: {
        color: '#000000',
        fontSize: 16,
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#000000' + 20,
        width: '90%',
        marginLeft: 10,
        letterSpacing: 1,
    },
    Categories: {
        paddingTop: 20,
        paddingHorizontal: 20,
        fontSize: 18,
        fontWeight: '700',
        color: '#000000',
        letterSpacing: 1,
    },
    Popular: {
        paddingTop: 20,
        paddingHorizontal: 20,
        fontSize: 18,
        fontWeight: '700',
        color: '#000000',
    },
    LoadMore: {
        fontSize: 16,
        color: '#000000',
        borderBottomWidth: 1,
        borderBottomColor: '#000000',
    },
    TouchLoadMore: {
        margin: 30,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.5,
    },



});

export default Home;
