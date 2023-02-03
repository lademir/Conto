const COUNTER_COLLECTION = "@Conto-Counter";

type StoredCounterType = {
	id: number;
	title: string;
	count: number;
	goal?: number;
};

export { COUNTER_COLLECTION, StoredCounterType };
