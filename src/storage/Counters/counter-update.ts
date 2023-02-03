import AsyncStorage from "@react-native-async-storage/async-storage";
import { Counter } from "../../entities/Counter";
import { COUNTER_COLLECTION } from "../config";

export async function CounterUpdate(counters: Counter[]) {
	try {
		const updatedCounters = counters.map((counter) => counter.toJson());
		await AsyncStorage.setItem(
			COUNTER_COLLECTION,
			JSON.stringify(updatedCounters)
		);
	} catch (error) {}
}
