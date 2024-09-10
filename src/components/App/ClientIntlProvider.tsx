"use client";
import React from "react";
import { IntlProvider } from "react-intl";
import { messages } from "@/locales";
import useLocale from "@/hooks/useLocale";

export default function ClientIntlProvider({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { locale } = useLocale();
	return (
		<IntlProvider locale={locale} messages={messages[locale]}>
			{children}
		</IntlProvider>
	);
}
