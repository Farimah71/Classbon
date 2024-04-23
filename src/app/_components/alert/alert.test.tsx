import { getByRole, render, screen } from "@testing-library/react";
import { Alert } from "./alert";
import { IconInfo } from "../icons/icons";

describe("Alert Component", () => {
  test("renders an alert depends on its variant", () => {
    const { rerender } = render(<Alert variant="warning">Alert</Alert>);
    expect(screen.getByText("Alert")).toHaveClass("alert-warning");

    rerender(
      <Alert variant="primary" showIcon={true}>
        Alert
      </Alert>
    );
    expect(screen.getByText("Alert")).toHaveClass("alert-primary");
  });
});
