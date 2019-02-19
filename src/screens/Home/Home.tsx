// Modules
import React from 'react';
import styled from '../../styles/styled-components';

// Components
import Container from '../../components/Container/Container';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

const HomeWrapper = styled('div')`
    display: block;
`

function Home() {
    return (
        <div>
            <HomeWrapper>
                <Container>
                    <Button color="primary" fontSize="lg" rounded="lg" size="md">
                        Child
                    </Button>
                </Container>
            </HomeWrapper>
        </div>
    )
}

export default Home;