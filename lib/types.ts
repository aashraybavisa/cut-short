import { Ionicons } from "@expo/vector-icons";

export interface TabListItem {
  routeName: string;
  title: string;
  activeIconName: keyof typeof Ionicons.glyphMap;
  blurIconName: keyof typeof Ionicons.glyphMap;
}