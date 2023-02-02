import AsyncStorage from "@react-native-async-storage/async-storage";
import { CounterProps } from "../../entities/Counter";
import { COUNTER_COLLECTION } from "../config";

export async function counterGetAll() {
	try {
		const storage = await AsyncStorage.getItem(COUNTER_COLLECTION);
		const counters = storage ? (JSON.parse(storage) as CounterProps[]) : [];
		return counters;
	} catch (error) {
		throw error;
	}
}
