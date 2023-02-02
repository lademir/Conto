import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Counters from "../screens/Counters";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen name="counters" component={Counters} />
        </Navigator>
    );
}