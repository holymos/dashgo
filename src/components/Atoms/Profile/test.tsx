import { render, screen } from "@testing-library/react";
import { Profile } from ".";

describe("<Profile />", () => {
  it("should render correctly", () => {
    render(<Profile />);

    expect(screen.getByText(/moisés pacífico/i)).toBeInTheDocument();
    expect(
      screen.getByText(/moises\.pacifico@hotmail.com/i)
    ).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /user image/i }));
  });
});
