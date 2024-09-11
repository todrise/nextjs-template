"use client";
import React from "react";
import { styled } from "@mui/material";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import PageLinks from "@/components/PageLinks";
import { BoxedContainer, Section } from "@/components/Styled";
import { DEBUG_MODE } from "@/consts";
import { SPACE_APPBAR_HEIGHT } from "@/designToken";

export default function AppBar() {
	window.console.log(DEBUG_MODE);
	window.console.log(process.env.NEXT_VIEW_DEBUG);
	return (
		<Wrapper>
			<InnerWrapper>
				<PageLinks />
				<div />
				<LanguageSwitcher />
			</InnerWrapper>
		</Wrapper>
	);
}
const Wrapper = styled(Section)`
	box-shadow: 1px 1px 10px #eee;
	flex-direction: row;
	height: ${SPACE_APPBAR_HEIGHT};
	justify-content: center;
	left: 0;
	position: absolute;
	top: 0;
	width: 100%;

	${(props) => props.theme.breakpoints.down("lg")} {
		padding: 0 2rem;
	}
`;

const InnerWrapper = styled(BoxedContainer)`
	align-items: center;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
`;
