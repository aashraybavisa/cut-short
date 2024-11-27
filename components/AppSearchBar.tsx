import { Pressable, StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";
import { TabBarIcon } from "./navigation/TabBarIcon";

const AppSearchBar = () => {
  const [searchText, setSearchText] = useState("");

  const onPressTouch = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.searchInputView}>
        <TextInput
          value={searchText}
          placeholder={"search nearby store"}
          onChangeText={(t) => setSearchText(t)}
          onSubmitEditing={onPressTouch}
          style={styles.searchTextInput}
        />
      </View>
      <Pressable style={styles.searchTouch} onPress={onPressTouch}>
        <TabBarIcon name={"search"} />
      </Pressable>
    </View>
  );
};

export default AppSearchBar;

const styles = StyleSheet.create({
  container: {
    height: "20%",
    width: "100%",
  },
  searchTouch: {},
  searchInputView: {},
  searchTextInput: {},
});
