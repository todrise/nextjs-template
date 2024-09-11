import { styled } from "@mui/material";
import { MUIStyledCommonProps } from "@mui/system";
import { DEBUG_MODE } from "@/consts";

type SpacePlaceholderProps = MUIStyledCommonProps & {
	width?: string;
	height?: string;
	color?: string;
	borderColor?: string;
};

export const Section = styled("div")`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	border: ${DEBUG_MODE ? "1px" : 0} dashed #999;
`;

export const BoxedContainer = styled("div")<MUIStyledCommonProps>`
	display: flex;
	flex-direction: column;
	border: ${DEBUG_MODE ? "1px" : 0} dashed #999;
	max-width: 110rem;
	width: 100%;
`;

export const PageName = styled("div")<MUIStyledCommonProps>`
	font-size: 2rem;
	color: ${(props) => props.theme.palette.text.primary};
	padding: 2rem 0;
`;

export const SpacePlaceholder = styled("div")<SpacePlaceholderProps>`
	width: ${(props) => props.width || "100%"};
	height: ${(props) => props.height || 0};
	background-color: ${(props) => props.color ?? "transparent"};
	border: 1px dashed ${(props) => props.borderColor ?? "transparent"};
`;
