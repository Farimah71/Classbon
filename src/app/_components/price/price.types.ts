import { ComponentBase } from "../types/component/component-base.type";

export type PriceProps = Omit<ComponentBase, "isDisabled" | "variant"> & {
  price?: number;
  text?: string;
};
