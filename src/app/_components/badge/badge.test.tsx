import { render, screen } from "@testing-library/react";
import { Badge } from "./badge";

describe("Badge Component", () => {
  test("renders default badge", () => {
    const { getByText } = render(<Badge>New</Badge>);
    expect(getByText("New")).toBeInTheDocument();
  });

  test("applies the correct CSS class for different variant badges", () => {
    const { rerender } = render(<Badge variant="info">New</Badge>);
    expect(screen.getByText("New")).toHaveClass("badge-info");

    rerender(<Badge variant="accent">New</Badge>);
    expect(screen.getByText("New")).toHaveClass("badge-accent");
  });
});
