import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { api, useRefCallback } from "@/api/api";
import { useApiHeaderWrapperCreator } from "@/api/useApiHeaderWrapperCreator";
import { API_URL } from "@/consts";
import { userStore } from "@/stores/user.store";
import useAuth from "@/hooks/useAuth";

type LoginPayload = {
	email: string;
	password: string;
};

export default function useRequest() {
	const [user, setUser] = useRecoilState(userStore.user);
	const [loginLoading, setLoginLoading] = useState(false);
	const { isLogin } = useAuth();
	const { apiHeaderWrapper } = useApiHeaderWrapperCreator();

	const getUserInfo = useRefCallback(async () => {
		const res = await apiHeaderWrapper<User>(`${API_URL}/me`);
		setUser(res);
	});

	useEffect(() => {
		if (!isLogin) return;
		getUserInfo().then();
	}, [getUserInfo, isLogin]);

	const login = useRefCallback(async (payload: LoginPayload) => {
		setLoginLoading(true);
		const res = await api<User>(`${API_URL}/login`, {
			method: "POST",
			body: JSON.stringify(payload),
		});
		setLoginLoading(false);
		setUser(res);
	});

	const logout = useRefCallback(() => {
		setUser(undefined);
	});

	return {
		user,
		login,
		loginLoading,
		logout,
	};
}
