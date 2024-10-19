import { screen, render } from "@testing-library/react";
import Main from ".";

describe("<Main />", () => {
  it("Should render the heading", () => {
    //renderiza o componente
    const { container } = render(<Main />);

    //busca o elemento e verifica a existência dele
    expect(
      screen.getByRole("heading", { name: /react avançado/i }),
    ).toBeInTheDocument();

    //gerar snapshot
    expect(container.firstChild).toMatchSnapshot();
  });
});
