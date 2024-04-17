import { describe } from "node:test";
import { render, screen } from "@testing-library/react";
import { Button } from "./button";

describe("Button Component", () => {
  test("renders a default button", () => {
    const { getByText } = render(<Button>Click here</Button>);
    expect(getByText("Click here")).toBeInTheDocument();
  });

  test("disables the button when isDisabled prop is true", () => {
    render(<Button isDisabled={true}>Click here</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  test("applies the correct CSS class for different variant buttons", () => {
    const { rerender } = render(<Button variant="primary">Click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-primary");

    rerender(<Button variant="info">Click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-info");
  });

  test("applies the correct CSS class for different button sizes", () => {
    const { rerender } = render(<Button size="tiny">Click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-xs");

    rerender(<Button size="large">Click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-lg");
  });

  test("applies the correct CSS class for different button shapes", () => {
    const { rerender } = render(<Button shape="square">Click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-square");

    rerender(<Button shape="wide">Click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-wide");
  });

  test("applies the correct CSS class for animated icon button", () => {
    render(<Button animatedIcon={true}>Click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("animated-icon");
  });

  test("applies the correct CSS class for outlined button", () => {
    render(<Button isOutlined={true}>Click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-outlined");
  });

  test("applies the correct CSS class for link button", () => {
    render(<Button isLink={true}>Click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-link");
  });

  test("renders a loading button when isLoading prop is true", () => {
    const { getByText } = render(
      <Button isLoading={true} loadingText="Loading..." />
    );
    expect(getByText("Loading...")).toBeInTheDocument();
  });
});
