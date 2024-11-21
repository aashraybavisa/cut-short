import { StyleSheet } from "react-native";
import React from "react";
import gStyles from "@/constants/Styles";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const AppContainer = (props: any) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.mainContainer}>{props.children}</SafeAreaView>
    </SafeAreaProvider>
  );
};

export default AppContainer;

const styles = StyleSheet.create({
  mainContainer: {
    ...gStyles.flex1,
    ...gStyles.center,
    width: "90%",
    alignSelf: "center",
  },
});
