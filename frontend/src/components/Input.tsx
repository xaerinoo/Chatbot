import type React from "react";
import { useState } from "react";
import { InputContainer, InputField, InputWrapper } from "./Input.style";

interface InputProps {
    onSend: (message: string) => void;
}

const Input: React.FC<InputProps> = ({ onSend }) => {
  const [value, setValue] = useState('');

  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && value.trim() !== '') {
      onSend(value.trim());
      setValue(''); // 입력창 비우기
    }
  };

  return (
    <InputContainer>
        <InputWrapper>
          <InputField
            type="text"
            placeholder="번뇌를 털어놓으세요..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyPress={handleEnterPress}
          />
        </InputWrapper>
    </InputContainer>
  )
}

export default Input