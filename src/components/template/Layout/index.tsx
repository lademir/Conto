import { Content } from "../Content";
import { Container } from "./styles";

interface LayoutProps {
    children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <Container>
            <Content>
                {children}
            </Content>
        </Container>
    );
}