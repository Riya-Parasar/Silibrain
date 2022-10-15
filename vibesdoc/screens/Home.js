
import React from "react";
import { ScrollView, StatusBar, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Qpage from "../data/Questionnare";
import Rpage from "../data/Results";
import Tpage from "../data/tests";

import { RowItem } from "../components/RowItem";

export default ({ navigation }) => (
  <ScrollView style={styles.container}>
    <StatusBar barStyle="dark-content" />
    <RowItem
      name="Questionnare"
      color="#fff"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Questionnare",
          questions: Qpage,
          color: "#36b1f0"
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
          color: "#799496"
        })
      }
    />
    <RowItem
      name="tests"
      color="#fff"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "tests",
          questions: Tpage,
          color: "#49475B"
        })
      }
    />
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },

});
