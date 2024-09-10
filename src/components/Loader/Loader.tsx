import { styled } from "@mui/material";

export default function Loader() {
	return (
		<LoaderContainer>
			<LoaderSpinner />
		</LoaderContainer>
	);
}

const LoaderContainer = styled("div")`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(255, 255, 255, 0.9);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 9999;
`;

const LoaderSpinner = styled("div")`
	border: 0.8rem solid #f3f3f3;
	border-top: 0.8rem solid #3498db;
	border-radius: 50%;
	width: 10rem;
	height: 10rem;
	animation: spin 2s linear infinite;
	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;
