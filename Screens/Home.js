import React, { useEffect, useState } from "react";
import "react-native-gesture-handler";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { getRecipeByQuery } from "../client.js";
import SearchModel from "../Components/SearchModel.js";
import Recipe from "../Components/Recipe.js";
import FilterModel from "../Components/FilterModel.js";
import RadioButtonRN from "radio-buttons-react-native";

const data = [
  {
    label: "20 Recipes",
  },
  {
    label: "30 Recipes",
  },
];

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [calories, setCalories] = useState(1500);
  const [health, setHealth] = useState("balanced");
  const [to, setTo] = useState(10);
  const [num, setNum] = useState();

  const [showFilter, setShowFilter] = useState(false);

  // default to load recipe for "Mee Goreng"
  useEffect(() => {
    getRecipeByQuery(query.length === 0 ? "Mee Goreng" : query, 0, 10)
      .then(({ hits }) => {
        if (!hits) {
          return;
        }
        setRecipes(hits);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={require("../assets/icons/FR.png")}
          style={{
            alignContent: "center",
            width: 280,
            height: 70,
          }}
        />
        <SearchModel
          query={query}
          setQuery={setQuery}
          setLoading={setLoading}
          setRecipes={setRecipes}
          setNum={num}
        />

        <RadioButtonRN
          circleSize={10}
          box={false}
          data={data}
          selectedBtn={(e) => setNum(e)}
        />

        <View style={[styles.contentContainer]}>
          {/* <Text style={[styles.title]}>Recipes</Text> */}
          {loading ? (
            <View style={{ height: height / 1.7, justifyContent: "center" }}>
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 22,
                }}
              >
                Loading...
              </Text>
              <Text
                style={{
                  marginTop: 10,
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 19,
                }}
              >
                Note : Internet is required
              </Text>
              <Text
                style={{
                  marginTop: 8,
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 19,
                }}
              >
                Wait for an minute
              </Text>
            </View>
          ) : (
            <>
              {recipes.length === 0 ? (
                <View
                  style={{ height: height / 1.7, justifyContent: "center" }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: 22,
                    }}
                  >
                    No result Found : (
                  </Text>
                </View>
              ) : (
                <Recipe data={recipes} />
              )}
            </>
          )}
        </View>

        {!showFilter ? (
          <TouchableOpacity
            onPress={() => {
              setShowFilter(true);
            }}
            style={styles.filter}
          >
            <Icon name="layers" color="#fff" size={20} />
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 15,
                marginLeft: 10,
              }}
            >
              Search Options
            </Text>
          </TouchableOpacity>
        ) : (
          <Text>Feature Coming soon ..</Text>
        )}
        {/* {showFilter ? (
          <View style={styles.modelFilter}>
            <FilterModel
              setRecipes={setRecipes}
              query={query.length === 0 ? "Trending" : query}
              setShowFilter={setShowFilter}
              setLoading={setLoading}
              calories={calories}
              setCalories={setCalories}
              to={to}
              setTo={setTo}
              health={health}
              setHealth={setHealth}
              setQuery={setQuery}
            />
          </View>
        ) : (
          <Text></Text>
        )} */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    height: height - 52,
    justifyContent: "space-evenly",
  },
  contentContainer: {
    justifyContent: "center",
    flexDirection: "row",
  },
  title: {
    fontWeight: "bold",
    fontSize: 28,
    marginLeft: 12,
    marginBottom: 7,
  },
  filter: {
    backgroundColor: "#2DC268",
    flexDirection: "row",
    width: 200,
    marginLeft: 12,
    paddingVertical: 5,
    paddingHorizontal: 15,
    zIndex: 1,
    justifyContent: "center",
    elevation: 2,
    borderRadius: 10,
  },
  modelFilter: {
    position: "absolute",
    backgroundColor: "white",
    bottom: 0,
    width: width,
    height: height / 1.7,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    elevation: 10,
    justifyContent: "center",
    marginTop: 15,
  },
});
