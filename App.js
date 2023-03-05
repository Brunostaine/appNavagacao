import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./src/pages/Home";
import Sobre from "./src/pages/sobre";
import Contato from "./src/pages/Contato";

import Feather from 'react-native-vector-icons/Feather'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      // Aqui no Navigator manipular todas as telas de uma vez
        screenOptions={{
          // Esconde ou mostra o header das paginas
          headerShown: false,
          // Esconde a tabBar quando o teclado estiver ativo
          tabBarHideOnKeyboard: true,
          // Para esconder o nome e deixar só o icone por padrao vem true
          tabBarShowLabel: false,
          // Cor da tab que esta ativa
          tabBarActiveTintColor: '#FFF',
          // Styles da tabBar
          tabBarStyle: {
            backgroundColor: '#202225'
          }
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            // tabBarLabel: 'INICIO'
            tabBarIcon: ({color, size}) => {
              return <Feather name='home' color={color} size={size} />
            }
          }}
        />
        <Tab.Screen
          name="Sobre"
          component={Sobre}
          options={{
            tabBarIcon: ({color, size}) => {
              return <Feather name='file-text' color={color} size={size} /> 
            }
          }}
        />
        <Tab.Screen
          name="Contato"
          component={Contato}
          options={{
            // Posso tirar o header de algum ou de todos aqui nessa configuração esta sendo individual
            // headerShown: false, 
            tabBarIcon: ({color, size}) => {
              return <Feather name='phone-call' color={color} size={size} />
            }
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  )
}        