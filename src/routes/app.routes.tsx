import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AddCounter } from "../screens/AddCounter";
import Counters from "../screens/Counters";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen name="home" component={Counters} />
            <Screen name="add" component={AddCounter} />
        </Navigator>
    );
}