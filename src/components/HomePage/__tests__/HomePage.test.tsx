import { render, screen } from "@testing-library/react";
import AppRoot from "@/components/App/AppRoot";
import HomePage from "..";

describe("HomePage", () => {
	it("renders a home text", () => {
		const { debug } = render(
			<AppRoot>
				<HomePage />
			</AppRoot>,
		);
		// debug();

		const homeDiv = screen.getByTestId("home");
		expect(homeDiv).toHaveTextContent("Home");
		expect(homeDiv).toBeInTheDocument();
	});
});
