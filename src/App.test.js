import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

test("renders Movie App text", () => {
	render(<App />);
	const linkElement = screen.getAllByText(/movie app/i);
	waitFor(() => expect(linkElement).toBeInTheDocument());
});
