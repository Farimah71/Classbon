import classNames from "classnames";
import { BadgeProps } from "./badge.types";
import { Size } from "../types/component/size.type";

const sizeClasses: Record<Size, string> = {
  tiny: "badge-xs",
  small: "badge-sm",
  normal: "badge-md",
  large: "badge-lg",
};

export const Badge: React.FC<BadgeProps> = ({
  variant,
  size = "tiny",
  className,
  children,
}) => {
  const classes = classNames(
    className,
    "badge",
    { [`badge-${variant}`]: variant },
    { [`${sizeClasses[size]}`]: size }
  );
  return <span className={classes}>{children}</span>;
};
