import styled from 'styled-components'

const CardWrapper = styled.div`
    display: flex;
    align-items: start;
    justify-content: space-between;
    width: 272px;
    height: 160px;
    padding: 16px;
    background-color: var(--white);
    border-radius: 4px;
    line-height: 1.2;
    box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
    cursor: pointer;

    img {
        width: auto;
        height: 100%;
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        width: 55%;
        height: 100%;
    }

    .main-info {
        display: flex;
        flex-direction: column;
    }

    .others-info {
        display: flex;
        flex-direction: column;
    }

    .book-title {
        font-size: 14px;
        font-weight: 500;
        color: var(--dark-gray);
    }

    .book-autor {
        font-size: 12px;
        color: var(--firebrick-variation);
    }

    .book-general-descriptions {
        font-size: 12px;
        color: var(--spanish-gray);
    }

    @media(max-width: 680px) {
        width: 260px;
    }
`

export { CardWrapper }