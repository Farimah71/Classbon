import classNames from "classnames";
import { ButtonProps, ButtonShape } from "./button.types";
import { Size } from "../types/component/size.type";
import { Loading } from "../loading/loading";

const shapeClasses: Record<ButtonShape, string> = {
  default: "",
  wide: "btn-wide",
  full: "btn-block",
  square: "btn-square",
};

const sizeClasses: Record<Size, string> = {
  tiny: "btn-xs",
  small: "btn-sm",
  normal: "",
  large: "btn-lg",
};

export const Button: React.FC<ButtonProps> = ({
  variant,
  shape = "default",
  isDisabled = false,
  isOutlined = false,
  size = "normal",
  isLink = false,
  isLoading = false,
  loadingText = "در حال ارسال درخواست...",
  loadingType = "spinner",
  type = "button",
  animatedIcon = false,
  className,
  children,
  ...rest
}: ButtonProps) => {
  const classes = classNames(
    className,
    "btn",
    { "btn-outlined": isOutlined },
    { "btn-link": isLink },
    { "animated-icon": animatedIcon },
    { "pointer-events-none opacity-80": isLoading },
    { [`btn-${variant}`]: variant },
    { [`${shapeClasses[shape]}`]: shape },
    { [`${sizeClasses[size]}`]: size }
  );

  return (
    <button type={type} disabled={isDisabled} className={classes} {...rest}>
      {isLoading && <Loading type={loadingType} />}
      {isLoading ? loadingText : children}
    </button>
  );
};
