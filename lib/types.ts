import { Ionicons } from "@expo/vector-icons";
import React, { ReactNode } from "react";
import { StatusBarProps, ViewStyle } from "react-native";

export interface TabListItem {
  routeName: string;
  title: string;
  activeIconName: keyof typeof Ionicons.glyphMap;
  blurIconName: keyof typeof Ionicons.glyphMap;
}

export interface AppContainerProps {
  children: ReactNode;
  backgroundColor: StatusBarProps["backgroundColor"];
  isTopSafeArea?: boolean;
  isBottomSafeArea?: boolean;
  bottomColor?: ViewStyle["backgroundColor"];
}
