import { styled } from "@mui/material";
import { MUIStyledCommonProps } from "@mui/system";

export const PageName = styled("div")<MUIStyledCommonProps>`
	border: 1px dashed ${(props) => props.theme.palette.text.primary};
	min-height: 60rem;
	padding: 2rem;
	margin: 0 2rem;
	font-size: 2rem;
	@media (max-width: 780px) {
		margin: 0;
		border-left: 0;
		border-right: 0;
	}
`;

type SpacePlaceholderProps = MUIStyledCommonProps & {
	width?: number;
	height?: number;
	color?: string;
	borderColor?: string;
};

export const SpacePlaceholder = styled("div")<SpacePlaceholderProps>`
	width: ${(props) => props.width}rem;
	height: ${(props) => props.height}rem;
	background-color: ${(props) => props.color ?? "none"};
	border: 1px dashed ${(props) => props.borderColor ?? "#999"};
`;
