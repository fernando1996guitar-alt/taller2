import React, { useState } from "react";
import {
  KeyboardTypeOptions,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { StylesGlobal } from "../theme/appTheme";

interface Props {
  placeholder: string;
  keyboardType: KeyboardTypeOptions;
  handleChangeValue: (name: string, value: string) => void;
  name: string;
  isPassword?: boolean;
}

export const InputComponent = ({
  placeholder,
  keyboardType,
  handleChangeValue,
  name,
  isPassword = false,
}: Props) => {
  // Estado para ocultar/mostrar texto
  const [isHidden, setIsHidden] = useState(isPassword);

  return (
    <View style={StylesGlobal.containerInput}>
      <TextInput
        placeholder={placeholder}
        keyboardType={keyboardType}
        onChangeText={(value) => handleChangeValue(name, value)}
        secureTextEntry={isHidden}
        style={StylesGlobal.input}
      />
      {isPassword && (
        <TouchableOpacity
          onPress={() => setIsHidden(!isHidden)}
          style={{ position: "absolute", right: 40, top: 15 }}
        >
          <Text style={{ fontSize: 12, color: "#495057" }}>
            {isHidden ? "MOSTRAR" : "OCULTAR"}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
