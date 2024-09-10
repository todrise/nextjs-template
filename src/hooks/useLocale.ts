"use client";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { userStore } from "@/stores/user.store";

/**
 * Just a simple example
 */
export default function useLocale() {
	const [locale, setLocale] = useRecoilState(userStore.locale);
	const dir = locale === "ar" ? "rtl" : "ltr";
	useEffect(() => {
		document.documentElement.lang = locale;
		document.documentElement.dir = dir;
		return () => {
			document.documentElement.lang = "en";
			document.documentElement.dir = "ltr";
		};
	}, [locale, dir]);
	return {
		locale,
		dir,
		setLocale,
	};
}
