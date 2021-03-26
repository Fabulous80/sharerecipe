import React from "react";
import { ScrollView, StyleSheet, Text, View, Linking } from "react-native";

export default function About() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.subContent}>
        <Text style={styles.head}>App Name</Text>
        <Text style={styles.text}>Find Recipes</Text>
      </View>
      <View style={styles.subContent}>
        <Text style={styles.head}>Version</Text>
        <Text style={styles.text}>Beta 1.0</Text>
      </View>
      <View style={styles.subContent}>
        <Text style={styles.head}>Description</Text>
        <Text style={styles.text}>
          This is an application that helps you in cooking dishes by providing
          you to know about nutrition in the dish, ingredients needed to cook,
          approximate cooking time, and more...
        </Text>
        {/* Test */}
        <View>
          <Text style={[styles.text]}>
            If your not getting your recipe wait for some time
          </Text>
        </View>
        <View>
          <Text style={[styles.text, { marginVertical: 5 }]}>
            NOTE : Internet Connection is required
          </Text>
        </View>
      </View>

      <View style={styles.subContent}>
        <Text style={styles.head}>Contact</Text>
        <Text style={styles.text}>marcz68@gmail.com</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  subContent: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  head: {
    fontSize: 14,

    color: "black",
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    color: "grey",
    fontWeight: "bold",
    fontSize: 12,
  },
});
