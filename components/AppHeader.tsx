import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
// components
import { Colors } from "@/constants/Colors";
import gStyles from "@/constants/Styles";
import { TabBarIcon } from "./navigation/TabBarIcon";
import { font, heightPx, widthPx } from "@/utils/Responsive";

interface AppHeaderProps {
  isBackButton?: boolean;
  title?: string;
}

const AppHeader: React.FC<AppHeaderProps> = (props) => {
  const { isBackButton = false, title = false } = props;
  const navigation = useNavigation();

  const onPressBack = () => navigation?.goBack();

  const renderBackTouch = () => {
    const backColor = Colors[colorScheme]?.icon;
    return (
      <TouchableOpacity style={styles.backTouch} onPress={onPressBack}>
        <TabBarIcon name={"chevron-back"} color={backColor} />
      </TouchableOpacity>
    );
  };

  const colorScheme = useColorScheme() ?? "light";
  const backgroundColor = Colors[colorScheme]?.background;
  const textColor = Colors[colorScheme]?.tint;
  return (
    <View style={[styles.container, { backgroundColor }]}>
      {isBackButton && renderBackTouch()}
      <Text style={[styles.titleText, { color: textColor }]}>
        {title || "CutShort"}
      </Text>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    height: heightPx(8),
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  titleText: {
    fontSize: font(8),
    fontWeight: "600",
    flex: 1,
    textAlign: "center",
  },
  backTouch: {
    height: "80%",
    aspectRatio: 1,
    ...gStyles.center,
    marginHorizontal: widthPx(1),
  },
});
