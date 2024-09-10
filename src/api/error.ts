type ErrorDetail = {
	name: string;
	message: string;
};

type RestResponse<T> =
	| {
			data: T;
			errorMessage: string;
			errorName: "BadRequest" | "PermissionDeny" | "Unauthorized" | "ServerError";
	  }
	| { statusCode: number; message: string };

export class RequestError extends Error {
	/** @deprecated use .name */
	type: string;
	status: number;
	statusText: string;
	constructor(message: string, detail: { name: string; status: number; statusText: string }) {
		super(message);
		this.name = detail.name;
		this.type = detail.name;
		this.status = detail.status;
		this.statusText = detail.statusText;
	}

	static create({ name, message }: ErrorDetail, response: Response) {
		const { status, statusText } = response;
		return new RequestError(message, {
			name,
			status,
			statusText,
		});
	}
}

/** returns type and message of error, with fallback on bad JSON */
export async function getErrorDetail(response: Response): Promise<ErrorDetail> {
	const responseForText = response.clone();
	try {
		const err: RestResponse<unknown> = await response.json();
		if (`errorName` in err) {
			return {
				name: err.errorName,
				message: err.errorMessage,
			};
		} else {
			return {
				name: String(err.statusCode),
				message: err.message,
			};
		}
	} catch (err) {
		const text = await responseForText.text();
		return {
			name: "ServerError",
			message: `${response.status} on ${response.url}: ${text}`,
		};
	}
}
