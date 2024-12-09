import {
  Pressable,
  StyleSheet,
  TextInput,
  useColorScheme,
  View,
} from "react-native";
import React, { useState } from "react";
//
import { TabBarIcon } from "./navigation/TabBarIcon";
import { font, heightPx, widthPx } from "@/utils/Responsive";
import gStyles from "@/constants/Styles";
import { Colors } from "@/constants/Colors";

const AppSearchBar = () => {
  // Const
  const CC = Colors[useColorScheme() ?? "light"];
  // State
  const [searchText, setSearchText] = useState("");
  const [searchActive, setSearchActive] = useState(false);

  // Function
  const onPressTouch = () => {
    // search api call
  };

  const onLongPress = () => setSearchActive((t) => !t);

  // Render
  const renderSearchTextInput = () => {
    return (
      <View style={styles.searchInputView}>
        <TextInput
          value={searchText}
          placeholder={"search nearby store"}
          onChangeText={(t) => setSearchText(t)}
          onSubmitEditing={onPressTouch}
          style={[styles.searchTextInput, { color: CC?.text }]}
        />
      </View>
    );
  };

  const renderSearchButton = () => {
    return (
      <Pressable
        style={[styles.searchTouch, { backgroundColor: CC?.tint }]}
        onPress={onPressTouch}
        onLongPress={onLongPress}
      >
        <TabBarIcon name={"search"} color={CC?.background} />
      </Pressable>
    );
  };

  // Return
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: CC?.background,
          borderColor: CC?.tint,
        },
      ]}
    >
      {searchActive && renderSearchTextInput()}
      {renderSearchButton()}
    </View>
  );
};

export default AppSearchBar;

const styles = StyleSheet.create({
  container: {
    height: heightPx(8),
    flexDirection: "row",
    borderRadius: 50,
    marginVertical: widthPx(2),
    marginHorizontal: "2.5%",
    alignSelf: "center",
    alignItems: "center",
    overflow: "hidden",
    // borderWidth: 2,
  },
  searchTouch: {
    borderRadius: 50,
    height: "90%",
    aspectRatio: 1,
    margin: widthPx(1),
    ...gStyles.center,
  },
  searchInputView: {
    flex: 1,
    marginHorizontal: widthPx(3),
  },
  searchTextInput: {
    fontSize: font(6),
  },
});
