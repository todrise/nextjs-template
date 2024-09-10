import { atom, AtomEffect, DefaultValue } from "recoil";
import localforage from "localforage";
import { isSSR } from "@/helpers/isSSR";
import { PersistedAtomOptions } from "@/types/store";

const deviceStore = localforage.createInstance({
	name: "device",
});
export const localForageEffect =
	<T>(key: string): AtomEffect<T> =>
	({ setSelf, onSet }) => {
		if (!isSSR()) {
			const loadPersisted = async () => {
				const savedValue = await deviceStore.getItem<T>(key).catch((err) => {
					window.console.error(err);
				});
				if (savedValue != null) {
					setSelf(savedValue);
				}
			};
			loadPersisted().then();
			onSet((newValue) => {
				if (newValue instanceof DefaultValue || newValue === undefined) {
					deviceStore.removeItem(key).catch((err) => {
						window.console.error(err);
					});
				} else {
					deviceStore.setItem(key, newValue).catch((err) => {
						window.console.error(err);
					});
				}
			});
		}
	};
export default function persistedAtom<T>(params: PersistedAtomOptions<T>) {
	return atom<T>({
		...params,
		effects: [localForageEffect(params.key)],
	});
}
