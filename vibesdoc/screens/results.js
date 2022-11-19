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
         
    <Text style={styles.titleText}>View your results.</Text>
    <Text style={styles.titleText2}>Retake the test</Text>
    <StatusBar barStyle="dark-content" />

   
    <RowItem
      name="Results"
      color="#fff"
    />
    
    <Button
      name="Retake Test"
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
    width:160,
    height:60
  },

});


