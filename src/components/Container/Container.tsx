// Modules
import React from 'react'
import styled from '../../styles/styled-components';

interface ContainerProps {
    children: React.ReactNode
}

const ContainerStyled = styled('div')`
    width: calc(${props => props.theme.spacing.full} - ${props => props.theme.spacing.bg});
    padding: ${props => props.theme.spacing.none} ${props => props.theme.spacing.sm};
`

function Container({ children }: ContainerProps) {
    return (
        <ContainerStyled>
            {children}
        </ContainerStyled>
    )
}

export default Container;