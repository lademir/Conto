import { useCounter } from "../../data/hooks/useCounter";
import { Counter as CounterModel } from "../../entities/Counter";
import { Container, CounterButton, CounterContainer, CounterValue, MinusIcon, PlusIcon, Title } from "./styles";

interface CounterProps {
    counter: CounterModel;
}

export function Counter({ counter }: CounterProps) {

    const { incrementCounter, decrementCounter } = useCounter();

    const decrement = () => {
        decrementCounter(counter.id);
    };

    const increment = () => {
        incrementCounter(counter.id);
    };

    return (
        <Container>
            <Title>{counter.title}</Title>
            <CounterContainer>
                <CounterButton disabled={counter.count == 0} onPress={decrement}>
                    <MinusIcon />
                </CounterButton>
                <CounterValue>{counter.count} {counter.goal ? `/ ${counter.goal}` : ""}</CounterValue>
                <CounterButton onPress={increment}>
                    <PlusIcon />
                </CounterButton>
            </CounterContainer>
        </Container>
    );
}