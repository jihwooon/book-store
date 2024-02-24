import React, { ForwardedRef } from 'react';
import styled from 'styled-components';


interface Props extends React.InputHTMLAttributes<HTMLInputElement>{
  placeholder?: string;
  inputType?: 'text' | 'email' | 'password' | 'number' | 'name';
}

export const InputText = React.forwardRef(({ placeholder, inputType, onChange ,...props }: Props,  ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <InputTextStyled placeholder={placeholder} ref={ref} type={inputType} onChange={onChange} {...props}/>
  )
})

const InputTextStyled = styled.input`
  padding: 0.25rem 0.75rem;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  font-size: 1rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.text};
`
