import { extendTheme } from "native-base";

export const nativeBaseTheme = extendTheme({
	colors: {
		primary: {
			1000: "#010317",
			900: "#01041b",
			800: "#01041e",
			700: "#010526",
			600: "#1a1e3c",
			500: "#2d2f4f",
			400: "#3e3f5f",
			300: "#4e4e6f",
			200: "#5e5e7f",
			100: "#6e6e8f",
			50: "#cccdd4",
		},
	},
	config: {
		initialColorMode: "dark",
	},
});

export const theme = {};
