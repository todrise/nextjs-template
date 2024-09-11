"use client";
import { FormattedMessage } from "react-intl";
import { BoxedContainer, PageName, Section } from "@/components/Styled";

export default function HomePage() {
	return (
		<>
			<Section data-testid="home">
				<BoxedContainer>
					<PageName>
						<FormattedMessage id="home" />
					</PageName>
				</BoxedContainer>
			</Section>
		</>
	);
}
