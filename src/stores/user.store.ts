import { selector } from "recoil";
import { Locale } from "@/types/locale";
import persistedAtom from "@/stores/helpers/persistedAtom";

export const locale = persistedAtom<Locale>({
	key: "global.baseContext.locale",
	default: "en",
});

export const user = persistedAtom<User | undefined>({
	key: "global.userContext.user",
	default: undefined,
});

export const token = selector<string | undefined>({
	key: "global.userContext.token",
	get: ({ get }) => {
		const res = get(user);
		return res?.token;
	},
});

export const userStore = {
	locale,
	user,
};
