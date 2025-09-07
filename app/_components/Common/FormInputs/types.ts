export interface InputBaseTypes {
  defaultValue?: string;
}

export interface DoubleInputWrapperProps {
  children: React.ReactNode;
}

export interface PasswordInputProps {
  variant: "login" | "signup";
}

export interface TextInputProps {
  label: string;
  name: string;
  direction?: "ltr" | "rtl";
  maxLength: number;
  placeholder?: string;
  defaultValue?: string;
}
