import { createData } from "@/core/http-service/http-service";
import { SignIn } from "../_types/signin.types";
import { useMutation } from "@tanstack/react-query";

const signin = (model: SignIn): Promise<void> =>
  createData<SignIn, void>("/signin", model);

type useSigninOptions = {
  onSuccess?: () => void;
};

export const useSignin = ({ onSuccess }: useSigninOptions) => {
  const { mutate: submit, isPending } = useMutation({
    mutationFn: signin,
    onSuccess: onSuccess,
  });

  return { submit, isPending };
};
