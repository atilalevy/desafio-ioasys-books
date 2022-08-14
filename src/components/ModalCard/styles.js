import styled from 'styled-components'

const Overlay = styled.div`
  background: var(--black-transparent);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Heevo', sans-serif;

  @media(max-width: 680px) {
    align-items: start;
    padding: 64px 0 12px;
  }
`

const CardWrapper = styled.div`
    display: flex;
    align-items: start;
    justify-content: space-between;
    width:  770px;
    height: 100%;
    max-height: 500px;
    padding: 48px;
    background-color: var(--white);
    border-radius: 4px;
    position: relative;
    overflow: auto;

    ::-webkit-scrollbar {
        width: 4px;
    }

    ::-webkit-scrollbar-track {
        background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--fandango);
        border-radius: 30px;
    }

    img {
        width: auto;
        height: 100%;
    }

    @media(max-width: 1000px) {
        width: 80%;
        padding: 24px;
    }

    @media(max-width: 680px) {
        flex-wrap: wrap;
        justify-content: center;
        height: 80%;
        max-height: none;

        img {
            width: 100%;
            height: auto;
            margin-bottom: 24px;
        }
    }
`

const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    width: 50%;
    height: 100%;
    line-height: 1.2;

    @media(max-width: 680px) {
        width: 100%;
        gap: 15px;
    }
`

const CardMainContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;

    h2 {
        font-size: 28px;
        color: var(--dark-gray);
    }

    span {
        font-size: 12px;
        color: var(--fandango);
    }
`

const CardInfos = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 12px;
    width: 100%;

    p {
        font-weight: bold;
        color: var(--dark-gray);
        margin-bottom: 20px;
    }

    span {
        color: var(--spanish-gray);
    }

    ul {
        width: 100%;
        li {
            display: flex;
            width: 100%;
            margin: 4px 0;
            align-items: center;
            justify-content: space-between;

            p {
                margin-bottom: 0;
            }
        }
    }
`

const CardReview = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 12px;
    width: 100%;

    p {
        font-weight: bold;
        color: var(--dark-gray);
        margin-bottom: 20px;
    }

    span {
        color: var(--spanish-gray);
    }
`

const ButtonClose = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: var(--white);
    color: var(--dark-gray);
    cursor: pointer;
    position: absolute;
    top: 15px;
    right: 30px;

    @media(max-width: 680px) {
        right: 15px;
    }
`

export { Overlay, CardWrapper, CardContent, CardMainContent, CardInfos, CardReview, ButtonClose }