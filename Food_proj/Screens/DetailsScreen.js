import React from 'react';
import {SafeAreaView, ScrollView,StyleSheet,TouchableOpacity, View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Breakfast from "../assets/BreakFast/McFalafel.png";


const DetailsScreen = ({navigation,route}) => {
 

  return (
    <SafeAreaView style={{backgroundColor: '#ffffff'}}>
    <Text>{route.params.name }</Text>
    <Text>{route.params.price }</Text>
    
      <View style={style.header}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Details</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 280,
          }}>
          <Image source={{uri:route.params.image}} style={{height: 220, width: 220}} />
        </View>
        <View style={style.details}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{fontSize: 25, fontWeight: 'bold', color:'#FFF'}}>
Pizza            </Text>
            <View style={style.iconContainer}>
              <Icon name="favorite-border" color='#FFC231' size={25} />
            </View>
          </View>
          <Text style={style.detailsText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </Text>
          <View style={{marginTop: 40, marginBottom: 40}}>

          <TouchableOpacity activeOpacity={0.8}>
      <View style={{...style.btnContainer, backgroundColor: '#FFF'}}>
        <Text style={{...style.title, color: '#F9813A'}}>Add To Cart</Text>
      </View>
    </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: '#ED7014',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  iconContainer: {
    backgroundColor: '#FFF',
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  detailsText: {
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
    color: '#FFF',
  },
  title: {color: '#FFF', fontWeight: 'bold', fontSize: 18},
  btnContainer: {
    backgroundColor: '#F9813A',
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DetailsScreen;
