import React from 'react'

import { InputContainer, Label, Input, Button } from './styles'

export default function CustomInput (props) {
    const { type, label, placeholder, btnLabel, onClick, onChange } = props
    return (
        <InputContainer>
            <Label>{label}</Label>
            <Input type={type} placeholder={placeholder} onChange={onChange}/>
            {btnLabel && onClick && <Button onClick={onClick}>{btnLabel}</Button>}
        </InputContainer>
    )
}