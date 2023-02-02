import styled from "styled-components/native";

export const Container = styled.View`
	width: 100%;
	height: 60px;

	background-color: ${({ theme }) => theme.COLORS.PRIMARY};
	border-radius: 6px;

	flex-direction: row;
	align-items: center;

	padding: 10px;
	margin-bottom: 5px;

	justify-content: space-between;
`;

export const Title = styled.Text`
	font-size: 18px;
	font-weight: bold;
	color: ${({ theme }) => theme.COLORS.WHITE};
`;
