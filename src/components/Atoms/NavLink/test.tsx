import { render, screen } from "@testing-library/react";
import { NavLink } from ".";

const MockIcon = () => <div data-testid="MockIcon" />;

describe("<NavLink />", () => {
  it("should render correctly", () => {
    render(<NavLink icon={<MockIcon />} description="description" />);

    expect(screen.getByText(/description/i)).toBeInTheDocument();
    expect(screen.getByTestId("MockIcon")).toBeInTheDocument();
  });

  it("should have href if provided", () => {
    render(
      <NavLink icon={<MockIcon />} description="description" link="any_link" />
    );

    expect(screen.getByRole("link", { name: /description/i })).toHaveAttribute(
      "href",
      "/any_link"
    );
  });
});
