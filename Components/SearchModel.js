import React from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";
import { getRecipeByQuery } from "../client";

export default function SearchModel({
  query,
  setQuery,
  setRecipes,
  setLoading,
  setNum,
}) {
  const handleSearchRecipe = () => {
    setLoading(true);
    // console.log(setNum.label);
    // console.log(typeof setNum.label);
    getRecipeByQuery(
      query.length === 0 ? "All" : query,
      0,
      parseInt(setNum.label)
    )
      .then(({ hits }) => {
        if (!hits) {
          return;
        }
        setRecipes(hits);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  };
  return (
    <View style={styles.searchSection}>
      <Image
        source={require("../assets/icons/search.png")}
        style={styles.searchIcon}
      />
      <TextInput
        value={query}
        onChangeText={(e) => setQuery(e)}
        placeholderTextColor="#A5ACAE"
        style={styles.input}
        onSubmitEditing={handleSearchRecipe}
        placeholder="Search Recipes..."
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginHorizontal: 5,
    marginVertical: 20,
    borderRadius: 40,
    alignItems: "center",
  },
  searchIcon: {
    width: 25,
    height: 22,
    marginLeft: 20,
    backgroundColor: "white",
    marginRight: 10,
  },

  input: {
    backgroundColor: "#fff",
    color: "#818c88",
    fontWeight: "bold",
    flex: 0.93,
  },
});
