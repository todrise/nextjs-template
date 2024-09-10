"use client";
import { FormattedMessage } from "react-intl";
import { PageName } from "@/components/Styled";

export default function LandingPage() {
	return (
		<PageName>
			<FormattedMessage id="landing" />
		</PageName>
	);
}
