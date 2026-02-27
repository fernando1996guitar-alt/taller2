import React from "react";
import { Text, useWindowDimensions, View } from "react-native";
import { StylesGlobal } from "../theme/appTheme";

interface Props {
  title: string;
}

export const TitleComponent = ({ title }: Props) => {
  const { height } = useWindowDimensions();
  return (
    <View style={{ height: height * 0.12, justifyContent: "center" }}>
      <Text style={StylesGlobal.title}>{title}</Text>
    </View>
  );
};
