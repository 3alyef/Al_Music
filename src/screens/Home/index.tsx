import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text } from "react-native";
import { StackTypes } from "src/navigation/types/StackTypes";

export default function Home() {
  const navigation = useNavigation<StackTypes>();
  return (
    <>
      <Text>Home</Text>
    </>
  );
}
