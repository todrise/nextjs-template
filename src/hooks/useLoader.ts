import { useEffect, useState } from "react";

export default function useLoader() {
	const [loading, setLoading] = useState<boolean>(true);
	useEffect(() => {
		const handleComplete = () => setLoading(false);
		if (document.readyState === "complete") {
			handleComplete();
		} else {
			window.addEventListener("load", handleComplete);
			return () => window.removeEventListener("load", handleComplete);
		}
	});
	return {
		loading,
	};
}
