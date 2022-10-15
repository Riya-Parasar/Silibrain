
import React from "react";
import { ScrollView, StatusBar, StyleSheet, Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Qpage from "../data/Questionnare";
import Rpage from "../data/Results";
import Tpage from "../data/tests";

import { RowItem } from "../components/RowItem";

export default ({ navigation }) => (
  <ScrollView style={styles.container}>
    <Text style={styles.titleText}>Welcome to</Text>
    <Text style={styles.titleText2}>Vibesdoc</Text>
    <StatusBar barStyle="dark-content" />
    <RowItem
      name="Questionnare"
      color="#fff"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Questionnare",
          questions: Qpage,
        })
      }
    />
    <RowItem
      name="Results"
      color="#fff"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Results",
          questions: Rpage,
        })
      }
    />
    <RowItem
      name="Tests"
      color="#fff"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Tests",
          questions: Tpage,
        })
      }
    />
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    width:"100%",
    backgroundColor:"#8e45c8",
  },

  titleText: {
    fontSize: 40,
    fontWeight: "bold",
    color: '#FFFF',
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginLeft: 70,
  },

  titleText2: {
    fontSize: 40,
    fontWeight: "bold",
    color: '#FFFF',
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 90,
  }

});
