import React from "react";
import useLoader from "@/hooks/useLoader";
import Loader from "@/components/Loader";

export default function LoaderWrapper({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { loading } = useLoader();
	return <>{loading ? <Loader /> : children}</>;
}
