import { render, screen } from "@testing-library/react";
import { ReactNode } from "react";
import { Sidebar } from ".";

jest.mock("../../Atoms", () => ({
  __esModule: true,
  NavLink: () => <div data-testid="NavLink" />,
}));

jest.mock("../../Molecules", () => ({
  __esModule: true,
  NavSection: ({ children }: { children: ReactNode }) => (
    <div data-testid="NavSection">{children}</div>
  ),
}));

describe("<Sidebar />", () => {
  it("should render correctly", () => {
    render(<Sidebar />);

    expect(screen.getAllByTestId("NavSection")).toHaveLength(2);
    expect(screen.getAllByTestId("NavLink")).toHaveLength(4);
  });
});
