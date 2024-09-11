"use client";
import { FormattedMessage } from "react-intl";
import { BoxedContainer, PageName, Section } from "@/components/Styled";

export default function RegisterPage() {
	return (
		<Section>
			<BoxedContainer>
				<PageName>
					<FormattedMessage id="register" />
				</PageName>
			</BoxedContainer>
		</Section>
	);
}
