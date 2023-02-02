import { Container } from "./style";

interface FloatingButtonProps {
    onPress: () => void;
    icon?: React.ReactNode;
}

export function FloatingButton({ onPress, icon }: FloatingButtonProps) {
    return (
        <Container onPress={onPress}>
            {icon}
        </Container>
    );
}