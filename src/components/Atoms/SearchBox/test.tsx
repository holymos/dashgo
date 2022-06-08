import { render, screen } from "@testing-library/react";
import { SearchBox } from ".";

jest.mock("react-icons/ri", () => ({
  __esModule: true,
  RiSearchLine: () => <div data-testid="RiSearchLine" />,
}));

describe("<SearchBox />", () => {
  it("should render correctly", () => {
    render(<SearchBox />);

    expect(screen.getByRole("textbox", { name: /search-box/i }));
    expect(screen.getByTestId(/risearchline/i)).toBeInTheDocument();
  });
});
