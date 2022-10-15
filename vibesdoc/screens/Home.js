
import React from "react";
import { ScrollView, StatusBar, StyleSheet, Text, Image, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Qpage from "../data/Questionnare";
import Rpage from "../data/Results";
import Tpage from "../data/tests";

import { RowItem } from "../components/RowItem";
import { Button } from "../components/Button";

export default ({ navigation }) => (
  <View style={styles.container}>
     <Image source={require('../resources/my-icon.png')} style={styles.img} />
    <LinearGradient
          colors={['#963dbe', '#776ff5' ]}
          style={styles.container}
        >
         
    <Text style={styles.titleText}>Welcome to</Text>
    <Text style={styles.titleText2}>Vibesdoc</Text>
    <StatusBar barStyle="dark-content" />

   
    <RowItem
      name="Take our Questionnare"
      color="#fff"
    />
    
    <RowItem
      name="Get a Test Recommended"
      color="#fff"
    />
    
    <RowItem
      name="Take Test & Get Reliable Results"
      color="#fff"
    />

    
    <Button
      name="Take the test"
      color="#fff"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Tests",
          questions: Tpage,
        })
      }
    />
    </LinearGradient>
  </View>
);

/* 
    
    <Image source={require('../resources/toq.png')} style={styles.img2} />
<Image source={require('../resources/gatr.png')} style={styles.img2} />
<Image source={require('../resources/ttgrr.png')} style={styles.img2} />

    img2: {
  paddingHorizontal: 15,
  paddingVertical: 20,
  marginBottom: -20,
  marginLeft: 25,
 // marginRight: 40,
  marginTop: 30,
  width:300,
  height:80,
  borderRadius:20
  }*/


const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width:"95%",
    height:"100%",
    marginLeft: 6,
    borderRadius:20
  },

  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    color: '#FFFF',
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginLeft: 80,
  },

  titleText2: {
    fontSize: 30,
    fontWeight: "bold",
    color: '#FFFF',
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 95,
  },

  img: {
    //marginTop:10,
   // marginLeft: 0,
    width:160,
    height:60
  },

});
