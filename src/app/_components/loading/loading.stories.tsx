import { Meta, StoryObj } from "@storybook/react";
import { Loading } from "./loading";

const meta: Meta<typeof Loading> = {
  component: Loading,
  title: "Components/Loading",
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      document.documentElement.classList.add("dark");
      return <Story />;
    },
  ],
};
export default meta;

type Story = StoryObj<typeof Loading>;

export const SpinnerLoading: Story = {
  render: () => (
    <>
      <Loading size="tiny" variant="neutral" />
      <Loading size="small" variant="neutral" />
      <Loading size="normal" variant="neutral" />
      <Loading size="large" variant="neutral" />
    </>
  ),
};

export const SpinnerLoadingWithColors: Story = {
  render: () => (
    <>
      <Loading variant="neutral" />
      <Loading variant="primary" />
      <Loading variant="secondary" />
      <Loading variant="accent" />
      <Loading variant="success" />
      <Loading variant="info" />
      <Loading variant="warning" />
      <Loading variant="error" />
    </>
  ),
};

export const RingLoading: Story = {
  render: () => (
    <>
      <Loading type="ring" size="tiny" variant="neutral" />
      <Loading type="ring" size="small" variant="neutral" />
      <Loading type="ring" size="normal" variant="neutral" />
      <Loading type="ring" size="large" variant="neutral" />
    </>
  ),
};

export const RingLoadingWithColors: Story = {
  render: () => (
    <>
      <Loading type="ring" variant="neutral" />
      <Loading type="ring" variant="primary" />
      <Loading type="ring" variant="secondary" />
      <Loading type="ring" variant="accent" />
      <Loading type="ring" variant="success" />
      <Loading type="ring" variant="info" />
      <Loading type="ring" variant="warning" />
      <Loading type="ring" variant="error" />
    </>
  ),
};
