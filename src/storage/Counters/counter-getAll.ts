import AsyncStorage from "@react-native-async-storage/async-storage";
import { COUNTER_COLLECTION, StoredCounterType } from "../config";

export async function counterGetAll(): Promise<StoredCounterType[]> {
	try {
		const storage = await AsyncStorage.getItem(COUNTER_COLLECTION);
		const counters = storage
			? (JSON.parse(storage) as StoredCounterType[])
			: [];
		console.log(
			"🚀 ~ file: counter-getAll.ts:8 ~ counterGetAll ~ counters",
			counters
		);
		return counters;
	} catch (error) {
		throw error;
	}
}
