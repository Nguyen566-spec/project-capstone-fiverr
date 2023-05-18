import React from "react";

type Props = {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  onChangeText?(value: string): void;
  autoFocus?: boolean;
  value?: any;
};

const InputSearch = (props: Props) => {
  return (
    <input
      placeholder={props.placeholder ?? props.label}
      type={props.type}
      name={props.name}
      id={props.type}
      autoComplete="off"
      autoFocus={props.autoFocus}
      value={props.value}
      {...(!!props.onChangeText && {
        onChange: (event) => props.onChangeText?.(event?.target?.value),
      })}
    />
  );
};

export default InputSearch;
