import { StyleSheet, Text, useColorScheme } from "react-native";
import React from "react";
//
import AppContainer from "@/components/AppContainer";
import { Colors } from "@/constants/Colors";

const HomeTabScreen = () => {
  const colorScheme = useColorScheme() ?? "light";
  return (
    <AppContainer
      backgroundColor={Colors[colorScheme]?.background}
      isTopSafeArea
    >
      <Text>HomeTabScreen</Text>
    </AppContainer>
  );
};

export default HomeTabScreen;

const styles = StyleSheet.create({});
