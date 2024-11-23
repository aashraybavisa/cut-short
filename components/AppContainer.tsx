import React from "react";
import { View, StatusBar, SafeAreaView } from "react-native";
// relative
import { AppContainerProps } from "@/lib/types";
import gStyles from "@/constants/Styles";

const AppContainer: React.FC<AppContainerProps> = (props) => {
  const { backgroundColor, isTopSafeArea, isBottomSafeArea, bottomColor } =
    props;
  const TopComponent = isTopSafeArea ? SafeAreaView : View;
  const BottomComponent = isBottomSafeArea ? SafeAreaView : View;
  return (
    <View style={gStyles.flex1}>
      <TopComponent style={{ backgroundColor }} />
      <StatusBar backgroundColor={backgroundColor} />
      <View style={gStyles.flex1} children={props.children} />
      <BottomComponent style={{ backgroundColor: bottomColor }} />
    </View>
  );
};

export default AppContainer;

AppContainer.defaultProps = {
  bottomColor: "transparent",
  isTopSafeArea: false,
  isBottomSafeArea: false,
};
