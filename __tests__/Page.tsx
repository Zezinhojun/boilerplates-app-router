import { screen, render } from "@testing-library/react";
import Main from "@/app/components/Main";
import "@testing-library/jest-dom";

describe("<Main />", () => {
  it("Should render the heading", () => {
    render(<Main />);
    expect(
      screen.getByRole("heading", { name: /react avançado/i }),
    ).toBeInTheDocument();
  });
});
