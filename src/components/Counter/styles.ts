import { AntDesign } from "@expo/vector-icons";
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
`;

export const Title = styled.Text`
	font-size: 18px;
	font-weight: bold;
	margin-right: auto;
	color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const CounterContainer = styled.View`
	flex-direction: row;
	align-items: center;
	width: 60%;
	justify-content: space-between;
`;

export const CounterButton = styled.TouchableOpacity``;

export const PlusIcon = styled(AntDesign).attrs(({ theme }) => {
	return {
		name: "plus",
		size: 24,
		color: theme.COLORS.WHITE,
	};
})``;
export const MinusIcon = styled(AntDesign).attrs(({ theme }) => {
	return {
		name: "minus",
		size: 24,
		color: theme.COLORS.WHITE,
	};
})``;

export const CounterValue = styled.Text`
	color: ${({ theme }) => theme.COLORS.WHITE};
	font-size: 24px;
`;
