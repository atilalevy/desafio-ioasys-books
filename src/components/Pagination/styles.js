import styled from "styled-components"

import pagination from '../../assets/pagination.svg'

const PaginationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    gap: 8px;

    p {
        font-size: 12px;
    }

    @media(max-width: 680px) {
        justify-content: center;
    }
`

const PaginationButton = styled.button`
    display: flex;
    width: 32px;
    height: 32px;
    cursor: pointer;
    background-image: url(${pagination});
    background-repeat: no-repeat;
    background-size: contain;
    background-color: transparent;
    transform: rotate(${({ prev }) => prev ? '180deg' : '0'});

    &:disabled {
        cursor: initial;
        opacity: 0.5;
    }
`

export { PaginationContainer, PaginationButton }