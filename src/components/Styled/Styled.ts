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
	border: ${DEBUG_MODE ? "1px" : 0} dashed #ddd;
`;

export const BoxedContainer = styled("div")<MUIStyledCommonProps>`
	display: flex;
	flex-direction: column;
	border: ${DEBUG_MODE ? "1px" : 0} dashed #ddd;
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
	border: 1px solid ${(props) => props.borderColor ?? "transparent"};
	background-image: linear-gradient(
		135deg,
		${(props) => props.color ?? "#eee"} 7.14%,
		transparent 7.14%,
		transparent 50%,
		${(props) => props.color ?? "#eee"} 50%,
		${(props) => props.color ?? "#eee"} 57.14%,
		transparent 57.14%,
		transparent 100%
	);
	background-color: white;
	//background-image: linear-gradient(135deg, ${(props) => props.color ?? "#eee"} 7.14%, #ddd 7.14%, #ddd 50%, ${(
		props,
	) => props.color ?? "#eee"} 50%, ${(props) => props.color ?? "#eee"} 57.14%, #ddd 57.14%, #ddd 100%);
	background-size: 10px 10px;
`;
