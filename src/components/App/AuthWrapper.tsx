import React from "react";
import useAuth from "@/hooks/useAuth";

export default function AuthWrapper({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { redirectToLogin } = useAuth();
	redirectToLogin();
	return <>{children}</>;
}
