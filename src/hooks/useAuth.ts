import { redirect } from "next/navigation";
import { useRecoilValue } from "recoil";
import { userStore } from "@/stores/user.store";

export default function useAuth() {
	const user = useRecoilValue(userStore.user);
	const isLogin = user?.token !== undefined;

	const redirectToLogin = () => {
		if (!isLogin) {
			redirect("/login");
		}
	};
	const redirectToHome = () => {
		if (isLogin) {
			redirect("/");
		}
	};

	return {
		isLogin,
		redirectToLogin,
		redirectToHome,
	};
}
