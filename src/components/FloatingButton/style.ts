import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
	width: 60px;
	height: 60px;

	border-radius: 50px;

	justify-content: center;
	align-items: center;

	background-color: ${({ theme }) => theme.COLORS.DARK};

	padding: 5px;

	position: absolute;

	bottom: 40px;
	right: 40px;
`;
