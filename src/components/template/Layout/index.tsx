import { Row } from "native-base";
import { Content } from "../Content";
import { Container, LeftButton, RightButton, Title } from "./styles";

interface LayoutProps {
    children: React.ReactNode;
    title?: string;
    rightButton?: React.ReactNode;
    leftButton?: React.ReactNode;
}

export function Layout({ children, title, rightButton, leftButton }: LayoutProps) {
    return (
        <Container>
            <Content>
                <Row style={{
                    width: "100%",
                    position: "relative",

                }}>
                    <LeftButton>
                        {leftButton}
                    </LeftButton>
                    <Title>{title}</Title>
                    <RightButton>
                        {rightButton}
                    </RightButton>
                </Row>
                {children}
            </Content>
        </Container>
    );
}