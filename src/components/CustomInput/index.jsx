import React from 'react'
import styled from 'styled-components'

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    width: 100%;
    max-width: 368px;
    max-height: 68px;
    padding: 16px;
    background: var(--black-transparent);
    backdrop-filter: blur(2px);
    border-radius: 4px;
    margin-bottom: 16px;
    position: relative;

    @media(max-width: 680px) {
        width: 90%;
    }
`

const Label = styled.span`
    font-size: 12px;
    line-height: 1.2;
    margin-bottom: 4px;
    color: var(--white);
    opacity: 0.5;
`

const Input = styled.input`
    font-size: 16px;
    line-height: 1.2;
    color: var(--white);
    background-color: transparent;
    width: 100%;
`

const Button = styled.button`
    width: 85px;
    height: 36px;
    border-radius: 44px;
    padding: 8px;
    background-color: var(--white);
    color: var(--firebrick-variation);
    position: absolute;
    right: 20px;
    cursor: pointer;
    transition: all ease .5s;

    &:hover {
        background-color: var(--black);
        color: var(--white);
    }
`

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