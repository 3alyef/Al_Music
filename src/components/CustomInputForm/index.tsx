import {
  Animated,
  StyleProp,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import React, { useRef, useState } from "react";
import { styles } from "./styles/styles";
import { isRTL } from "../../constants/window.constants";
import InputHandlers from "./utils/InputHandlers";

interface PropsCustomInputForm {
  onChangeText?: (text: string) => void;
  placeHolder?: string;
  labelColor?: string;
  autoComplete?: TextInputProps["autoComplete"];
  containerStyle?: StyleProp<ViewStyle>;
}
export default function CustomInputForm({
  placeHolder,
  labelColor,
  autoComplete,
  containerStyle,
  onChangeText,
}: PropsCustomInputForm) {
  const [text, setText] = useState("");
  const [isFocused, setFocused] = useState(false);
  const labelPosition = useRef(new Animated.Value(text ? 1 : 0)).current;
  const labelStyle: Animated.AnimatedProps<TextStyle> = {
    top: labelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [17, -6.5],
      // se inputRange === 0 outputRange = 17
      // se inputRange === 1 outputRange = 0
    }),
    fontSize: labelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 14],
    }),
    color: labelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: ["gray", "#888"],
    }),
  };

  const textInputStyle: Animated.AnimatedProps<ViewStyle> = {
    borderWidth: labelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    }),
  };

  const inputRef = useRef<TextInput>(null);

  const inputHandlers = new InputHandlers({
    setFocused,
    text,
    setText,
    onChangeText,
    labelPosition,
    isFocused,
  });
  return (
    <View style={containerStyle}>
      <View style={styles.innerContainer}>
        <Animated.Text
          style={[
            styles.labelContainer,
            {
              color: labelColor || "gray",
              left: isRTL ? 0 : 10,
              right: isRTL ? 10 : 0,
            },
            labelStyle,
          ]}
          onPress={() => inputRef.current?.focus()}
        >
          <Text style={styles.label}>{placeHolder}</Text>
        </Animated.Text>
        <Animated.View style={[styles.innerContainerInput, textInputStyle]}>
          <TextInput
            ref={inputRef}
            style={styles.InputText}
            onChangeText={inputHandlers.handleTextChange.bind(inputHandlers)}
            value={text}
            autoComplete={autoComplete}
            onFocus={inputHandlers.handleFocus.bind(inputHandlers)}
            onBlur={inputHandlers.handleBlur.bind(inputHandlers)}
            // o uso de bind(inputHandlers) mantem o contexto do objeto
          />
        </Animated.View>
      </View>
    </View>
  );
}
