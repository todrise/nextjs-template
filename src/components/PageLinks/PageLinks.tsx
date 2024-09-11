import Link from "next/link";
import { styled } from "@mui/material";
import { MUIStyledCommonProps } from "@mui/system";
import { FormattedMessage } from "react-intl";
import useAuth from "@/hooks/useAuth";
import { DEBUG_MODE } from "@/consts";
import useLocale from "@/hooks/useLocale";

export default function PageLinks() {
	const { isLogin } = useAuth();
	const { dir } = useLocale();
	return (
		<Wrapper>
			<Link href="/">{isLogin ? <FormattedMessage id="home" /> : <FormattedMessage id="landing" />}</Link>
			<Link href="/register">
				<FormattedMessage id="register" />
				{isLogin && (
					<>
						{dir === "ltr" ? "➟" : "⟸"}
						<FormattedMessage id="home" />
					</>
				)}
			</Link>
			<Link href="/login">
				<FormattedMessage id="login" />
				{isLogin && (
					<>
						{dir === "ltr" ? "➟" : "⟸"}
						<FormattedMessage id="home" />
					</>
				)}
			</Link>
			<Link href="/eg-request">Network request example</Link>
			<Link href="/foo">
				<FormattedMessage id="not_found" />
			</Link>
		</Wrapper>
	);
}

const Wrapper = styled("div")<MUIStyledCommonProps>`
	border: ${DEBUG_MODE ? "1px" : 0} dashed #999;
	display: flex;
	flex-direction: row;
	gap: 3rem;

	a {
		display: flex;
		font-size: 1.4rem;
		line-height: 1.6rem;
	}

	${(props) => props.theme.breakpoints.down("md")} {
		display: none;
	}
`;
