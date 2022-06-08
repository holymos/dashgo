import { render, screen } from "@testing-library/react";
import { Input } from ".";

describe("<Input />", () => {
  it("should render correctly", () => {
    render(<Input name="name" label="label" />);

    expect(screen.getByRole("textbox", { name: /label/i })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /label/i })).toHaveAttribute(
      "name",
      "name"
    );
  });

  it("should render an input type text by default", () => {
    render(<Input name="name" label="label" />);

    expect(screen.getByRole("textbox", { name: /label/i })).toHaveAttribute(
      "type",
      "text"
    );
  });

  it("should render an input with type as passed in prop", () => {
    render(<Input name="name" label="label" type="email" />);

    expect(screen.getByRole("textbox", { name: /label/i })).toHaveAttribute(
      "type",
      "email"
    );
  });
});
