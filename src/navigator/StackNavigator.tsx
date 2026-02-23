import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../screens/LoginScreen";
import { RegisterScreen } from "../screens/RegisterScreen";
import { PRIMARY_COLOR } from "../commons/constants";

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Register" // <--- Esto asegura que inicie en Registro
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: PRIMARY_COLOR },
      }}
    >
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};