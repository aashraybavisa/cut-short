import { StyleSheet, Switch, Text, Appearance, View } from "react-native";
import React, { useState } from "react";
import AppContainer from "@/components/AppContainer";
import { Colors } from "@/constants/Colors";
import { isMobile } from "@/utils/Responsive";

const AccountTabScreen = () => {
  const [currentTheme, setCurrentTheme] = useState(
    Appearance.getColorScheme() ?? "light"
  );
  const toggleSwitch = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    Appearance.setColorScheme(newTheme);
    setCurrentTheme(newTheme);
  };

  const renderToggleAppearance = () => {
    const lightTextColor =
      currentTheme === "light"
        ? Colors[currentTheme].tabIconSelected
        : Colors[currentTheme].tabIconDefault;
    const darkTextColor =
      currentTheme === "dark"
        ? Colors[currentTheme].tabIconSelected
        : Colors[currentTheme].tabIconDefault;
    return (
      <View style={styles.toggleContainer}>
        <Text style={[styles.toggleText, { color: lightTextColor }]}>
          {"Light"}
        </Text>
        <Switch onValueChange={toggleSwitch} value={currentTheme === "dark"} />
        <Text style={[styles.toggleText, { color: darkTextColor }]}>
          {"Dark"}
        </Text>
      </View>
    );
  };
  return (
    <AppContainer>
      <Text
        style={[
          styles.toggleText,
          { color: Colors[currentTheme].tabIconDefault },
        ]}
      >
        account
      </Text>
      {isMobile && renderToggleAppearance()}
    </AppContainer>
  );
};

export default AccountTabScreen;

const styles = StyleSheet.create({
  toggleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
  },
  toggleText: {
    fontSize: 16,
    fontWeight: "600",
  },
});
