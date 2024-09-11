"use client";
import { FormattedMessage } from "react-intl";
import { BoxedContainer, PageName, Section } from "@/components/Styled";

export default function LoginPage() {
	return (
		<Section>
			<BoxedContainer>
				<PageName>
					<FormattedMessage id="login" />
				</PageName>
			</BoxedContainer>
		</Section>
	);
}
