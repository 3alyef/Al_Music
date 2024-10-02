import { StyleSheet } from "react-native";
import { globalStyles } from "../../../styles/globalStyles";

export const styles = StyleSheet.create({
  InputText: {
    color: "black",
  },
  innerContainer: {
    height: 50,
    justifyContent: "center",
    padding: 3,
  },
  innerContainerInput: {
    borderColor: "#aaa",
    borderRadius: 3,
    paddingLeft: 10,
    paddingRight: 10,
    zIndex: 0,
  },
  label: {
    backgroundColor: globalStyles.appBackground.backgroundColor,
    borderRadius: 3,
    padding: 4,
  },
  labelContainer: {
    justifyContent: "flex-start",
    position: "absolute",
    zIndex: 1,
  },
});
