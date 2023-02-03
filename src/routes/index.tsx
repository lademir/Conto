import { NavigationContainer } from "@react-navigation/native";
import { Loading } from "../components/Loading";
import { useCounter } from "../data/hooks/useCounter";
import { AppRoutes } from "./app.routes";

export function Routes() {

    const { isLoadingData } = useCounter();

    if (isLoadingData) {
        return <Loading />;
    }

    return (
        <NavigationContainer>
            <AppRoutes />
        </NavigationContainer>
    );
}