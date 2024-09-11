"use client";
import { FormattedMessage } from "react-intl";
import { BoxedContainer, PageName, Section } from "@/components/Styled";

export default function NotFoundPage() {
	return (
		<Section>
			<BoxedContainer>
				<PageName>
					<FormattedMessage id="not_found" />
				</PageName>
			</BoxedContainer>
		</Section>
	);
}
