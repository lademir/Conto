import { useState } from "react";
import { Container, CounterButton, CounterContainer, CounterValue, MinusIcon, PlusIcon, Title } from "./styles";

interface CounterProps {
    title: string;
    initialValue: number;
    goal?: number;
}

export function Counter({ title, initialValue, goal }: CounterProps) {
    const [value, setValue] = useState(initialValue);

    const increment = () => setValue(value + 1);
    const decrement = () => {
        if (value > 0) {
            setValue(value - 1);
        }
    };
    return (
        <Container>
            <Title>{title}</Title>
            <CounterContainer>
                <CounterButton disabled={value == 0} onPress={decrement}>
                    <MinusIcon />
                </CounterButton>
                <CounterValue>{value} {goal ? `/ ${goal}` : ""}</CounterValue>
                <CounterButton onPress={increment}>
                    <PlusIcon />
                </CounterButton>
            </CounterContainer>
        </Container>
    );
}