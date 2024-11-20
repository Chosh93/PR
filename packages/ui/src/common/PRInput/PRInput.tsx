import { useState } from 'react';

import { Group, PasswordInput, TextInput } from '@mantine/core';

export interface PRInputProps {
  type?: 'normal' | 'password';
  label: string;
  placeholder?: string;
  onChange?: (value: string | number) => void;
}

export const PRInput = ({ type = 'normal', label, placeholder, onChange }: PRInputProps) => {
  const [inputValue, setInputValue] = useState<string | number>('');
  // const [isShowPassword, setIsShowPassWord] = useState<boolean>(false);

  const onChangeValue = (_value: string | number) => {
    setInputValue(_value);
    return onChange && onChange(_value);
  };

  const normalInput = (
    <>
      <TextInput
        label={label}
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => onChangeValue(e.target.value)}
      />
    </>
  );

  const passwordInput = (
    <>
      <PasswordInput
        label={label}
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => onChangeValue(e.target.value)}
      />
    </>
  );

  const renderDom = () => {
    switch (type) {
      case 'normal':
        return normalInput;
      case 'password':
        return passwordInput;
      default:
        return <></>;
    }
  };

  return (
    <div>
      <Group>{renderDom()}</Group>
    </div>
  );
};
