import styled from "styled-components/native";

export const Container = styled.ScrollView`
	flex: 1;
	background-color: #342056;
	padding-left: 10px;
	padding-right: 10px;
	color: ${({ theme }) => theme.COLORS.WHITE};
`;
