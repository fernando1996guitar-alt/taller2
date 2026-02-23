import React, { ReactNode } from "react";
import { useWindowDimensions, View, ScrollView } from "react-native";
import { StylesGlobal } from "../theme/appTheme";

interface Props {
  children: ReactNode;
}

export const BodyComponent = ({ children }: Props) => {
  const { height } = useWindowDimensions();

  return (
    <View
      style={{
        ...StylesGlobal.ContainerBody,
        height: height * 0.80,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
    </View>
  );
};