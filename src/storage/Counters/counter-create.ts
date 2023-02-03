import AsyncStorage from "@react-native-async-storage/async-storage";
import { Counter } from "../../entities/Counter";
import { COUNTER_COLLECTION } from "../config";
import { counterGetAll } from "./counter-getAll";

export async function counterCreate(newCounter: Counter) {
	try {
		const storedCounters = await counterGetAll();
		const counters = [...storedCounters, newCounter.toJson()];
		await AsyncStorage.setItem(COUNTER_COLLECTION, JSON.stringify(counters));
	} catch (error) {
		throw error;
	}
}
