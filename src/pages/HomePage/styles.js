import styled from 'styled-components'

import bgAsset from '../../assets/bg-image-home.webp'
import ioasysLogoBlack from '../../assets/logo-black.webp'
import logOut from '../../assets/log-out.svg'

const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 768px;
    background-image: url(${bgAsset});
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: 100%;
    max-width: 1280px;
    height: 100%;
    padding: 40px 12px 90px;

    @media(max-width: 1000px) {
        align-items: center;
        justify-content: center;
    }
`

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 40px;
`

const Logo = styled.span`
    font-family: 'Heebo', sans-serif;
    font-size: 28px;
    color: var(--black);
    padding-left: 120px;
    position: relative;

    &:before {
        content: '';
        position: absolute;
        background-image: url(${ioasysLogoBlack});
        background-size: contain;
        background-repeat: no-repeat;
        width: 104px;
        height: 36px;
        top: 2px;
        left: 0;
    }
`

const UserWelcome = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    p {
        font-family: 'Heebo', sans-serif;
        font-size: 12px;
        line-height: 1.2;
    }

    strong {
        font-weight: bold;
    }

    button {
        width: 32px;
        height: 32px;
        background-color: transparent;
        background-image: url(${logOut});
        background-repeat: no-repeat;
        background-size: contain;
        cursor: pointer;
    }

    @media(max-width: 680px) {
        p {
            display: none;
        }
    }
`

const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 16px;
`

export { Container, Wrapper, Header, Logo, UserWelcome, Content }