import { createContext, useEffect, useState } from "react";
import { Counter, CounterProps } from "../../entities/Counter";
import { counterCreate } from "../../storage/Counters/counter-create";
import { counterGetAll } from "../../storage/Counters/counter-getAll";
import { CounterUpdate } from "../../storage/Counters/counter-update";

interface CounterContextData {
    counters: Counter[];
    addCounter: (props: CounterProps) => void;
    isLoadingData: boolean;
    incrementCounter: (id: number) => void;
    decrementCounter: (id: number) => void;
    deleteCounter: (id: number) => void;
}

export const CounterContext = createContext({} as CounterContextData);

export function CounterProvider({ children }: { children: React.ReactNode; }) {
    const [counters, setCounters] = useState<Counter[]>([]);
    const [isLoadingData, setIsLoadingData] = useState(false);

    useEffect(() => {
        loadCountersData();
        // AsyncStorage.removeItem(COUNTER_COLLECTION);
    }, []);

    async function loadCountersData() {
        setIsLoadingData(true);
        const savedCountersData = await counterGetAll();
        const savedCounters = savedCountersData.map((counterData) => {
            return Counter.create(counterData);
        }
        );
        setCounters(savedCounters);
        setIsLoadingData(false);
    }

    async function addCounter(props: CounterProps) {
        const newCounter = Counter.create({
            ...props,
            id: counters.length + 1
        });
        if (counters) {
            setCounters([...counters, newCounter]);
            counterCreate(newCounter);
        } else {
            setCounters([newCounter]);
        }
    }

    async function deleteCounter(id: number) {
        const newCounters = counters.filter((counter) => counter.id !== id);
        setCounters(newCounters);
        CounterUpdate(newCounters);
    }

    function incrementCounter(id: number) {
        const newCounters = counters.map((counter) => {
            if (counter.id === id) {
                counter.increment();
            }
            return counter;
        });
        setCounters(newCounters);
        CounterUpdate(newCounters);
    }
    function decrementCounter(id: number) {
        const newCounters = counters.map((counter) => {
            if (counter.id === id) {
                counter.decrement();
            }
            return counter;
        });
        setCounters(newCounters);
        CounterUpdate(newCounters);
    }

    return (
        <CounterContext.Provider value={{
            counters,
            addCounter,
            isLoadingData,
            incrementCounter,
            decrementCounter,
            deleteCounter
        }}>
            {children}
        </CounterContext.Provider>
    );
}