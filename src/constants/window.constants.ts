import { Dimensions } from "react-native";
import { I18nManager } from "react-native";

const { height: H, width: W } = Dimensions.get("window");

const isRTL = I18nManager.isRTL;

export { H, W, isRTL };
