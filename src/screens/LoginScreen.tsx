import React, { useState } from "react";
import { Alert, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { TitleComponent } from "../components/TitleComponent";
import { PRIMARY_COLOR } from "../commons/constants";
import { BodyComponent } from "../components/BodyComponent";
import { StylesGlobal } from "../theme/appTheme";
import { InputComponent } from "../components/InputComponent";
import { ButtonComponent } from "../components/ButtonComponent";
import Icon from "@expo/vector-icons/MaterialIcons";
import { StackScreenProps } from "@react-navigation/stack";
import { User, RootStackParamList } from "../navigator/StackNavigator";

interface Props extends StackScreenProps<RootStackParamList, "Login"> {
  users: User[];
}

export const LoginScreen = ({ navigation, users }: Props) => {
  const [formLogin, setFormLogin] = useState({ email: "", password: "" });
  const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

  const handleChangeValue = (name: string, value: string): void => {
    setFormLogin({ ...formLogin, [name]: value });
  };

  const handleSignIn = (): void => {
    if (formLogin.email === "" || formLogin.password === "") {
      Alert.alert("Error", "Por favor, complete todos los campos");
      return;
    }

    const user = users.find(
      (u) => u.email === formLogin.email && u.password === formLogin.password,
    );

    if (!user) {
      Alert.alert("Error", "Usuario o contraseña incorrectos");
      return;
    }

    navigation.navigate("Home");
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={PRIMARY_COLOR} />
      <TitleComponent title="Papelería El Fortín" />
      <BodyComponent>
        <Text style={StylesGlobal.titleWelcome}>Bienvenido de nuevo</Text>
        <Text>Inicie sesión para gestionar sus suministros</Text>

        <View style={StylesGlobal.containerInput}>
          <InputComponent
            placeholder="Correo Electrónico"
            keyboardType="email-address"
            handleChangeValue={handleChangeValue}
            name="email"
          />
          <View>
            <InputComponent
              placeholder="Contraseña"
              keyboardType="default"
              handleChangeValue={handleChangeValue}
              name="password"
              isPassword={hiddenPassword}
            />
            <Icon
              name={hiddenPassword ? "visibility" : "visibility-off"}
              color={PRIMARY_COLOR}
              size={22}
              style={{ position: "absolute", right: 15, top: 18 }}
              onPress={() => setHiddenPassword(!hiddenPassword)}
            />
          </View>
        </View>

        <ButtonComponent buttonText="INGRESAR" onPress={handleSignIn} />

        <TouchableOpacity
          style={{ marginTop: 25, alignItems: "center" }}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={{ color: PRIMARY_COLOR, fontWeight: "bold" }}>
            ¿No tienes una cuenta?{" "}
            <Text style={{ textDecorationLine: "underline" }}>
              Regístrate ahora
            </Text>
          </Text>
        </TouchableOpacity>
      </BodyComponent>
    </View>
  );
};
