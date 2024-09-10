"use client";
import { FormattedMessage } from "react-intl";
import { PageName } from "@/components/Styled";

export default function NotFoundPage() {
	return (
		<PageName>
			<FormattedMessage id="not_found" />
		</PageName>
	);
}
