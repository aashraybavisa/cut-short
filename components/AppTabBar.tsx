import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import React, { useState } from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import _ from "lodash";
// components
import { TabBarIcon } from "./navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import gStyles from "@/constants/Styles";
import { tabList } from "@/constants/Consts";
import { TabListItem } from "@/lib/types";
import { heightPx, widthPx } from "@/utils/Responsive";

const AppTabBar: React.FC<BottomTabBarProps> = (props) => {
  const { state, navigation } = props;
  const [showTitle, setShowTitle] = useState(false);
  const colorScheme = useColorScheme() ?? "light";

  const onPressTabItem = (item: TabListItem) =>
    navigation.navigate(item?.routeName);

  const renderTabItem = (item: TabListItem, index: number) => {
    const { activeIconName, blurIconName, title } = item;
    const isActiveTabItem = state?.index === index;
    const iconName = isActiveTabItem ? activeIconName : blurIconName;
    const color = isActiveTabItem
      ? Colors[colorScheme].tabIconSelected
      : Colors[colorScheme].tabIconDefault;
    return (
      <TouchableOpacity
        style={[styles.tabItemTouch, showTitle && styles.additionalTouchStyle]}
        key={`tabItem-${index}`}
        onPress={() => onPressTabItem(item)}
        onLongPress={() => setShowTitle((t) => !t)}
      >
        <TabBarIcon
          name={iconName}
          color={color}
          size={widthPx(showTitle ? 8 : 10)}
          style={styles.touchIcon}
        />
        {showTitle && (
          <Text style={[styles.tabItemText, { color }]}>{title}</Text>
        )}
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
    marginHorizontal: "1%",
    marginVertical: "2%",
    borderRadius: 15,
    flex: 1,
  },
  additionalTouchStyle: {
    marginHorizontal: "0%",
    marginVertical: "0%",
  },
  touchIcon: {
    flex: 1,
  },
  tabItemText: {
    marginTop: "10%",
    fontSize: 16,
    fontWeight: "600",
  },
});
