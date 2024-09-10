"use client";
import React from "react";
import AppRoot from "@/components/App/AppRoot";
import "@/styles/normalize.css";
import AppBar from "@/components/AppBar";

export default function RootLayout({
																		 children
																	 }: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html>
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
							rel="stylesheet" />
				<title>NextJS template</title>
			</head>
			<body>
				<AppRoot>
					<AppBar />
					{children}
				</AppRoot>
			</body>
		</html>
	);
}
