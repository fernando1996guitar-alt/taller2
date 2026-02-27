import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { StylesGlobal } from "../theme/appTheme";

interface Props {
  buttonText: string;
  onPress: () => void;
}

export const ButtonComponent = ({ buttonText, onPress }: Props) => {
  return (
    <TouchableOpacity
      style={StylesGlobal.button}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={StylesGlobal.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};
