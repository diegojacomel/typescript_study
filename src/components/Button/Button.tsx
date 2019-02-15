// Modules
import React from 'react';
import styled from '../../styles/styled-components';

// Colors
import { Colors } from '../../styles/themes';

interface ButtonProps {
    children: React.ReactNode,
    color: Colors
}

type ButtonType = {
    color: Colors 
}

const ButtonStyled = styled('button')<ButtonType>`
    background: ${props => props.theme && props.theme.colors ? props.theme.colors[props.color]: ""};
    font-size: 16px;
    border: none;
    border-radius: 5px;
    outline: none;
    padding: 8px 15px;
    color: #ffffff;
`

function Button({ children, color }: ButtonProps) {
    return (
        <ButtonStyled color={color}>
            { children }
        </ButtonStyled>
    )
}

export default Button;