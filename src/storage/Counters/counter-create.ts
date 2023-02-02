import AsyncStorage from "@react-native-async-storage/async-storage";
import { CounterProps } from "../../entities/Counter";
import { COUNTER_COLLECTION } from "../config";
import { counterGetAll } from "./counter-getAll";

export async function counterCreate(newCounter: CounterProps) {
	try {
		const storedCounters = await counterGetAll();
		const counters = [...storedCounters, newCounter];
		await AsyncStorage.setItem(COUNTER_COLLECTION, JSON.stringify(counters));
	} catch (error) {
		throw error;
	}
}
