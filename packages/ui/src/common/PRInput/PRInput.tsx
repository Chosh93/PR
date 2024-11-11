import { useState } from "react";

import { Group, TextInput } from "@mantine/core";

export interface PRInputProps {
    type?: 'normal' | 'password';
    placeholder?: string;
    onChange?: (value: string | number) => void;
}

export const PRInput = ({
    type = 'normal',
    placeholder,
    onChange
}: PRInputProps) => {
    const [inputValue, setInputValue] = useState<string | number>('');
    // const [isShowPassword, setIsShowPassWord] = useState<boolean>(false);

    const onChangeValue = (_value: string | number) => {
        setInputValue(_value);
        return onChange && onChange(_value);
    };

    const normalInput = (
        <>
            <TextInput
                value={inputValue}
                onChange={(e) => onChangeValue(e.target.value)}
                placeholder={placeholder}
            />
        </>
    );

    const renderDom = () => {
        switch (type) {
            case 'normal':
                return normalInput;
            default:
                return <></>;
        }
    };

    return (
        <div>
            <Group>
                {renderDom()}
            </Group>
        </div>
    );
};