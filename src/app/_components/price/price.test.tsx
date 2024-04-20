import { render, screen } from "@testing-library/react";
import { Price } from "./price";

describe("Price Component", () => {
  test("render price component", () => {
    const { getByText } = render(<Price price={200} />);
    expect(getByText(200)).toBeInTheDocument();
  });

  test("applies correct CSS classes for different sizes", () => {
    const { rerender } = render(<Price size="small" price={500} />);
    expect(screen.getByText(500)).toHaveClass("text-xl");

    rerender(<Price size="large" price={500} />);
    expect(screen.getByText(500)).toHaveClass("text-3xl");
  });

  test("renders the text when the price is zero or null", () => {
    const { getByText } = render(<Price price={0} text="Free" />);
    expect(getByText("Free")).toBeInTheDocument();
  });
});
