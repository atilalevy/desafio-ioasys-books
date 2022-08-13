import React, { useContext } from 'react'
import styled from 'styled-components'

import { AuthContext } from '../../Context/AuthContext'

import bgAsset from '../../assets/bg-image-home.webp'
import bgAssetMobile from '../../assets/bg-image-home-mobile.webp'
import ioasysLogo from '../../assets/Logo.webp'

const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 768px;
    background-image: url(${bgAsset});
    background-size: cover;
    background-repeat: no-repeat;

    @media(max-width: 680px) {
        background-image: url(${bgAssetMobile});
    }
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    max-width: 1280px;
    height: 100%;

    @media(max-width: 680px) {
        padding: 0 12px;
        align-items: center;
        justify-content: center;
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: 100%;
    max-width: 368px;

    @media(max-width: 680px) {
        width: 100%;
    }
`

const Title = styled.h1`
    font-family: 'Heebo', sans-serif;
    font-size: 28px;
    color: var(--white);
    padding-left: 120px;
    position: relative;
    margin-bottom: 50px;
`

export default function BooksPage () {
    const { authenticated } = useContext(AuthContext)
    console.log('BooksPage: ' + authenticated)

    return(
        <Container>
            <Wrapper>
                <Content>
                    <Title>BooksPage</Title>
                </Content>
            </Wrapper>
        </Container>
    )
}
