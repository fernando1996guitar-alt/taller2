import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../screens/LoginScreen";
import { RegisterScreen } from "../screens/RegisterScreen";
import { HomeScreen } from "../screens/HomeScreen/HomeScreen";
import { PRIMARY_COLOR } from "../commons/constants";

// 1. Definimos las rutas para evitar el uso de 'any'
export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
};

// 2. Interfaz de usuario basada en tu formulario de registro
export interface User {
  nombre: string;
  email: string;
  telefono: string;
  password: string;
}

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  // 3. DATOS QUEMADOS (Aquí es donde los agregamos)
  const initialUsers: User[] = [
    {
      nombre: "Jhon Andrade",
      email: "fersk8@gmail.com",
      password: "123456",
      telefono: "0999999999",
    },
    {
      nombre: "Ana Caldo",
      email: "ana@gmail.com",
      password: "123456",
      telefono: "0888888888",
    },
  ];

  // 4. Inicializamos el estado con los usuarios quemados
  const [listUsers, setListUsers] = useState<User[]>(initialUsers);

  const handleAddUser = (user: User) => {
    setListUsers([...listUsers, user]);
  };

  return (
    <Stack.Navigator
      initialRouteName="Login" // Inicia en el Login como pediste
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: PRIMARY_COLOR },
      }}
    >
      <Stack.Screen name="Login">
        {(props) => <LoginScreen {...props} users={listUsers} />}
      </Stack.Screen>

      <Stack.Screen name="Register">
        {(props) => <RegisterScreen {...props} handleAddUser={handleAddUser} />}
      </Stack.Screen>

      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};
