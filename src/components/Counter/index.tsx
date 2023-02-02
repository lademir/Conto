import { useState } from "react";
import { Container, Title } from "./styles";

interface CounterProps {
    title: string;
    initialValue: number;
    goal?: number;
}

export function Counter({ title, initialValue, goal }: CounterProps) {
    const [value, setValue] = useState(initialValue);
    return (
        <Container>
            <Title>{title}</Title>

        </Container>
    );
}