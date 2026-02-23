import React, { useState } from "react";
import { StatusBar, Text, View, Alert } from "react-native";
import { TitleComponent } from "../components/TitleComponent";
import { BodyComponent } from "../components/BodyComponent";
import { PRIMARY_COLOR } from "../commons/constants";
import { StylesGlobal } from "../theme/appTheme";
import { InputComponent } from "../components/InputComponent";
import { ButtonComponent } from "../components/ButtonComponent";
import { StackScreenProps } from "@react-navigation/stack";

interface Props extends StackScreenProps<any, any> {}

export const RegisterScreen = ({ navigation }: Props) => {
  const [formRegister, setFormRegister] = useState({
    nombre: "",
    email: "",
    telefono: "",
    password: "",
  });

  const handleChangeValue = (name: string, value: string) => {
    setFormRegister({ ...formRegister, [name]: value });
  };

  const handleRegister = () => {
    // Mostrar en CMD la información capturada
    console.log("--- DATOS DE REGISTRO ---");
    console.log(formRegister);
    Alert.alert("Usuario Registrado Exitosamente");
    navigation.navigate("Login");
  };

  return (
    <View>
      <StatusBar backgroundColor={PRIMARY_COLOR} />
      <TitleComponent title="Papelería El Fortín" />
      <BodyComponent>
        <Text style={StylesGlobal.titleWelcome}>Crea tu cuenta de registro</Text>
        <View style={{ marginVertical: 10 }}>
          <InputComponent
            placeholder="Nombre Completo"
            keyboardType="default"
            handleChangeValue={handleChangeValue}
            name="nombre"
          />
          <InputComponent
            placeholder="Correo Electrónico"
            keyboardType="email-address"
            handleChangeValue={handleChangeValue}
            name="email"
          />
          <InputComponent
            placeholder="Teléfono"
            keyboardType="numeric"
            handleChangeValue={handleChangeValue}
            name="telefono"
          />
          <InputComponent
            placeholder="Contraseña"
            keyboardType="default"
            handleChangeValue={handleChangeValue}
            name="password"
            isPassword={true}
          />
        </View>
        <ButtonComponent buttonText="REGISTRARSE" onPress={handleRegister} />
      </BodyComponent>
    </View>
  );
};