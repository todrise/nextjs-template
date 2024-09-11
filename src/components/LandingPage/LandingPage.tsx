"use client";
import { FormattedMessage } from "react-intl";
import { useTheme } from "@mui/material";
import { BoxedContainer, PageName, Section, SpacePlaceholder } from "@/components/Styled";

export default function LandingPage() {
	const theme = useTheme();
	return (
		<>
			<Section data-testid="home">
				<BoxedContainer>
					<PageName>
						<FormattedMessage id="landing" />
					</PageName>
					<SpacePlaceholder height="20rem" color="#eee" borderColor="#eee" />
				</BoxedContainer>
				<BoxedContainer>
					<PageName>
						<FormattedMessage id="another_section" />
					</PageName>
					<SpacePlaceholder height="20rem" color="#eee" borderColor="#eee" />
				</BoxedContainer>
			</Section>
			<Section>
				<BoxedContainer>
					<PageName>
						<FormattedMessage id="footer" />
					</PageName>
				</BoxedContainer>
			</Section>
		</>
	);
}
