// Modules
import React from 'react';
import styled from '../../styles/styled-components';

// Colors
import { Colors, FontSize, Rounded, DoubleSpacing } from '../../styles/themes';

interface ButtonProps {
    children: React.ReactNode,
    color: Colors,
    fontSize: FontSize,
    rounded: Rounded,
    size: DoubleSpacing
}

type ButtonType = {
    color: Colors,
    fontSize: FontSize,
    rounded: Rounded,
    size: DoubleSpacing
}

const ButtonStyled = styled('button')<ButtonType>`
    background: ${props => props.theme && props.theme.colors ? props.theme.colors[props.color] : props.theme.colors.primary};
    font-size: ${props => props.theme && props.theme.fontSize ? props.theme.fontSize[props.fontSize]: props.theme.fontSize.md};
    border-radius: ${props => props.theme && props.theme.rounded ? props.theme.rounded[props.rounded] : props.theme.rounded.lg};
    color: ${props => props.theme && props.theme.colors && props.theme.colors[props.color] === "#ffc107" || props.theme.colors[props.color] === "#333333" || props.theme.colors[props.color] === "#FFFFFF" ? props.theme.colors.grayDark : props.theme.colors.white};
    padding: ${props => props.theme && props.theme.doubleSpacing ? props.theme.doubleSpacing[props.size] : props.theme.doubleSpacing.md};
    border: none;
    outline: none;
`

function Button({ children, color, fontSize, rounded, size }: ButtonProps) {
    return (
        <ButtonStyled color={color} fontSize={fontSize} rounded={rounded} size={size}>
            { children }
        </ButtonStyled>
    )
}

export default Button;