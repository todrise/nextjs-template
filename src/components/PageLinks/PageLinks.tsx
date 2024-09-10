import Link from "next/link";
import { styled } from "@mui/material";
import { FormattedMessage } from "react-intl";
import useAuth from "@/hooks/useAuth";

export default function PageLinks() {
	const { isLogin } = useAuth();
	return (
		<Wrapper>
			<Link href="/">{isLogin ? <FormattedMessage id="home" /> : <FormattedMessage id="landing" />}</Link>
			<Link href="/register">
				<FormattedMessage id="register" />
				{isLogin && (
					<>
						➟
						<FormattedMessage id="home" />
					</>
				)}
			</Link>
			<Link href="/login">
				<FormattedMessage id="login" />
				{isLogin && (
					<>
						➟
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

const Wrapper = styled("div")`
	padding: 1rem;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;

	a {
		display: flex;
		padding: 2rem;
		font-size: 1.4rem;
	}
`;
