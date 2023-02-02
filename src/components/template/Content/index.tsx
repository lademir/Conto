import { Container } from "./style";

interface ContentProps {
    children: React.ReactNode;
}

export function Content({ children }: ContentProps) {
    return (
        <Container>
            {children}
        </Container>
    );
}