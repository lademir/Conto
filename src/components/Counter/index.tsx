import { useState } from "react";
import { Container, CounterButton, CounterValue, MinusIcon, PlusIcon, Title } from "./styles";

interface CounterProps {
    title: string;
    initialValue: number;
    goal?: number;
}

export function Counter({ title, initialValue, goal }: CounterProps) {
    const [value, setValue] = useState(initialValue);

    const increment = () => setValue(value + 1);
    const decrement = () => setValue(value - 1);
    return (
        <Container>
            <Title>{title}</Title>
            <CounterButton>
                <MinusIcon />
            </CounterButton>
            <CounterValue>{value}</CounterValue>
            <CounterButton>
                <PlusIcon />
            </CounterButton>
        </Container>
    );
}