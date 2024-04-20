import { Size } from "./size.type";
import { Variant } from "./variant.type";

export type ComponentBase = {
  className?: string;
  isDisabled?: boolean;
  size?: Size;
  variant?: Variant;
};
