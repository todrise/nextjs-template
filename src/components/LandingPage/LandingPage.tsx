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
					<SpacePlaceholder height="20rem" color="#f1f1f1" />
				</BoxedContainer>
				<BoxedContainer>
					<PageName>
						<FormattedMessage id="another_section" />
					</PageName>
					<SpacePlaceholder height="20rem" color="#f1f1f1" />
				</BoxedContainer>
			</Section>
			<Section>
				<BoxedContainer>
					<PageName>
						<FormattedMessage id="footer" />
						{theme.breakpoints.up("lg")}
					</PageName>
				</BoxedContainer>
			</Section>
		</>
	);
}
