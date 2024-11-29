import { Pressable, StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";
import { TabBarIcon } from "./navigation/TabBarIcon";
import { font, heightPx, widthPx } from "@/utils/Responsive";
import gStyles from "@/constants/Styles";

const AppSearchBar = () => {
  const [searchText, setSearchText] = useState("");

  const onPressTouch = () => {
    // search api call
  };

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
    height: heightPx(8),
    width: "95%",
    flexDirection: "row",
    borderRadius: 25,
    marginVertical: widthPx(2),
    alignSelf: "center",
    borderWidth: 2,
    ...gStyles.border,
    alignItems: "center",
    overflow: "hidden",
  },
  searchTouch: {
    width: widthPx(15),
    height: "100%",
    ...gStyles.center,
    borderLeftWidth: 2,
    ...gStyles.border,
  },
  searchInputView: {
    flex: 1,
    marginHorizontal: widthPx(3),
  },
  searchTextInput: {
    fontSize: font(6),
  },
});
