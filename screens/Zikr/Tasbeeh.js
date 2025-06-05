import { StyleSheet, Text, View, Dimensions, ScrollView, Image, ImageBackground, TouchableOpacity, Modal } from 'react-native'
import React, { useState, useCallback } from 'react'
import { Ionicons } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';
import RadioGroup from 'react-native-radio-buttons-group';

export default function Tasbeeh({ route }) {

  const ar = route.params.ar;
  const en = route.params.en;
  const ur = route.params.ur;
  const [max, setMax] = useState(route.params.count);
  const [count, setCount] = useState(0);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState(String(max));
  const [selectedId, setSelectedId] = useState('4');

  const radioButtons = [
    { id: '1', label: '7', value: '7' },
    { id: '2', label: '10', value: '10' },
    { id: '3', label: '33', value: '33' },
    { id: '4', label: '100', value: '100' },
    { id: '5', label: '1000', value: '1000' },
  ];

  const handleRadioPress = (id) => {
    setSelectedId(id);
    console.log("ID: ", id)
    const selected = radioButtons.find(rb => rb.id === id);
    if (selected) {
      setSelectedValue(selected.label);
      // setMax(Number(selectedValue));
    }
  };

  const handleCount = () => {
    let index = count;
    if (index < max) { setCount(index + 1) }
  }

  const editMax = () => {
    setMax(Number(selectedValue));
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollStyle}
      >
        <Text style={styles.arabicText}>{ar}</Text>
        <Text style={styles.englishText}>{en}</Text>
        <Text style={styles.urduText}>{ur}</Text>
      </ScrollView>
      <Progress.Bar progress={count / max} width={Dimensions.get('window').width * 0.92} height={4} color='#40186e' backgroundColor='#fff' borderWidth={0} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={editMax}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={{fontSize: 16, fontFamily: 'Open-Sans'}}>Select Max Count</Text>
            <RadioGroup
              containerStyle={styles.radioGroup}
              radioButtons={radioButtons}
              selectedId={selectedId}
              onPress={handleRadioPress}
            />
            <TouchableOpacity style={styles.button1} onPress={editMax} >
              <Text style={{fontSize: 20, fontFamily: 'Open-Sans'}}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
      </TouchableOpacity>
      <ImageBackground
        style={styles.card}
        imageStyle={{ borderRadius: 15 }}
        source={require('../../assets/images/darkblue.jpg')}
      >

        <TouchableOpacity style={{ margin: 10, height: 40, width: 40, position: 'absolute', zIndex: 1 }} onPress={() => setCount(0)}>
          <Ionicons name='reload-circle' size={40} color={'#fff'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ margin: 10, height: 40, width: 40, position: 'absolute', zIndex: 1, right: 0 }}
          onPress={() => setModalVisible(true)}>
          <Ionicons name='chevron-up-circle' size={40} color={'#fff'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchArea} onPress={handleCount}>
          <Text style={{ fontSize: 150, color: '#fff' }}>
            {count}
            {/* <Text style={{fontSize: 25, color: '#e5eb34'}}>/100</Text> */}
          </Text>
          <Text style={{ fontSize: 18, fontStyle: 'italic', color: 'gray', position: 'absolute', bottom: 10, right: -7 }}>/{selectedValue || max}</Text>
        </TouchableOpacity>
        
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    // backgroundColor: '#e6e6e6', 
  },
  scrollStyle: {
    // borderColor: '#c4c4c4',
    borderColor: '#e3e3e3',
    backgroundColor: '#fff',
    width: Dimensions.get('window').width * 0.95,
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 15,
    marginVertical: 10,
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10

  },
  card: {
    height: Dimensions.get('window').width * 0.9,
    width: Dimensions.get('window').width * 0.95,
    backgroundColor: '#e3d040',
    margin: 10,
    borderRadius: 15,
    elevation: 3,
  },
  image: {
    height: Dimensions.get('window').width * 0.9,
    width: Dimensions.get('window').width * 0.9,
  },
  touchArea: {
    height: Dimensions.get('window').width * 0.9,
    width: Dimensions.get('window').width * 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  arabicText: {
    fontFamily: 'arabic4',
    fontSize: 26,
    textAlign: 'right',
    color: '#b83021',
    // alignSelf: 'center',
    marginTop: 10,
  },
  englishText: {
    fontFamily: 'Open-Sans',
    fontSize: 14,
    marginVertical: 10,
    color: '#303030',
    // alignSelf: 'center',
  },
  urduText: {
    fontFamily: 'Noto-Regular',
    fontSize: 14,
    textAlign: 'right',
    color: '#303030',
    // alignSelf: 'center',
  },

  ////////////////

  // Modal Styles
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
   backgroundColor: '#fff',
    // height: Dimensions.get('window').width * 0.5,
    // width: Dimensions.get('window').width * 0.5,
    padding: 20,
    borderRadius: 10,
    width: '60%', // Adjust as needed
    alignItems: 'flex-start',
  },
  radioGroup: {
    // flexDirection: 'column',
    // alignItems: 'center',
    alignItems: 'flex-start',
    marginVertical: 20,
  },
  button1: {
      width: '100%', 
      height: 50, 
      backgroundColor: '#e3d040', 
      borderRadius: 8, 
      justifyContent: 'center', 
      alignItems:'center',
  },
})