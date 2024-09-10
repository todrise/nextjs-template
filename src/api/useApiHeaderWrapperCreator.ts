import { useRecoilValue } from "recoil";
import { userStore } from "@/stores/user.store";
import { api } from "@/api/api";

export function useApiHeaderWrapperCreator() {
	const user = useRecoilValue(userStore.user);
	async function apiHeaderWrapper<T>(...args: Parameters<typeof api>) {
		const [url, params, ...others] = args;
		const token = user?.token;
		const res = await api<T>(
			url,
			{
				...params,
				headers: {
					...params?.headers,
					Authorization: `Bearer ${token}`,
				},
			},
			...others,
		);

		return res;
	}

	return {
		apiHeaderWrapper,
	};
}
