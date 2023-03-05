import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";



import Feather from 'react-native-vector-icons/Feather';
import Contato from "../pages/Contato";
import Sobre from "../pages/sobre";
import StackRoutes from "./stackRoutes";

const Tab = createBottomTabNavigator();

export default function Routes() {
    return (

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
                name="HomeStack"
                component={StackRoutes}
                options={{
                    // tabBarLabel: 'INICIO'
                    tabBarIcon: ({ color, size }) => {
                        return <Feather name='home' color={color} size={size} />
                    }
                }}
            />
            <Tab.Screen
                name="Sobre"
                component={Sobre}
                options={{
                    tabBarIcon: ({ color, size }) => {
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
                    tabBarIcon: ({ color, size }) => {
                        return <Feather name='phone-call' color={color} size={size} />
                    }
                }}
            />

        </Tab.Navigator>

    )
}        