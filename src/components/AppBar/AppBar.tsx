"use client";
import React from "react";
import { styled } from "@mui/material";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import PageLinks from "@/components/PageLinks";

export default function AppBar() {
	return (
		<Wrapper>
			<PageLinks />
			<div style={{ flex: 1 }}></div>
			<LanguageSwitcher />
		</Wrapper>
	);
}

const Wrapper = styled("div")`
	display: flex;
	flex-direction: row;
	@media (max-width: 780px) {
		flex-direction: column;
	}
`;
