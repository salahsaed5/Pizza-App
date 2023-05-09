import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';
import categories from './Menue';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import BottomNavigator from '../BottomNavigationas/BottomNavigator';
import Breakfast from "../assets/BreakFast/McFalafel.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, provider, db, storag, firebase } from "../firebase/firebase";
import * as ImagePicker from 'expo-image-picker';
import { collection, addDoc, and, onSnapshot } from "firebase/firestore";
import { doc, setDoc, getDoc, updateDoc, deleteDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";



const HomeTwo = ({ navigation }) => {
    const [data,setdata]=useState([]);


        const Read = async() => {
          const querySnapshot = await getDocs(collection(db,"breakfast"));
          let dat = [];
          querySnapshot.forEach((doc) => {
            dat.push({
              id: doc.id,
              
              ...doc.data()
            });
          });
          setdata(dat);
        };
        
        useEffect(() => {
          Read();
        },[]);

   






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
                <View style={{flexDirection:"row"}}>
               < TouchableOpacity onPress={ () => {
                    navigation.navigate('Home')
                } }
                activeOpacity={0.9}
                >
                <View
                    style={{
                        width: 120,
                        height: 180,
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                      
                        backgroundColor:'#ffffff',

                        borderRadius: 20,
                        margin: 10,
                        elevation: 5,
                    }}>
                    <View style={{ width: 60, height: 60 }}>
                        <Image
                            source={Breakfast}
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
                        BreakFast
                    </Text>

                    <View
                        style={{
                            width: 30,
                            height: 30,
                            borderRadius: 100,
                            backgroundColor:
                            '#FB5D2E',
                           
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <FontAwesome
                            name="angle-right"
                            style={{
                                fontSize: 12,
                                color:  '#ffffff',
                            }}
                        />
                    </View>
                </View>
            </TouchableOpacity>
           < TouchableOpacity
                activeOpacity={0.9}
                >
                <View
                    style={{
                        width: 120,
                        height: 180,
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        backgroundColor:
                        '#FFC231',
                      
                        borderRadius: 20,
                        margin: 10,
                        elevation: 5,
                    }}>
                    <View style={{ width: 60, height: 60 }}>
                        <Image
                            source={Breakfast}
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
                        kkkk
                    </Text>

                    <View
                        style={{
                            width: 30,
                            height: 30,
                            borderRadius: 100,
                            backgroundColor:
                               '#FB5D2E',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <FontAwesome
                            name="angle-right"
                            style={{
                                fontSize: 12,
                                color:  '#ffffff',
                            }}
                        />
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.9} onPress={ () => {
                    navigation.navigate('HomeThree')}}
                >
                <View
                    style={{
                        width: 120,
                        height: 180,
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        backgroundColor:'#ffffff',
                        borderRadius: 20,
                        margin: 10,
                        elevation: 5,
                    }}>
                    <View style={{ width: 60, height: 60 }}>
                        <Image
                            source={Breakfast}
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
                        kkkk
                    </Text>

                    <View
                        style={{
                            width: 30,
                            height: 30,
                            borderRadius: 100,
                            backgroundColor:
                                '#FB5D2E',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <FontAwesome
                            name="angle-right"
                            style={{
                                fontSize: 12,
                                color:  '#ffffff',
                            }}
                        />
                    </View>
                </View>
            </TouchableOpacity>
                </View>
                
                    <Text style={styles.Popular} > Popular </Text>
                    {data.map((user) => (
                          <TouchableOpacity style={styles.TOuchopacityy} >
                          <View style={styles.Label}>
                              <View style={{ marginBottom: 50 }}>
  
                                  <Text style={styles.NameItem}> {user.name} </Text>
  
                                  <Text style={styles.WeightiTems}>{user.weight} </Text>
                              </View>
  
  
                              <View style={{ width: 150, height: 150, marginRight: -45 }}>
                                  <Image source={user.photo} style={styles.ImageItems} />
                              </View>
  
                              <View style={styles.ArrangeItems}>
                                  <View style={styles.PlusColor}>
                                      <Entypo
                                          name="plus"
                                          style={{ fontSize: 18, color: '#000000' }}
                                      />
                                  </View>
                                  <View style={styles.StarPosition}>
                                      <AntDesign
                                          name="star"
                                          style={{ fontSize: 12, color: '#000000', paddingRight: 5 }}
                                      />
                                      <Text style={styles.StarText}> 4.5 </Text>
                                  </View>
                              </View>
                          </View>
                      </TouchableOpacity>
  
     
      
    ))}


                  
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
    Label: {
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
    },
    PLus: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        width: 85,
        height: 50,
        backgroundColor: '#FFC231',
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    NameItem: {
        fontSize: 22,
        color: '#000000',
        fontWeight: 'bold',
        paddingTop: 5,
    },
    ImageItems: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    RateItem: {
        margin: 30,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.5,
    },
    TouchLoadMore: {
        margin: 30,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.5,
    },
    WeightiTems: {
        fontSize: 12,
        color: '#000000',
        opacity: 0.5,
    },
    ArrangeItems: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
    },
    PlusColor: {
        width: 85,
        height: 50,
        backgroundColor: '#FFC231',
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    StarPosition: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
    },
    StarText: {
        fontSize: 15,
        color: '#000000',
        fontWeight: 'bold',
    },

});

export default HomeTwo;
