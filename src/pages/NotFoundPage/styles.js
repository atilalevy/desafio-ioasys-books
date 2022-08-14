import styled from 'styled-components'

import bgAsset from '../../assets/bg-image-login.webp'
import bgAssetMobile from '../../assets/bg-image-login-mobile.webp'
import ioasysLogoWhite from '../../assets/logo-white.webp'

const Container = styled.section`
    display: flex;
    align-items: start;
    justify-content: start;
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
    flex-direction: column;
    align-items: center;
    justify-content: start;
    width: 100%;
    max-width: 1280px;
    height: 100%;
    padding-top: 40px;

    @media(max-width: 680px) {
        padding: 0 12px;
        align-items: center;
        justify-content: center;
    }
`

const Logo = styled.span`
    font-family: 'Heebo', sans-serif;
    font-size: 28px;
    color: var(--white);
    padding-left: 120px;
    position: relative;
    margin-bottom: 10px;

    &:before {
        content: '';
        position: absolute;
        background-image: url(${ioasysLogoWhite});
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

export { Container, Wrapper, Logo, Description }