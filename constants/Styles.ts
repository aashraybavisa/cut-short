import { moderateScale } from "@/utils/Responsive";
import { StyleSheet } from "react-native";

const gStyles = StyleSheet.create({
  flex1: { flex: 1 },
  center: { alignItems: "center", justifyContent: "center" },
  shadow5: {
    elevation: 5,
    shadowOffset: {
      height: moderateScale(5),
      width: moderateScale(5),
    },
  },
});

export default gStyles;
