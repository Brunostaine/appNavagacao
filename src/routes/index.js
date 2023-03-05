import { createDrawerNavigator } from "@react-navigation/drawer";

import Contato from "../pages/Contato";
import Sobre from "../pages/sobre";
import StackRoutes from "./stackRoutes";

const Drawer = createDrawerNavigator();

export default function Routes() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name='HomeStack'
                component={StackRoutes}
            />
            <Drawer.Screen
                name='sobre'
                component={Sobre}
            />
            <Drawer.Screen
                name='Contato'
                component={Contato}
            />
        </Drawer.Navigator>

    )
}        