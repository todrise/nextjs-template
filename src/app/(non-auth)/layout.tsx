"use client";
import React from "react";
import NonAuthWrapper from "@/components/App/NonAuthWrapper";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <NonAuthWrapper>{children}</NonAuthWrapper>;
}
