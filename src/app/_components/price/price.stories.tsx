import { Meta, StoryObj } from "@storybook/react";
import { Price } from "./price";
import { withTests } from "@storybook/addon-jest";
import results from "../../../../.jest-test-results.json";

const meta: Meta<typeof Price> = {
  component: Price,
  title: "Components/Price",
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      document.documentElement.classList.add("dark");
      return <Story />;
    },
  ],
};

export default meta;

type Story = StoryObj<typeof Price>;

export const Tests: Story = {
  render: (args) => <Price price={700} {...args} />,
};
Tests.decorators = [withTests({ results })];

export const FreePrice: Story = {
  render: () => <Price />,
};

export const PriceSizes: Story = {
  render: () => (
    <>
      <Price price={300} size="tiny" />
      <Price price={300} size="small" />
      <Price price={300} size="normal" />
      <Price price={300} size="large" />
    </>
  ),
};
