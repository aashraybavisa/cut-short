import { Pressable, StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { TabBarIcon } from "./navigation/TabBarIcon";

const AppSearchBar = () => {

  const onPressTouch = () => {}

  return (
    <View style={styles.container}>
      <View>
        <TextInput value={""} placeholder={'search nearby store'} />
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
  searchTouch:{

  }
});
