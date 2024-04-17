import { Badge } from "./badge";
import { Meta, StoryObj } from "@storybook/react";
import { withTests } from "@storybook/addon-jest";
import results from "../../../../.jest-test-results.json";

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: "Components/Badge",
  tags: ["autodocs"],
  args: { variant: "accent"},
  decorators: [
    (Story) => {
      document.documentElement.classList.add("dark");
      return <Story />;
    },
  ],
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Tests: Story = {
  render: (args) => <Badge {...args}>New</Badge>,
};
Tests.decorators = [withTests({ results })];

export const BrandColors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-x-3">
      <Badge>Default</Badge>
      <Badge variant="neutral">Neutral</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="accent">Accent</Badge>
      <Badge variant="ghost">Ghost</Badge>
    </div>
  ),
};

export const StateColors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-x-3">
      <Badge variant="info">Info</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
    </div>
  ),
};

export const BadgeSizes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-x-3">
      <Badge variant="accent">Tiny</Badge>
      <Badge variant="accent" size="small">
        Small
      </Badge>
      <Badge variant="accent" size="normal">
        Normal
      </Badge>
      <Badge variant="accent" size="large">
        Large
      </Badge>
    </div>
  ),
};
