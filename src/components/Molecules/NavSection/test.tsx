import { render, screen } from "@testing-library/react";
import { NavSection } from ".";

describe("<NavSection />", () => {
  it("should render correctly", () => {
    render(
      <NavSection title="title">
        <div data-testid="children" />
      </NavSection>
    );

    expect(screen.getByText(/title/i)).toBeInTheDocument();
    expect(screen.getByTestId("children")).toBeInTheDocument();
  });
});
