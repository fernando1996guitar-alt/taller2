import React, { useState } from "react";
import { StatusBar, Text, View, Alert, TouchableOpacity } from "react-native";
import { TitleComponent } from "../components/TitleComponent";
import { BodyComponent } from "../components/BodyComponent";
import { PRIMARY_COLOR } from "../commons/constants";
import { StylesGlobal } from "../theme/appTheme";
import { InputComponent } from "../components/InputComponent";
import { ButtonComponent } from "../components/ButtonComponent";
import { StackScreenProps } from "@react-navigation/stack";

interface Props extends StackScreenProps<any, any> {}

export const LoginScreen = ({ navigation }: Props) => {
  const [formLogin, setFormLogin] = useState({ email: "", password: "" });

  const handleChangeValue = (name: string, value: string) => {
    setFormLogin({ ...formLogin, [name]: value });
  };

  const handleLogin = () => {
    // Validación básica
    if (!formLogin.email || !formLogin.password) {
      Alert.alert("Error", "Por favor llena todos los campos");
      return;
    }
    
    console.log("--- INICIO EXITOSO ---");
    console.log(formLogin);
    Alert.alert("Bienvenido", `Inicio de Sesión Exitosa: ${formLogin.email}`);
  };

  return (
    <View>
      <StatusBar backgroundColor={PRIMARY_COLOR} />
      <TitleComponent title="Papelería El Fortín" />
      <BodyComponent>
        <Text style={StylesGlobal.titleWelcome}>Inicia sesión para continuar</Text>
        <View style={{ marginVertical: 20 }}>
          <InputComponent
            placeholder="Usuario / Correo electrónico"
            keyboardType="email-address"
            handleChangeValue={handleChangeValue}
            name="email"
          />
          <InputComponent
            placeholder="Contraseña"
            keyboardType="default"
            handleChangeValue={handleChangeValue}
            name="password"
            isPassword={true}
          />
        </View>
        <ButtonComponent buttonText="INGRESAR" onPress={handleLogin} />
        
        <TouchableOpacity 
            onPress={() => navigation.navigate("Register")}
            style={{ marginTop: 20, alignItems: 'center' }}>
            <Text style={{ color: PRIMARY_COLOR, textDecorationLine: 'underline' }}>
                ¿No tienes cuenta? Regístrate aquí
            </Text>
        </TouchableOpacity>
      </BodyComponent>
    </View>
  );
};