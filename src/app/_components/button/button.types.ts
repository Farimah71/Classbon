import { ButtonHTMLAttributes } from "react";
import { ComponentBase } from "../types/component-base.type";
import { LoadingBehaviour } from "../types/loading-behaviour.type";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ComponentBase &
  LoadingBehaviour & {
    shape?: ButtonShape;
    isOutlined?: boolean;
    animatedIcon?: boolean;
    isLink?: boolean;
  };

export type ButtonShape = "default" | "square" | "wide" | "full";
