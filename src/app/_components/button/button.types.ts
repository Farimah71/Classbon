import { ButtonHTMLAttributes } from "react";
import { ComponentBase } from "../types/component/component-base.type";
import { LoadingBehaviour } from "../types/component/loading-behaviour.type";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ComponentBase &
  LoadingBehaviour & {
    shape?: ButtonShape;
    isOutlined?: boolean;
    animatedIcon?: boolean;
    isLink?: boolean;
  };

export type ButtonShape = "default" | "square" | "wide" | "full";
