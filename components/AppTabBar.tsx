import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import React from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import _ from "lodash";

import { TabBarIcon } from "./navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import gStyles from "@/constants/Styles";
import { tabList } from "@/constants/Consts";
import { TabListItem } from "@/lib/types";
import { heightPx } from "@/utils/Responsive";

const AppTabBar: React.FC<BottomTabBarProps> = (props) => {
  const { state, navigation } = props;
  const colorScheme = useColorScheme() ?? "light";

  const onPressTabItem = (item: TabListItem) => {
    navigation.navigate(item?.routeName);
  };

  const renderTabItem = (item: TabListItem, index: number) => {
    const { activeIconName, blurIconName, title } = item;
    const isActiveTabItem = state?.index === index;
    const iconName = isActiveTabItem ? activeIconName : blurIconName;
    const color = isActiveTabItem
      ? Colors[colorScheme].tabIconSelected
      : Colors[colorScheme].tabIconDefault;
    return (
      <TouchableOpacity
        style={styles.tabItemTouch}
        key={`tabItem-${index}`}
        onPress={() => onPressTabItem(item)}
      >
        <TabBarIcon name={iconName} color={color} />
        <Text style={[styles.tabItemText, { color }]}>{title}</Text>
      </TouchableOpacity>
    );
  };

  const { background } = Colors[colorScheme];
  return (
    <View style={[styles.container, { backgroundColor: background }]}>
      <View style={styles.tabContainer}>
        {_.map(tabList, (item, index) => renderTabItem(item, index))}
      </View>
      {/* <SafeAreaView /> */}
    </View>
  );
};

export default AppTabBar;

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    width: "90%",
    height: "8%",
    marginBottom: heightPx(3),
    borderRadius: 20,
    overflow: "hidden",
    // ...gStyles.shadow5,
  },
  tabContainer: {
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  tabItemTouch: {
    ...gStyles.center,
    paddingHorizontal: "3%",
    paddingVertical: "2%",
    borderRadius: 15,
  },
  tabItemText: {
    marginTop: "10%",
    fontSize: 16,
    fontWeight: "600",
  },
});
