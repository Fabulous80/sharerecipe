import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Slider } from "@react-native-community/slider";
import { filterSearch } from "../client.js";

export default function Filter() {
  const [calories, setCalories] = useState(1500);
  const [health, setHealth] = useState("balanced");

  return (
    <View style={styles.container}>
      <View style={[styles.header, { flex: 0.01 }]}>
        <Text style={styles.title}>Filter </Text>
        <View
          style={{
            flex: 0.7,
            alignItems: "center",
            flexDirection: "row",
          }}
        ></View>
        <TouchableOpacity
          style={{ position: "absolute", right: 20, top: 20 }}
          onPress={() => setShowFilter(false)}
        >
          <Icon name="close-sharp" color="#2DC268" size={25} />
        </TouchableOpacity>
      </View>
      <ScrollView style={[styles.content, { flex: 0.9 }]}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <View style={[styles.filter]}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 20,
                  color: "black",
                  fontWeight: "bold",
                  marginRight: 15,
                }}
              >
                Number of Recipe
              </Text>
              <View
                style={{
                  alignItems: "center",
                  flex: 1,
                  justifyContent: "space-evenly",
                  flexDirection: "row",
                }}
              >
                <View>
                  <Text
                    style={{
                      backgroundColor: "#F2F2F2",
                      color: "#2DC268",
                      borderRadius: 10,
                      padding: 13,
                      fontSize: 18,
                      fontWeight: "bold",
                    }}
                  >
                    0
                  </Text>
                </View>
                <Text style={{ color: "#555555", fontWeight: "bold" }}>
                  {" "}
                  to
                </Text>

                <View>
                  <Text
                    style={{
                      backgroundColor: "#F2F2F2",
                      color: "#2DC268",
                      borderRadius: 10,
                      padding: 13,
                      fontSize: 18,
                      fontWeight: "bold",
                    }}
                  >
                    {to}
                  </Text>
                </View>
              </View>
            </View>
            <Slider
              style={{ height: 30 }}
              minimumValue={5}
              step={1}
              value={to}
              maximumValue={100}
              minimumTrackTintColor="#DDDDDD"
              maximumTrackTintColor="#2DC268"
              onValueChange={(e) => {
                setTo(e);
              }}
            />

            <View>
              <Text
                style={{ position: "absolute", left: 2, fontWeight: "bold" }}
              >
                0
              </Text>
              <Text
                style={{ position: "absolute", right: 2, fontWeight: "bold" }}
              >
                100 recipe's
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    elevation: 2,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  header: {
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    // backgroundColor: 'red',
    padding: 32,
    height: 1,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    flexDirection: "row",
    elevation: 5,
  },
  title: {
    color: "#555555",
    flex: 0.3,
    fontSize: 25,
    fontWeight: "bold",
  },
  content: {
    padding: 20,
  },
  text: {
    color: "#2DC268",
    fontWeight: "bold",
    fontSize: 17,
  },
  filterButton: {
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  filterButtonText: {
    color: "white",
    zIndex: 1,
    fontWeight: "bold",
  },
  filter: {
    marginBottom: 25,
  },
});
