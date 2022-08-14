import styled from 'styled-components'

import bgAsset from '../../assets/bg-image-login.webp'
import bgAssetMobile from '../../assets/bg-image-login-mobile.webp'
import ioasysLogoWhite from '../../assets/logo-white.webp'

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
    gap: 10px;

    p {
        font-size: 22px;
        color: var(--white);
    }

    @media(max-width: 680px) {
        width: 100%;
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

const ButtonOut = styled.button`
    width: 85px;
    height: 36px;
    border-radius: 44px;
    padding: 8px;
    background-color: var(--white);
    color: var(--firebrick-variation);
    cursor: pointer;
    transition: all ease .5s;

    &:hover {
        background-color: var(--black);
        color: var(--white);
    }
`

const ErrorMessage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 240px;
    height: auto;
    padding: 16px;
    background-color: var(--white-transparent);
    border-radius: 4px;
    position: relative;

    &:after {
        content: '';
        bottom: 100%;
        left: 7%;
        border: solid transparent;
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
        border-bottom-color: var(--white-transparent);
        border-width: 10px;
        margin-left: -10px;
      }

    span {
        font-weight: bold;
        font-size: 16px;
        color: var(--white);
    }
`

export { Container, Wrapper, Content, Logo, ButtonOut, ErrorMessage }