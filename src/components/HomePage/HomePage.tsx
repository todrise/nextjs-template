"use client";
import { FormattedMessage } from "react-intl";
import { PageName, SpacePlaceholder } from "@/components/Styled";

export default function HomePage() {
	return (
		<PageName data-testid="home">
			<FormattedMessage id="home" />
			<SpacePlaceholder width={30} height={10} borderColor="#333" />
		</PageName>
	);
}
