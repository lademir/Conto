import { useNavigation } from "@react-navigation/native";
import { View } from "native-base";
import { Counter as CounterCard } from "../../components/Counter";
import { PlusIcon } from "../../components/Counter/styles";
import { FloatingButton } from "../../components/FloatingButton";
import { Layout } from "../../components/template/Layout";
import { useCounter } from "../../data/hooks/useCounter";
import { NoData } from "./style";

export default function Counters() {

    const navigation = useNavigation();
    const { counters } = useCounter();

    const HandlePushAddCounter = () => navigation.navigate("add");


    return (
        <>
            <Layout title="Contadores">
                <View style={{
                    width: "100%",
                    paddingTop: 8,
                }}>
                    {
                        counters ? (
                            counters.map((counter, index) => (
                                <CounterCard key={index} title={counter.title} goal={counter.goal} initialValue={counter.count} />
                            ))
                        ) : (
                            <NoData>
                                Comece uma meta agora!
                            </NoData>
                        )
                    }


                </View>
            </Layout>
            <FloatingButton onPress={HandlePushAddCounter} icon={<PlusIcon />} />
        </>
    );
}

