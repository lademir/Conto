import { Text, View } from "native-base";
import { Counter as CounterCard } from "../../components/Counter";
import { Layout } from "../../components/template/Layout";
import { Counter } from "../../entities/Counter";

export default function Counters() {

    const samples: Counter[] = [
        Counter.create({
            count: 0,
            title: "Sample 1",
            goal: 10
        }),
        Counter.create({
            count: 0,
            title: "Sample 2",
            goal: 10
        }),
        Counter.create({
            count: 0,
            title: "Sample 3",
            goal: 10
        })
    ];

    return (
        <Layout>
            <View style={{
                width: "100%"
            }}>
                <Text>Counters</Text>
                {samples.map((counter, index) => {
                    return (
                        <CounterCard key={index} initialValue={counter.count} title={counter.title} goal={counter.goal} />
                    );
                })}
            </View>
        </Layout>
    );
}

