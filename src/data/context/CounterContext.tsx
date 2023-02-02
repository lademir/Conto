import { createContext, useState } from "react";
import { Counter, CounterProps } from "../../entities/Counter";

interface CounterContextData {
    counters: Counter[] | null;
    addCounter: (props: CounterProps) => void;
}

export const CounterContext = createContext({} as CounterContextData);

export function CounterProvider({ children }: { children: React.ReactNode; }) {
    const [counters, setCounters] = useState<Counter[] | null>(null);


    function addCounter(props: CounterProps) {
        const newCounter = Counter.create(props);
        if (counters) {
            setCounters([...counters, newCounter]);
        } else {
            setCounters([newCounter]);
        }
    }

    return (
        <CounterContext.Provider value={{
            counters,
            addCounter
        }}>
            {children}
        </CounterContext.Provider>
    );
}