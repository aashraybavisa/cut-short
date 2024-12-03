import { Tabs } from "expo-router";
import React from "react";
import _ from "lodash";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { tabList, themes } from "@/constants/Consts";
import AppTabBar from "@/components/AppTabBar";

const TabLayout = () => {
  const colorScheme = useColorScheme() ?? themes.light;
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors[colorScheme].background,
          borderTopLeftRadius: 20,
          marginLeft: 10,
        },
      }}
      tabBar={(props) => <AppTabBar {...props} />}
    >
      {_.map(tabList, (item, index) => {
        const { routeName, title, activeIconName, blurIconName } = item;
        return (
          <Tabs.Screen
            key={`tabScreen-${index}`}
            name={routeName}
            options={{
              title,
              tabBarIcon: ({ color, focused }) => {
                const name = focused ? activeIconName : blurIconName;
                return <TabBarIcon name={name} color={color} />;
              },
            }}
          />
        );
      })}
    </Tabs>
  );
};

export default TabLayout;
