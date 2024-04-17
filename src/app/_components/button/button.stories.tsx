import { Button } from ".";
import { Meta, StoryObj } from "@storybook/react";
import { Loading } from "../loading/loading";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Components/Button",
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      document.documentElement.classList.add("dark");
      return <Story />;
    },
  ],
};
export default meta;

type Story = StoryObj<typeof Button>;

export const BrandColors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-x-3">
      <Button>Default</Button>
      <Button variant="neutral">Neutral</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="accent">Accent</Button>
      <Button variant="ghost">Ghost</Button>
      <Button isLink>Link</Button>
    </div>
  ),
};

export const StateColors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-x-3">
      <Button variant="info">Info</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="error">Error</Button>
    </div>
  ),
};

export const OutlinedButtons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-x-3">
      <Button isOutlined>Default</Button>
      <Button isOutlined variant="neutral">
        Neutral
      </Button>
      <Button isOutlined variant="primary">
        Primary
      </Button>
      <Button isOutlined variant="secondary">
        Secondary
      </Button>
      <Button isOutlined variant="accent">
        Accent
      </Button>
      <Button isOutlined variant="ghost">
        Ghost
      </Button>
    </div>
  ),
};

export const OutlinedStateButtons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-x-3">
      <Button isOutlined variant="info">
        Info
      </Button>
      <Button isOutlined variant="success">
        Success
      </Button>
      <Button isOutlined variant="warning">
        Warning
      </Button>
      <Button isOutlined variant="error">
        Error
      </Button>
    </div>
  ),
};

export const ButtonSizes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-x-3">
      <Button variant="neutral" size="tiny">
        Tiny
      </Button>
      <Button variant="neutral" size="small">
        Small
      </Button>
      <Button variant="neutral" size="normal">
        Normal
      </Button>
      <Button variant="neutral" size="large">
        Large
      </Button>
    </div>
  ),
};

export const WideButton: Story = {
  render: () => (
    <Button variant="neutral" shape="wide">
      Wide Button
    </Button>
  ),
};

export const FullButton: Story = {
  render: () => (
    <Button variant="neutral" shape="full">
      Full Button
    </Button>
  ),
};

export const SquareButton: Story = {
  render: () => (
    <>
      <Button variant="neutral" shape="square" size="tiny">
        <svg
          fill="#eeeeee"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-161.7 -161.7 813.40 813.40"
          stroke="#eeeeee"
          stroke-width="2.94"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke="#CCCCCC"
            stroke-width="8.82"
          >
            <polygon points="11.387,490 245,255.832 478.613,490 489.439,479.174 255.809,244.996 489.439,10.811 478.613,0 245,234.161 11.387,0 0.561,10.811 234.191,244.996 0.561,479.174 "></polygon>{" "}
          </g>
          <g id="SVGRepo_iconCarrier">
            <polygon points="11.387,490 245,255.832 478.613,490 489.439,479.174 255.809,244.996 489.439,10.811 478.613,0 245,234.161 11.387,0 0.561,10.811 234.191,244.996 0.561,479.174 "></polygon>{" "}
          </g>
        </svg>
      </Button>
      <Button variant="neutral" shape="square" size="small">
        <svg
          fill="#eeeeee"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-161.7 -161.7 813.40 813.40"
          stroke="#eeeeee"
          stroke-width="2.94"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke="#CCCCCC"
            stroke-width="8.82"
          >
            <polygon points="11.387,490 245,255.832 478.613,490 489.439,479.174 255.809,244.996 489.439,10.811 478.613,0 245,234.161 11.387,0 0.561,10.811 234.191,244.996 0.561,479.174 "></polygon>{" "}
          </g>
          <g id="SVGRepo_iconCarrier">
            <polygon points="11.387,490 245,255.832 478.613,490 489.439,479.174 255.809,244.996 489.439,10.811 478.613,0 245,234.161 11.387,0 0.561,10.811 234.191,244.996 0.561,479.174 "></polygon>{" "}
          </g>
        </svg>
      </Button>
      <Button variant="neutral" shape="square" size="normal">
        <svg
          fill="#eeeeee"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-161.7 -161.7 813.40 813.40"
          stroke="#eeeeee"
          stroke-width="2.94"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke="#CCCCCC"
            stroke-width="8.82"
          >
            <polygon points="11.387,490 245,255.832 478.613,490 489.439,479.174 255.809,244.996 489.439,10.811 478.613,0 245,234.161 11.387,0 0.561,10.811 234.191,244.996 0.561,479.174 "></polygon>{" "}
          </g>
          <g id="SVGRepo_iconCarrier">
            <polygon points="11.387,490 245,255.832 478.613,490 489.439,479.174 255.809,244.996 489.439,10.811 478.613,0 245,234.161 11.387,0 0.561,10.811 234.191,244.996 0.561,479.174 "></polygon>{" "}
          </g>
        </svg>
      </Button>
      <Button variant="neutral" shape="square" size="large">
        <svg
          fill="#eeeeee"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-161.7 -161.7 813.40 813.40"
          stroke="#eeeeee"
          stroke-width="2.94"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke="#CCCCCC"
            stroke-width="8.82"
          >
            <polygon points="11.387,490 245,255.832 478.613,490 489.439,479.174 255.809,244.996 489.439,10.811 478.613,0 245,234.161 11.387,0 0.561,10.811 234.191,244.996 0.561,479.174 "></polygon>{" "}
          </g>
          <g id="SVGRepo_iconCarrier">
            <polygon points="11.387,490 245,255.832 478.613,490 489.439,479.174 255.809,244.996 489.439,10.811 478.613,0 245,234.161 11.387,0 0.561,10.811 234.191,244.996 0.561,479.174 "></polygon>{" "}
          </g>
        </svg>
      </Button>
    </>
  ),
};

export const DisabledButton: Story = {
  render: () => (
    <Button variant="neutral" isDisabled>
      Disabled Button
    </Button>
  ),
};

export const IconButton: Story = {
  render: () => (
    <>
      <Button variant="neutral">
        Support
        <svg
          fill="#e11919"
          height="24px"
          width="24px"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-66.04 -66.04 603.78 603.78"
          stroke="#e11919"
          stroke-width="5.660412"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke="#CCCCCC"
            stroke-width="5.660412"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g>
              <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1 c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3 l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4 C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3 s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4 c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3 C444.801,187.101,434.001,213.101,414.401,232.701z"></path>{" "}
            </g>
          </g>
        </svg>
      </Button>
      <Button variant="neutral">
        <svg
          fill="#e11919"
          height="24px"
          width="24px"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-66.04 -66.04 603.78 603.78"
          stroke="#e11919"
          stroke-width="5.660412"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke="#CCCCCC"
            stroke-width="5.660412"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g>
              <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1 c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3 l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4 C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3 s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4 c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3 C444.801,187.101,434.001,213.101,414.401,232.701z"></path>{" "}
            </g>
          </g>
        </svg>
        Support
      </Button>
    </>
  ),
};

export const ButtonWithLoading: Story = {
  render: () => (
    <>
      <Button variant="neutral" isLoading={true} loadingText="Loading" />
      <Button variant="accent" isLoading={true} loadingText="Loading" loadingType="ring" />
      <Button
        variant="primary"
        isLoading={true}
        loadingText="Loading"
        isOutlined
      />
    </>
  ),
};
