import { AntDesign } from "@expo/vector-icons";
import styled from "styled-components/native";

export const LeftArrow = styled(AntDesign).attrs(({ theme }) => {
	return {
		name: "arrowleft",
		size: 24,
		color: theme.COLORS.WHITE,
	};
});
