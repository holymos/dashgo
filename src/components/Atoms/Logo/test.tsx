import { render, screen } from "@testing-library/react";
import { Logo } from ".";

describe("<Logo />", () => {
  it("should render correctly", () => {
    render(<Logo />);

    expect(screen.getByText(/dashgo/i)).toBeInTheDocument();
    expect(screen.getByText(/\./i)).toBeInTheDocument();
  });
});
