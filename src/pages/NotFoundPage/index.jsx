import React from 'react'
import styled from 'styled-components'

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
    justify-content: center;
    width: 100%;
    max-width: 1280px;
    height: 100%;

    @media(max-width: 680px) {
        padding: 0 12px;
        align-items: center;
        justify-content: center;
    }
`

const Title = styled.h1`
    font-family: 'Heebo', sans-serif;
    font-size: 28px;
    color: var(--white);
    padding-left: 120px;
    position: relative;
    margin-bottom: 50px;

    &:before {
        content: '';
        position: absolute;
        background-image: url(${ioasysLogo});
        background-size: contain;
        background-repeat: no-repeat;
        width: 104px;
        height: 36px;
        top: 2px;
        left: 0;
    }
`

const Description = styled.h2`
    font-size: 60px;
    color: var(--white);
`

export default function NotFoundPage () {

    return(
        <Container>
            <Wrapper>
                <Title>Books</Title>
                <Description>Erro 404 - Página não encontrada</Description>
            </Wrapper>
        </Container>
    )
}
