import classNames from "classnames";
import { LoadingProps } from "./loading.types";
import { Size } from "../types/component/size.type";

const sizeClasses: Record<Size, string> = {
  tiny: "loading-xs",
  small: "loading-sm",
  normal: "loading-md",
  large: "loading-lg",
};

export const Loading: React.FC<LoadingProps> = ({
  type = "spinner",
  size = "normal",
  variant,
  className,
}: LoadingProps) => {
  const classes = classNames(
    "loading",
    className,
    { [`loading-${type}`]: type },
    { [`loading-${variant}`]: variant },
    { [`${sizeClasses[size]}`]: size }
  );
  return <span className={classes}></span>;
};
