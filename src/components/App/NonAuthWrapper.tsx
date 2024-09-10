import React from "react";
import useAuth from "@/hooks/useAuth";

export default function NonAuthWrapper({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { redirectToHome } = useAuth();
	redirectToHome();
	return <>{children}</>;
}
