import { render, screen } from "@testing-library/react";
import { Pagination } from ".";

describe("<Pagination />", () => {
  it("should render correctly", () => {
    render(<Pagination />);

    expect(screen.getByTestId("page-ref")).toHaveTextContent("0 - 10 de 100");
  });
});
