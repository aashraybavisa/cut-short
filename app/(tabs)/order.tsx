import { StyleSheet, Text, useColorScheme } from "react-native";
import React from "react";
//
import AppContainer from "@/components/AppContainer";
import { Colors } from "@/constants/Colors";

const OrderTabScreen = () => {
  const colorScheme = useColorScheme() ?? "light";
  return (
    <AppContainer
      backgroundColor={Colors[colorScheme]?.background}
      isTopSafeArea
    >
      <Text>OrderTabScreen</Text>
    </AppContainer>
  );
};

export default OrderTabScreen;

const styles = StyleSheet.create({});
