import { render, screen } from "@testing-library/react";

import MyComponent from ".";

describe("<MyComponent/>", () => {
  it("Should render the heading", () => {
    const { container } = render(<MyComponent />);

    expect(
      screen.getByRole("heading", { name: /MyComponent/i }),
    ).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
