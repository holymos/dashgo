import { render, screen } from "@testing-library/react";
import { PaginationItem } from ".";

describe("<PaginationItem />", () => {
  it("should render correctly", () => {
    render(<PaginationItem pageNumber={1} />);

    expect(screen.getByText(/1/i)).toBeInTheDocument();
  });

  it("should render a disabled button with pink background if is active", () => {
    const { container } = render(<PaginationItem pageNumber={1} isCurrent />);

    expect(screen.getByText(/1/i)).toBeDisabled();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render a disabled button with pink background if is active", () => {
    const { container } = render(<PaginationItem pageNumber={1} />);

    expect(screen.getByText(/1/i)).toBeEnabled();
    expect(container.firstChild).toMatchSnapshot();
  });
});
