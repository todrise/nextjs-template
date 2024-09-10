"use client";
import React from "react";
import { ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import RecoilRootWrapper from "@/components/App/RecoilRootWrapper";
import LoaderWrapper from "@/components/App/LoaderWrapper";
import { theme } from "@/styles/theme";
import ClientIntlProvider from "./ClientIntlProvider";

export default function AppRoot({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<RecoilRootWrapper>
			<ClientIntlProvider>
				<AppRouterCacheProvider options={{ key: "todrise" }}>
					<ThemeProvider theme={theme}>
						<LoaderWrapper>{children}</LoaderWrapper>
					</ThemeProvider>
				</AppRouterCacheProvider>
			</ClientIntlProvider>
		</RecoilRootWrapper>
	);
}
