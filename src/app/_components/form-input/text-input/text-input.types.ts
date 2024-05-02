import {
  DeepMap,
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";
import { TextboxProps } from "../../textbox/textbox.types";

export type TextInputProps<TFormvalues extends FieldValues> = Omit<
  TextboxProps,
  "name"
> & {
  register: UseFormRegister<TFormvalues>;
  name: Path<TFormvalues>;
  rules?: RegisterOptions;
  errors?: Partial<DeepMap<TFormvalues, FieldError>>;
};
