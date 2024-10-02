import { Dispatch, SetStateAction } from "react";
import { Animated } from "react-native";

interface PropsInputHandlers {
  setFocused: React.Dispatch<React.SetStateAction<boolean>>;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  onChangeText?: (text: string) => void;
  labelPosition: Animated.Value;
  isFocused: boolean;
}

export default class InputHandler {
  private setFocused: Dispatch<SetStateAction<boolean>>;
  private text: string;
  private setText: React.Dispatch<React.SetStateAction<string>>;
  private onChangeText?: (text: string) => void;
  private labelPosition: Animated.Value;
  private isFocused: boolean;

  constructor({
    setFocused,
    text,
    setText,
    onChangeText,
    labelPosition,
    isFocused,
  }: PropsInputHandlers) {
    this.setFocused = setFocused;
    this.text = text;
    this.setText = setText;
    this.onChangeText = onChangeText;
    this.labelPosition = labelPosition;
    this.isFocused = isFocused;
  }

  animatedLabel(toValue: number) {
    Animated.timing(this.labelPosition, {
      toValue: toValue,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }

  handleFocus() {
    this.setFocused(true);
    this.animatedLabel(1);
  }

  handleBlur() {
    this.setFocused(false);
    if (this.text.length === 0) {
      this.animatedLabel(0);
    }
  }

  handleTextChange(text: string) {
    this.setText(text);

    if (this.onChangeText) {
      this.onChangeText(text);
    }

    if (text) {
      this.animatedLabel(1);
    } else {
      this.animatedLabel(this.isFocused ? 1 : 0);
    }
  }
}
