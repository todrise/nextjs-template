import { Button, styled } from "@mui/material";
import useLocale from "@/hooks/useLocale";
import { DEBUG_MODE } from "@/consts";

export default function LanguageSwitcher() {
	const { locale, setLocale } = useLocale();
	return (
		<Wrapper>
			<Button onClick={() => setLocale("en")}>EN</Button>
			<Button onClick={() => setLocale("zh")}>ZH</Button>
			<Button onClick={() => setLocale("ar")}>AR</Button>
		</Wrapper>
	);
}

const Wrapper = styled("div")`
	border: ${DEBUG_MODE ? "1px" : 0} dashed #999;
`;
