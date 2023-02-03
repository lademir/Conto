import { AntDesign } from '@expo/vector-icons';
import { AlertDialog, Button, Column, Row, Text, useDisclose } from 'native-base';
import { useRef } from 'react';
import { TouchableOpacity } from 'react-native';
import { useCounter } from "../../data/hooks/useCounter";
import { Counter as CounterModel } from "../../entities/Counter";
import theme from '../../theme';
import { Container, CounterButton, CounterContainer, CounterValue, MinusIcon, PlusIcon, Title } from "./styles";

interface CounterProps {
    counter: CounterModel;
}

export function Counter({ counter }: CounterProps) {

    const { incrementCounter, decrementCounter, deleteCounter } = useCounter();
    const { onOpen, onClose, isOpen } = useDisclose();
    const cancelRef = useRef(null);

    const decrement = () => {
        decrementCounter(counter.id);
    };

    const increment = () => {
        incrementCounter(counter.id);
    };

    const handleDelete = () => deleteCounter(counter.id);

    return (
        <Container>
            <Title>{counter.id}. {counter.title}</Title>
            <CounterContainer>
                <CounterButton disabled={counter.count == 0} onPress={decrement}>
                    <MinusIcon />
                </CounterButton>
                <CounterValue>{counter.count} {counter.goal ? `/ ${counter.goal}` : ""}</CounterValue>
                <CounterButton onPress={increment}>
                    <PlusIcon />
                </CounterButton>
            </CounterContainer>
            <TouchableOpacity onPress={onOpen}>
                <AntDesign name="delete" size={24} color="white" />
            </TouchableOpacity>
            <AlertDialog size={'xs'} leastDestructiveRef={cancelRef} isOpen={isOpen}>
                <AlertDialog.Content>
                    <AlertDialog.Body>
                        <Column justifyContent={"center"} alignItems="center" style={{

                        }}>
                            <Text>Excluir contador?</Text>
                            <Row marginTop={2}>
                                <Button onPress={handleDelete} bgColor="transparent">Sim</Button>
                                <Button onPress={onClose} bgColor={theme.COLORS.SECONDARY}>Cancelar</Button>
                            </Row>
                        </Column>
                    </AlertDialog.Body>
                </AlertDialog.Content>
            </AlertDialog>
        </Container>
    );
}