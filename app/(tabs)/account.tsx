import {
  StyleSheet,
  Switch,
  Text,
  Appearance,
  View,
  ColorSchemeName,
} from "react-native";
import React, { useState } from "react";
//
import AppContainer from "@/components/AppContainer";
import { Colors } from "@/constants/Colors";
import { isMobile } from "@/utils/Responsive";
import AppHeader from "@/components/AppHeader";
import { themes } from "@/constants/Consts";

const AccountTabScreen = () => {
  const [currentTheme, setCurrentTheme] = useState<ColorSchemeName | string>(
    Appearance.getColorScheme()
  );
  const toggleSwitch = () => {
    const newTheme = currentTheme === themes.light ? themes.dark : themes.light;
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
    <AppContainer
      backgroundColor={Colors[currentTheme]?.background}
      isTopSafeArea
    >
      <AppHeader />
      <View>
        <Text
          style={[
            styles.toggleText,
            { color: Colors[currentTheme].tabIconDefault },
          ]}
        >
          account
        </Text>
        {isMobile && renderToggleAppearance()}
      </View>
    </AppContainer>
  );
};

export default AccountTabScreen;

const styles = StyleSheet.create({
  toggleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "90%",
  },
  toggleText: {
    fontSize: 16,
    fontWeight: "600",
  },
});
