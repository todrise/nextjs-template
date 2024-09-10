import { useCallback, useRef } from "react";
import { ApiOptions } from "@/types/request";
import { getErrorDetail, RequestError } from "@/api/error";

export async function api<T>(url: string, requestInit?: RequestInit, options?: ApiOptions): Promise<T> {
	const { willNotify, willRedirect } = options || {};
	let contentTypeHeader: Record<string, any> = {
		"Content-Type": "application/json",
	};
	if (options?.noContentTypeHeader) {
		contentTypeHeader = {};
	}

	const response = await fetch(url, {
		...requestInit,
		headers: {
			...contentTypeHeader,
			...(requestInit?.headers || {}),
		},
	}).catch((error) => {
		if (error.message === "Failed to fetch" && willNotify) {
			//TODO notify logic here
		}
		throw error;
	});

	if (response.status >= 400) {
		if (willRedirect) {
			//TODO window.location.href = "/login";
		}
		const errorDetail = await getErrorDetail(response);
		const requestError = RequestError.create(errorDetail, response);
		const message = requestError.message;
		if (message) {
			if (willNotify) {
				//TODO notify logic here
			}
		}
		return Promise.reject(requestError);
	}
	const raw = await response.text();
	try {
		const json = JSON.parse(raw);
		return json as Promise<T>;
	} catch (error) {
		return raw as T;
	}
}

export function useRefCallback<T extends (...args: any[]) => any>(callback: T): T {
	const ref = useRef(callback);
	ref.current = callback;
	// eslint-disable-next-line react-hooks/exhaustive-deps
	return useCallback(((...args) => ref.current(...args)) as T, [ref]);
}
