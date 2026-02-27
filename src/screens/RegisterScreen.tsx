import React, { useState } from "react";
import { Alert, StatusBar, Text, View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { User, RootStackParamList } from "../navigator/StackNavigator";
import { PRIMARY_COLOR } from "../commons/constants";
import { TitleComponent } from "../components/TitleComponent";
import { BodyComponent } from "../components/BodyComponent";
import { InputComponent } from "../components/InputComponent";
import { ButtonComponent } from "../components/ButtonComponent";
import { StylesGlobal } from "../theme/appTheme";

// Definimos la interfaz sin 'any'
interface Props extends StackScreenProps<RootStackParamList, "Register"> {
  handleAddUser: (user: User) => void;
}

export const RegisterScreen = ({ navigation, handleAddUser }: Props) => {
  const [formRegister, setFormRegister] = useState<User>({
    nombre: "",
    email: "",
    telefono: "",
    password: "",
  });

  const handleChangeValue = (name: string, value: string) => {
    setFormRegister({ ...formRegister, [name]: value });
  };

  const handleRegister = () => {
    // Verificación de campos vacíos
    if (!formRegister.nombre || !formRegister.email || !formRegister.password) {
      Alert.alert("Error", "Por favor, llene todos los campos obligatorios");
      return;
    }

    // --- CAPTURA DE DATOS EN CMD ---
    console.log("================================");
    console.log("NUEVO USUARIO REGISTRADO");
    console.log("Nombre:", formRegister.nombre);
    console.log("Email:", formRegister.email);
    console.log("Teléfono:", formRegister.telefono);
    console.log("Password:", formRegister.password);
    console.log("================================");

    // Guardar en el estado global
    handleAddUser(formRegister);

    Alert.alert("Éxito", "Usuario Registrado Exitosamente");
    navigation.navigate("Login");
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={PRIMARY_COLOR} />
      <TitleComponent title="Registro de Usuario" />
      <BodyComponent>
        <Text style={StylesGlobal.titleWelcome}>Crea tu nueva cuenta</Text>
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
