import { StyleSheet } from "react-native";
import { globalStyles } from "../../../styles/globalStyles";

export const styles = StyleSheet.create({
  innerContainer: {
    padding: 3,
    height: 50,
    justifyContent: "center",
  },
  innerContainerInput: {
    zIndex: 0,
    borderColor: "#aaa",
    borderRadius: 3,
    paddingLeft: 10,
    paddingRight: 10,
  },
  InputText: {
    color: "black",
  },
  labelContainer: {
    position: "absolute",
    zIndex: 1,
    justifyContent: "flex-start",
  },
  label: {
    padding: 4,
    borderRadius: 3,
    backgroundColor: globalStyles.appBackground.backgroundColor,
  },
});
