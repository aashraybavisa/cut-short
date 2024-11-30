import { StyleSheet, Text, useColorScheme } from "react-native";
import React from "react";
import AppContainer from "@/components/AppContainer";
import { Colors } from "@/constants/Colors";
import AppHeader from "@/components/AppHeader";
import AppSearchBar from "@/components/AppSearchBar";

const ExploreTabScreen = () => {
  const colorScheme = useColorScheme() ?? "light";
  return (
    <AppContainer
      backgroundColor={Colors[colorScheme]?.background}
      isTopSafeArea
    >
      <AppHeader />
      <AppSearchBar />
      <Text>ExploreTabScreen</Text>
    </AppContainer>
  );
};

export default ExploreTabScreen;

const styles = StyleSheet.create({});
