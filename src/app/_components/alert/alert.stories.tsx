import { Meta, StoryObj } from "@storybook/react";
import { Alert } from "./alert";
import { withTests } from "@storybook/addon-jest";
import results from "../../../../.jest-test-results.json";

const meta: Meta<typeof Alert> = {
  component: Alert,
  title: "Components/Alert",
  tags: ["autodocs"],
  args: { variant: "success" },
  decorators: [
    (Story) => {
      document.documentElement.classList.add("dark");
      return <Story />;
    },
  ],
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Tests: Story = {
  render: (args) => <Alert {...args}>Saved successfully!</Alert>,
};
Tests.decorators = [withTests({ results })];

export const BrandColors: Story = {
  render: () => (
    <div className="flex flex-col gap-y-2 w-1/2">
      <Alert>Default</Alert>
      <Alert variant="neutral">Neutral</Alert>
      <Alert variant="primary">Primary</Alert>
      <Alert variant="secondary">Secondary</Alert>
      <Alert variant="accent">Accent</Alert>
      <Alert variant="ghost">Ghost</Alert>
    </div>
  ),
};

export const StateColors: Story = {
  render: () => (
    <div className="flex flex-col gap-y-2 w-1/2">
      <Alert variant="info">Info</Alert>
      <Alert variant="success">Success</Alert>
      <Alert variant="warning">Warning</Alert>
      <Alert variant="error">Error</Alert>
    </div>
  ),
};

export const AlertWithoutIcon: Story = {
  render: () => (
    <div className="flex flex-col gap-y-2 w-1/2">
      <Alert variant="info" showIcon={false}>
        Info
      </Alert>
      <Alert variant="error" showIcon={false}>
        Error
      </Alert>
    </div>
  ),
};
