// Modules
import React from 'react'
import styled from '../../styles/styled-components';

// Components
import Container from '../Container/Container';

// interface HeaderProps {
//     srcLogo: string,
// }

// type HeaderType = {
//     srcLogo: string,
// }

const HeaderWrapper = styled('div')`
    display: block;
`

const HeaderStyled = styled('header')`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const LeftSide = styled('div')`
    flex-basis: 50%;
`

const RightSide = styled('div')`
    flex-basis: 50%;
    display: flex;
    justify-content: flex-end;
`

function Header() {
    return (
        <HeaderWrapper>
            <Container>
                <HeaderStyled>
                    <LeftSide>
                        Left
                    </LeftSide>
                    <RightSide>
                        Right
                    </RightSide>
                </HeaderStyled>
            </Container>
        </HeaderWrapper>
    )
}

export default Header;