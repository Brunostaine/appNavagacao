import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/pages/Home";
import Sobre from "./src/pages/sobre";
import Contato from "./src/pages/Contato";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Tela de Inicio',
            headerStyle: { backgroundColor: '#121212' },
            headerTintColor: '#FFF',
            // Tirar o header
            headerShown: false
          }} />
        <Stack.Screen name="Sobre" component={Sobre} />
        <Stack.Screen name="Contato" component={Contato} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}