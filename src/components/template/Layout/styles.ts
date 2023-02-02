import styled from "styled-components/native";

export const Container = styled.ScrollView`
	flex: 1;
	background-color: #342056;
	padding-left: 10px;
	padding-right: 10px;
	color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Title = styled.Text`
	font-size: 24px;
	font-weight: bold;
	text-align: center;

	width: 80%;
	margin-bottom: 10px;
	color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const RightButton = styled.TouchableOpacity`
	width: 10%;
`;

export const LeftButton = styled.TouchableOpacity`
	width: 10%;
`;
