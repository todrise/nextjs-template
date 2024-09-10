import { atom } from "recoil";

type Lifespan = "user" | "device";
type PersistedAtomOptions<T> = Parameters<typeof atom<T>>[0] & { lifeSpan?: Lifespan };
