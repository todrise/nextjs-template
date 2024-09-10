"use client";
import useAuth from "@/hooks/useAuth";
import HomePage from "@/components/HomePage";
import LandingPage from "@/components/LandingPage";

export default function Home() {
	const { isLogin } = useAuth();
	return isLogin ? <HomePage /> : <LandingPage />;
}
