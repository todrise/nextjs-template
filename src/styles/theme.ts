import { createTheme } from "@mui/material";

export const theme = createTheme({
	typography: {
		htmlFontSize: 10,
		fontFamily: `"Montserrat", Helvetica, Arial, "Microsoft YaHei New", "Microsoft Yahei", SimSun, STXihei, sans-serif`,
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 900,
			lg: 1100,
			xl: 1536,
		},
	},
});
